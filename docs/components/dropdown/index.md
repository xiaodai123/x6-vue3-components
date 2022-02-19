---
title: 下拉菜单
sidebarDepth: 2
---

# {{ $frontmatter.title }}

## Hover触发

:::demo `trigger`为`mouseenter focus`。

dropdown/hover

:::

## 鼠标右键触发

:::demo `trigger`为`contextmenu`。

dropdown/contextMenu

:::

## 下拉菜单的位置

:::demo `placement`有`top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `auto`, `auto-start`, `auto-end`。

dropdown/placement

:::

## 渲染位置

:::demo 渲染位置有`body`, `parent`。

dropdown/location

:::

## 主题

:::demo 主题有`dark`, `light`, `light-border`。

dropdown/theme

:::

## X6Dropdown 属性

| 参数             | 说明                     | 类型                                          | 可选值  | 默认值  |
|------------------|--------------------------|-----------------------------------------------|---------|---------|
| className        | 自定义的样式名           | string                                        | -       | -       |
| trigger          | 触发行为                 | string                                        | `contextmenu, mouseenter focus, click, focusin, mouseenter click, manual`       | `click` |
| transitionName   | transition animation类型 | string                                       | `shift-away, shift-toward, perspective, fade, scale`       | `shift-away` |
| placement        | 下拉菜单的位置           | string                                        | `top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end, auto, auto-start, auto-end`       | `bottom`       |
| mouseEnterDelay  | 鼠标移入后延时多少才显示下拉菜单，单位：秒     | number                    | -       | `0.15` |
| mouseLeaveDelay   | 鼠标移出后延时多少才隐藏下拉菜单，单位：秒               | number     | -       | `0.1`       |
| tAppendTo | 下拉菜单渲染位置           | string, function                     | `() => document.body, parent`       | `() => document.body`       |
| tTheme | 下拉菜单渲染主题           | string                     | `dark、light、light-border`       | `light`       |
| tAnimateFill | 下拉菜单提示箭头           | boolean                     | -       | `false`       |

## X6Dropdown 插槽

| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| —                | 渲染文本                 | -                                             |
| visible          | 下拉菜单内容             | -                                             |