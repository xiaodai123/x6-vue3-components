---
title: 提示
sidebarDepth: 2
---

# {{ $frontmatter.title }}

[[toc]]

:::doc-toc

## Hover触发

:::demo `trigger`为`mouseenter focus`。

tooltip/hover

:::

## 鼠标点击触发

:::demo `trigger`为`click`。

tooltip/click

:::

## 下拉菜单的位置

:::demo `placement`有`top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `auto`, `auto-start`, `auto-end`。

tooltip/placement

:::

## 渲染位置

:::demo 渲染位置有`body`, `parent`。

tooltip/location

:::

## 主题

:::demo 主题有`dark`, `light`, `light-border`。

tooltip/theme

:::


## X6Tooltip 属性

| 参数             | 说明                     | 类型                                          | 可选值  | 默认值  |
|------------------|--------------------------|-----------------------------------------------|---------|---------|
| trigger          | 触发行为                 | string                                        | `contextmenu, mouseenter focus, click, focusin, mouseenter click, manual`       | `mouseenter focus` |
| animation   | transition animation类型 | string                                       | `shift-away, shift-toward, perspective, fade, scale`       | `fade` |
| placement        | 提示的位置           | string                                        | `top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end, auto, auto-start, auto-end`       | `top`       |
| delay  | 鼠标移入后延时多少才显示提示，鼠标移出后延时多少才隐藏提示，单位：秒     | array                    | -       | - |
| hideOnClick   | 点击其他位置隐藏提示内容,trigger为click时设置该值显示更合适               | boolean     | -       | `false`       |
| tAppendTo | 提示渲染位置           | string, function                     | `() => document.body, parent`       | `() => document.body`       |
| tTheme | 提示渲染主题           | string                     | `dark、light、light-border`       | `light`       |
| tAnimateFill | 提示提示箭头           | boolean                     | -       | `false`       |
| interactive | 提示是否可以停留鼠标           | boolean                     | -       | `false`       |


## X6Tooltip 插槽
| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| -                | 提示内容             | -                                             |