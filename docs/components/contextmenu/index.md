---
title: 上下文菜单
sidebarDepth: 2
---

# {{ $frontmatter.title }}

## 基础使用

:::demo 右键触发。

contextmenu/basic

:::

## X6ContextMenu 属性

| 参数             | 说明                     | 类型                                          | 可选值  | 默认值  |
|------------------|--------------------------|-----------------------------------------------|---------|---------|
| className        | 自定义的样式名           | string                                        | -       | -       |
| transitionName   | transition animation类型 | string                                       | `shift-away, shift-toward, perspective, fade, scale`       | `shift-away` |
| placement        | 下拉菜单的位置           | string                                        | `top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end, auto, auto-start, auto-end`       | -       |
| mouseEnterDelay  | 鼠标移入后延时多少才显示下拉菜单，单位：秒     | number                    | -       | `0.15` |
| mouseLeaveDelay   | 鼠标移出后延时多少才隐藏下拉菜单，单位：秒               | number     | -       | `0.1`       |
| tAppendTo | 下拉菜单渲染位置           | string, function                     | `() => document.body, parent`       | `() => document.body`       |
| tTheme | 下拉菜单渲染主题           | string                     | `dark、light、light-border`       | `light-border`       |
| tAnimateFill | 下拉菜单提示箭头           | boolean                     | -       | `false`       |

## X6ContextMenu 插槽

| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| —                | 渲染文本                 | -                                             |
| menu             | 菜单内容                 | -                                             |