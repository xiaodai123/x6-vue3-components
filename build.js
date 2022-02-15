const packageName = 'x6-vue3-components';
const rollupUmdName = 'X6Vue3Components';

const filesInfo = {
    fileName: packageName,
    srcFolder: './src',
    distFolder: 'dist',
    cache: []
}

const packagePaths = {
    main: `${filesInfo.distFolder}/${filesInfo.fileName}.js`,
    module: `${filesInfo.distFolder}/${filesInfo.fileName}.esm.js`,
    mainMin: `${filesInfo.distFolder}/${filesInfo.fileName}.min.js`,
    moduleMin: `${filesInfo.distFolder}/${filesInfo.fileName}.esm.min.js`
}

const rollupUmdGlobals = {
    'add-dom-event-listener': 'addEventListener',
    'clamp': 'clamp',
    'hotkeys-js': 'hotkeys',
    'overlayscrollbars': 'OverlayScrollbars',
    'tippy.js': 'tippy',
    'tippy.vue': 'TippyVue',
    'vue': 'Vue'
}

import sh from 'shelljs';
import chalk from 'chalk';
import gulp from 'gulp';
import { rollup } from 'rollup';
// 将 CommonJS 模块转换为 ES6 供 rollup 处理
import commonjs from '@rollup/plugin-commonjs';
// rollup 无法识别 node_modules 中的包，帮助 rollup 查找外部模块，然后导入
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import vuePlugin from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';

const buildInputConfig = function(isDev) {
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
            "./src/",
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

    let rollupInputConfig = {
        input: `${filesInfo.srcFolder}/index.js`,
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
    sh.echo(`> Removing ${filesInfo.distFolder}`);
    sh.rm('-rf', filesInfo.distFolder);
    done();
});

gulp.task('rollup', function (done) {
    sh.echo('> Rollup:');
    (async function () {
        let devInputConfig = buildInputConfig(true)
        let prodInputConfig = buildInputConfig(false)
        let es5umdBundle = await rollup({
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

        let es5umdMinBundle = await rollup({
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


        let es6esmBundle = await rollup({
            ...devInputConfig,
            plugins: devInputConfig.plugins
        });
        await es6esmBundle.write({
            file: packagePaths.module,
            format: 'esm',
            ...rollupOutputConfig
        });
        sh.echo(chalk.yellowBright(`  [esm]: `) + chalk.greenBright(`${devInputConfig.input} → ${packagePaths.module}`));

        let es6esmMinBundle = await rollup({
            ...prodInputConfig,
            plugins: prodInputConfig.plugins
        });
        await es6esmMinBundle.write({
            file: packagePaths.moduleMin,
            format: 'esm',
            ...rollupOutputConfig
        });
        sh.echo(chalk.yellowBright(`  [esm.min]: `) + chalk.greenBright(`${prodInputConfig.input} → ${packagePaths.moduleMin}`));
        
        filesInfo.cache.forEach(function (cacheFolder) {
            if (sh.test('-d', cacheFolder)) {
                sh.rm('-rf', cacheFolder);
            }
        });

        sh.echo(chalk.greenBright('Building finished!'));
        done();
    })();
});

gulp.series('prepare', 'rollup')();