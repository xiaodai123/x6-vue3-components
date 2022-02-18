---
title: 开发指南
---

# {{ $frontmatter.title }}

搭建一个复杂的图编辑应用还需要用到 Menubar、Toolbar、Dropdown、ContextMenu、Splitbox 等 UI 组件，我们在 [x6-vue3-components](https://www.npmjs.com/package/x6-vue3-components) 中提供了一些这样的 Vue3 组件，可以搭配 [antd](https://ant.design/) 使用。

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
import 'x6-vue3-components/dist/x6-vue3-components.css'
// or min css
import 'x6-vue3-components/dist/x6-vue3-components.min.css'
```

我们强烈建议使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 插件来自动引用组件样式，在 `.babelrc` 或 babel-loader 中添加如下配置：

```js
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "x6-vue3-components",
        "libraryDirectory": "es", // es or lib
        "style": true,
        "transformToDefaultImport": true
      }
    ]
  ]
}
```

这样我们引入组件时就会自动引入对应的样式：

```ts
import { Menu } from '@antv/x6-react-components'
```

如果是使用 `script` 标签引入，使用方式如下：

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>X6-React-Components</title>
  <link rel="stylesheet" href="https://unpkg.com/@antv/x6-react-components/dist/index.css">
</head>
<body>
  <div id="container"></div>
  <script src="babel.js"></script>
  <script src="react.js"></script>
  <script src="react-dom.js"></script>
  <script src="https://unpkg.com/@antv/x6-react-components/dist/x6-react-components.js"></script>
  <script type="text/babel">
    const Menu = X6ReactComponents.Menu
    const MenuItem = Menu.Item
    ReactDOM.render((
      <Menu >
        <MenuItem name="undo"  hotkey="Cmd+Z" text="Undo" />
        <MenuItem name="redo"  hotkey="Cmd+Shift+Z" text="Redo" />
      </Menu>
    ), document.getElementById('container'))
  </script>
</body>
</html>
```

## 组件

点击下面链接查看每个组件的使用文档。

- [Menu](/en/docs/api/ui/menu) 菜单
- [Dropdown](/en/docs/api/ui/dropdown) 下拉菜单
- [ContextMenu](/en/docs/api/ui/contextmenu) 右键菜单
- [Menubar](/en/docs/api/ui/menubar) 菜单栏
- [Toolbar](/en/docs/api/ui/toolbar) 工具栏
- [SplitBox](/en/docs/api/ui/splitbox) 分割容器
- [ScrollBox](/en/docs/api/ui/scrollbox) 自定义滚动条的容器
- [AutoScrollBox](/en/docs/api/ui/auto-scrollbox) 自动根据内容大小设置和更新容器的滚动条
- [ColorPicker](/en/docs/api/ui/color-picker) 颜色选择器