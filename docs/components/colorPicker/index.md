---
title: 颜色选择器
sidebarDepth: 2
---

# {{ $frontmatter.title }}

## 初始化颜色

:::demo 初始化颜色为黑色。

colorPicker/init

:::

## 禁用颜色选择器

:::demo `disabled`默认值为`false`。

colorPicker/disabled

:::


## 取消透明度

:::demo `showAlpha`默认值为`true`。

colorPicker/hideAlpha

:::


## 预设颜色块

:::demo

colorPicker/predefineColors

:::


## X6ColorPicker 属性

| 参数      | 说明                                               | 类型       | 可选值  | 默认值  |
|-----------|----------------------------------------------------|------------|---------|---------|
| color     | 绑定的色值                                         | string     | -       | `#000000` |
| disabled  | 是否禁用                                           | boolean    | -       | `false`   |
| showAlpha      | 是否使用透明度                               | boolean     | -       | `false`   |
| colorFormat    | 颜色类型                                        | string     | `hex, rgb`       | `hex`      |
| predefineColors    | 预设颜色块       | array    | -       | - |

## X6ColorPicker 事件

| Event Name | Description                             | Parameters                                                                                            |
| ---------- | --------------------------------------- | -------------------------- |
| change   | 颜色修改后触发 | color（修改后的颜色值） |