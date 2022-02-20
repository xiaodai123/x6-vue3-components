---
title: 菜单
sidebarDepth: 2
---

# {{ $frontmatter.title }}

[[toc]]

:::doc-toc

菜单组件。一般在 [X6Menubar](../menubar/)、[X6ContextMenu](../contextmenu/)、[X6Dropdown](../dropdown/) 组件中使用。

## 基础菜单

:::demo X6Menu子节点是X6MenuItem。`X6Divider`提供分割线。

menu/basic

:::

:::tip

菜单默认是没有边框的，需要添加`border`属性显示边框。

:::

## 图标菜单

:::demo 图标的添加有两种方式，第一种是传`icon`class参数，第二种是传`icon`slot。

menu/icon

:::

## 添加事件

:::demo 按照原有react组件原则，没有使用vue的事件原则。

menu/event

:::

## 添加热键

:::demo `autoHotkey`或则`registerHotkey`都可以开启菜单热键功能。

menu/hotKey

:::

:::tip

`registerHotkey`选项更灵活，需要配合`hotkeys-js`使用。

:::

## 二级子菜单

:::demo `arrow`选项开启菜单箭头。

menu/submenu

:::

## 禁用菜单

:::demo `disabled`选项禁用菜单。

menu/disabled

:::


## X6Menu 属性

| 参数             | 说明                     | 类型                                          | 可选值  | 默认值  |
|------------------|--------------------------|-----------------------------------------------|---------|---------|
| className        | 自定义的样式名           | string                                        | -       | -       |
| border           | 菜单边框                 | boolean                                       | -       | `false` |
| hasIcon          | 是否包含 Icon            | boolean                                       | -       | `false` |
| onClick          | 点击 MenuItem 调用此函数 | (name) => void                                | -       | -       |
| autoHotkey       | 开启菜单自带热键功能     | boolean                                       | -       | `false` |
| registerHotkey   | 注册快捷键               | (hotkey: handler) => void                     | -       | -       |
| unregisterHotkey | 取消注册快捷键           | (hotkey: handler) => void                     | -       | -       |


## X6Menu 插槽

| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| —                | 自定义默认内容           | X6MenuItem/X6SubMenu/X6Divider                |


## X6SubMenu 属性

| 参数      | 说明                                               | 类型       | 可选值  | 默认值  |
|-----------|----------------------------------------------------|------------|---------|---------|
| className | 自定义的样式名                                     | string     | -       | -       |
| name      | 菜单名称(唯一标识)，在 Menu 的 `onClick` 回调用使用| string     | -       | -       |
| icon      | 菜单图标                                           | string     | -       | -       |
| text      | 菜单文本                                           | string     | -       | -       |
| hotkey    | 菜单快捷键                                         | string     | -       | -       |
| active    | 是否被激活(显示鼠标 Hover 的背景和子菜单)          | boolean    | -       | `false` |
| hidden    | 是否隐藏                                           | boolean    | -       | `false` |
| disabled  | 是否被禁用                                         | boolean    | -       | `false` |
| arrow     | 是否显示子菜单箭头                                 | boolean    | -       | `false` |

## X6SubMenu 插槽

| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| —                | 菜单文本                 | -                                             |
| icon             | 菜单图标                 | -                                             |

## X6MenuItem 属性

| 参数      | 说明                                               | 类型       | 可选值  | 默认值  |
|-----------|----------------------------------------------------|------------|---------|---------|
| className | 自定义的样式名                                     | string     | -       | -       |
| name      | 菜单名称(唯一标识)，在 Menu 的 `onClick` 回调中使用，如果不设置 `name` 属性，`onClick` 将不会被调用。| string     | -       | -       |
| icon      | 菜单图标                                           | string     | -       | -       |
| text      | 菜单文本                                           | string     | -       | -       |
| hotkey    | 菜单快捷键                                         | string     | -       | -       |
| active    | 是否被激活(显示鼠标 Hover 的背景)                  | boolean    | -       | `false` |
| hidden    | 是否隐藏                                           | boolean    | -       | `false` |
| disabled  | 是否被禁用                                         | boolean    | -       | `false` |
| onClick   | 点击 MenuItem 调用此函数                           | () => void | -       | -       |

## X6MenuItem 插槽

| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| —                | 菜单文本                 | -                                             |
| icon             | 菜单图标                 | -                                             |


## X6Divider

菜单项分割线。