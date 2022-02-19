---
title: 开发指南
---

# {{ $frontmatter.title }}

搭建一个复杂的图编辑应用还需要用到 X6Menubar、X6Toolbar、X6Dropdown、X6ContextMenu、X6Splitbox 等 UI 组件，我们在 [x6-vue3-components](https://www.npmjs.com/package/x6-vue3-components) 中提供了一些这样的 Vue3 组件，可以搭配 [elemnt-plus](https://element-plus.gitee.io/) 使用。

## 安装

```shell
# npm
$ npm install x6-vue3-components --save

# yarn
$ yarn add x6-vue3-components
```



## 使用

引入需要的组件和对应的样式：

```js
import { X6Menu } from 'x6-vue3-components'
// css
import 'x6-vue3-components/lib/x6-vue3-components.css'
// or min css
import 'x6-vue3-components/lib/x6-vue3-components.min.css'
```

我们强烈建议使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 插件来自动引用组件样式，在 `babel.config.js` 或 babel-loader 中添加如下配置：

```js
{
    plugins: [
        [
            "import",
            {
                libraryName: "x6-vue3-components",
                libraryDirectory: "lib",
                style: (name) => {
                    const libDirIndex = name.lastIndexOf('/')
                    const libDir = name.substring(0, libDirIndex)
                    const fileName = name.substr(libDirIndex + 1)
                    return `${libDir}/${fileName}.css`;
                }
            }
        ]
    ]
}
```

这样我们引入组件时就会自动引入对应的样式：

```js
import { X6Menu } from 'x6-vue3-components'
```

如果是使用引入后报错：`[Vue warn]: Invalid VNode type: Symbol(Comment) (symbol)`。请参考该[issues](https://github.com/vuejs/core/issues/2064#issuecomment-797365133)。具体修改如下：

With webpack and Vue CLI in `vue.config.js`
```js
const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve('./node_modules/vue')
      }
    }
  }
}
```

With Vite in `vite.config.js`
```js
export default {
  resolve: {
    dedupe: ['vue']
  }
}
```

## 组件

点击下面链接查看每个组件的使用文档。



- [X6Menu](./menu/) 菜单
- [X6Dropdown](./dropdown/) 下拉菜单
- [X6ContextMenu](./contextmenu/) 上下文菜单
- [X6Menubar](./menubar/) 菜单栏
- [X6Toolbar](./toolbar/) 工具栏
- [X6SplitBox](./splitbox/) 分割容器
- [X6ScrollBox](./scrollbox/) 自定义滚动条的容器
- [X6Tooltip](./tooltip/) 提示
- [X6ColorPicker](./colorPicker/) 颜色选择器