const packageName = 'x6-vue3-components';
const rollupUmdName = 'X6Vue3Components';

const filesInfo = {
    fileName: packageName,
    srcFolder: './components',
    libFolder: 'lib',
    cache: []
}

const packagePaths = {
    main: `${filesInfo.libFolder}/${filesInfo.fileName}.js`,
    module: `${filesInfo.libFolder}/${filesInfo.fileName}.esm.js`,
    mainMin: `${filesInfo.libFolder}/${filesInfo.fileName}.min.js`,
    moduleMin: `${filesInfo.libFolder}/${filesInfo.fileName}.esm.min.js`
}

const components = [
    'x6-color-picker',
    'x6-context-menu',
    'x6-divider',
    'x6-dropdown',
    'x6-group',
    'x6-item',
    'x6-menu',
    'x6-menubar',
    'x6-menubar-item',
    'x6-menu-item',
    'x6-scrollbox',
    'x6-split-box',
    'x6-sub-menu',
    'x6-toolbar',
    'x6-tooltip'
]

const rollupUmdGlobals = {
    'add-dom-event-listener': 'addEventListener',
    'clamp': 'clamp',
    'hotkeys-js': 'hotkeys',
    'overlayscrollbars': 'OverlayScrollbars',
    'tippy.js': 'tippy',
    'tippy.vue': 'TippyVue',
    'vue': 'Vue'
}

// import sh from 'shelljs';
const sh = require('shelljs');
// import chalk from 'chalk';
const chalk = require('chalk');
// import gulp from 'gulp';
const gulp = require('gulp');
// import { rollup } from 'rollup';
const rollup = require('rollup');
// 将 CommonJS 模块转换为 ES6 供 rollup 处理
// import commonjs from '@rollup/plugin-commonjs';
const commonjs = require('@rollup/plugin-commonjs');
// rollup 无法识别 node_modules 中的包，帮助 rollup 查找外部模块，然后导入
// import { nodeResolve } from '@rollup/plugin-node-resolve';
const { nodeResolve } = require('@rollup/plugin-node-resolve');
// import { babel } from '@rollup/plugin-babel';
const { babel } = require('@rollup/plugin-babel');
// import scss from 'rollup-plugin-scss';
const scss = require('rollup-plugin-scss');
// import postcss from 'postcss';
const postcss = require('postcss');
// import autoprefixer from 'autoprefixer';
const autoprefixer = require('autoprefixer');
// import vuePlugin from 'rollup-plugin-vue';
const vuePlugin = require('rollup-plugin-vue');
// import { terser } from 'rollup-plugin-terser';
const terser = require('rollup-plugin-terser').terser;
// import replace from '@rollup/plugin-replace';
const replace = require('@rollup/plugin-replace')

const buildInputConfig = function(isDev, windowReplace, srcFlod = '') {
    let scssInputConfig = {
        processor: () => postcss([autoprefixer({
            overrideBrowserslist: [
                "defaults",
                "not ie < 11",
                "last 2 versions",
                "> 1%"
            ]
        })]),
        includePaths: [
            "./components/",
            "node_modules/"
        ]
    }

    if (!isDev) {
        scssInputConfig.outputStyle = "compressed";
    }

    let pluginsConfig = [
        nodeResolve(),
        commonjs(),
        scss(scssInputConfig),
        vuePlugin({ 
            css: true,
            compileTemplate: true
        }),
        babel({
            babelrc: false,
            babelHelpers: 'bundled',
            presets: [
                ['@babel/preset-env']
            ],
            exclude: 'node_modules/**'
        })
    ]
    if (!isDev) {
        pluginsConfig.push(terser());
    }
    pluginsConfig.push(replace({
        preventAssignment: true,
        delimiters: ["", ""],
        values: {
            "window": windowReplace
        }
    }))
    
    let input = `${filesInfo.srcFolder}/index.js`
    if (srcFlod) {
        input = `${filesInfo.srcFolder}/${srcFlod}/index.js`
    }
    let rollupInputConfig = {
        input,
        external: [...Object.keys(rollupUmdGlobals)],
        plugins: pluginsConfig
    }
    return rollupInputConfig
}


const rollupOutputConfig = {
    exports: 'named',
    sourcemap: true
};

sh.echo(chalk.cyanBright('Start building:'));

gulp.task('prepare', function (done) {
    sh.echo(`> Removing ${filesInfo.libFolder}`);
    sh.rm('-rf', filesInfo.libFolder);
    done();
});

gulp.task('rollup', function (done) {
    sh.echo('> Rollup:');
    (async function () {
        let devInputConfig = buildInputConfig(true, "globalThis")
        let prodInputConfig = buildInputConfig(false, "globalThis")
        let devEsmInputConfig = buildInputConfig(true, "window")
        let prodEsmInputConfig = buildInputConfig(false, "window")
        let es5umdBundle = await rollup.rollup({
            ...devInputConfig,
            plugins: devInputConfig.plugins
        });
        await es5umdBundle.write({
            name: rollupUmdName,
            globals: rollupUmdGlobals,
            file: packagePaths.main,
            format: 'umd',
            ...rollupOutputConfig
        });

        sh.echo(chalk.yellowBright(`  [umd]: `) + chalk.greenBright(`${devInputConfig.input} → ${packagePaths.main}`));

        let es5umdMinBundle = await rollup.rollup({
            ...prodInputConfig,
            plugins: prodInputConfig.plugins
        });
        await es5umdMinBundle.write({
            name: rollupUmdName,
            globals: rollupUmdGlobals,
            file: packagePaths.mainMin,
            format: 'umd',
            ...rollupOutputConfig
        });
        sh.echo(chalk.yellowBright(`  [umd.min]: `) + chalk.greenBright(`${prodInputConfig.input} → ${packagePaths.mainMin}`));


        let es6esmBundle = await rollup.rollup({
            ...devEsmInputConfig,
            plugins: devEsmInputConfig.plugins
        });
        await es6esmBundle.write({
            file: packagePaths.module,
            format: 'esm',
            ...rollupOutputConfig
        });
        sh.echo(chalk.yellowBright(`  [esm]: `) + chalk.greenBright(`${devEsmInputConfig.input} → ${packagePaths.module}`));

        let es6esmMinBundle = await rollup.rollup({
            ...prodEsmInputConfig,
            plugins: prodEsmInputConfig.plugins
        });
        await es6esmMinBundle.write({
            file: packagePaths.moduleMin,
            format: 'esm',
            ...rollupOutputConfig
        });
        sh.echo(chalk.yellowBright(`  [esm.min]: `) + chalk.greenBright(`${prodEsmInputConfig.input} → ${packagePaths.moduleMin}`));
        
        filesInfo.cache.forEach(function (cacheFolder) {
            if (sh.test('-d', cacheFolder)) {
                sh.rm('-rf', cacheFolder);
            }
        });

        for(let i = 0; i < components.length; i++) {
            let component = components[i]
            let cjsumdBundleConfig = buildInputConfig(true, "window", component)
            let cjsumdBundle = await rollup.rollup({
                ...cjsumdBundleConfig,
                plugins: cjsumdBundleConfig.plugins
            });
            let file = `${filesInfo.libFolder}/${component}.js`
            await cjsumdBundle.write({
                globals: rollupUmdGlobals,
                file,
                format: 'cjs',
                ...rollupOutputConfig
            });

            sh.echo(chalk.yellowBright(`  [${component}]: `) + chalk.greenBright(`${cjsumdBundleConfig.input} → ${file}`));
        }

        sh.echo(chalk.greenBright('Building finished!'));
        done();
    })();
});

gulp.series('prepare', 'rollup')();