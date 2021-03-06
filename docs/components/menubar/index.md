---
title: 菜单栏
sidebarDepth: 2
---

# {{ $frontmatter.title }}

[[toc]]

:::doc-toc

:::tip

`X6Menubar`组件的子组件有`X6MenubarItem`、`X6Menu`、`X6MenuItem`、`X6Divider`

:::

## 基础菜单栏

:::demo

menubar/basic

:::

## X6Menubar 属性

| 参数                 | 说明                     | 类型                           | 可选值       | 默认值       |
|----------------------|--------------------------|--------------------------------|--------------|--------------|
| className            | 自定义的样式名           | string                 | - | - |

## X6Menubar 插槽
| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| -            | 菜单栏文本内容            | -                                             |
| extra           | 菜单栏扩展内容             | -                                             |


## X6MenubarItem 属性

| 参数                 | 说明                     | 类型                           | 可选值       | 默认值       |
|----------------------|--------------------------|--------------------------------|--------------|--------------|
| text            | 菜单项文本           | string                 | - | - |
| hidden            | 是否隐藏     | boolean                        | -       | `false`       |


## X6MenubarItem 插槽
| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| -               | 菜单栏项内容            | -                                             |
| extra           | 菜单栏扩展内容             | -                                             |