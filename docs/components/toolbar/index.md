---
title: 工具栏
sidebarDepth: 2
---

# {{ $frontmatter.title }}

[[toc]]

:::doc-toc

:::tip

`X6Item`组件使用具名插槽`dropdown`传递`X6Toolbar`组件的`onClick`选项

:::

## 基础工具栏

:::demo `X6Item`提供`text`选项和默认插槽显示文本

toolbar/basic

:::

## 添加图标

:::demo `X6Item`提供`icon`选项和`icon`插槽显示文本

toolbar/icon

:::

## 添加提示

:::demo `X6Item`提供`tooltip`选项显示提示

toolbar/tooltip

:::

## 添加下箭头

:::demo `X6Toolbar`提供`dropdownArrow`选项显示下箭头

toolbar/dropdownArrow

:::

## 添加事件

:::demo

toolbar/event

:::


## X6Toolbar 属性

| 参数        | 说明                              | 类型                                | 可选值  | 默认值  |
|-------------|-----------------------------------|-------------------------------------|---------|---------|
| className   | 自定义样式名                      | string                              | -       | -       |
| size        | 工具栏大小                        | string                | `small、big`       | `big`       |
| align       | 工具对齐方式                      | string               | `left、right`        | `left`        |
| hoverEffect | 鼠标 Hover 时是否显示一个圆角背景 | boolean                             | - | `false` |
| onClick     | 点击工具栏的回调函数              | (name, value) => void | -       | -       |

## X6Toolbar 插槽
| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| -               | 工具栏内容            | X6Group                                            |
| extra           | 工具栏扩展内容             | -                                             |

## X6Group 属性

| 参数      | 说明         | 类型   | 可选值 | 默认值 |
|-----------|------------|----------|--------|--------|
| className | 自定义样式名 | string | -      | -      |

## X6Group 插槽

| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| -               | 工具栏分组内容            | X6Item                                             |
  
## X6Item 属性

| 参数           | 说明                                                            | 类型                    | 可选值 | 默认值 |
|----------------|-----------------------------------------------------------------|-------------------------|--------|--------|
| className      | 自定义样式名                                                    | string                  | -      | -      |
| name           | 工具项名称                                                      | string                  | -      | -      |
| icon           | 工具项图标                                                      | string               | -      | -      |
| text           | 显示的文本                                                      | string    | -      | -      |
| hidden         | 是否隐藏                                                        | boolean                 | -      | -      |
| disabled       | 是否禁用                                                        | boolean                 | -      | -      |
| active         | 是否被激活                                                      | boolean                 | -      | -      |
| tooltip        | 工具提示文本                                                    | string                  | -      | -      |
| tooltipProps   | [X6Tooltip](../tooltip/) 组件的选项 | X6TooltipProps            | -      | -      |
| tooltipAsTitle | 是否将提示文本作为工具项的 `title` 属性                         | boolean                 | -      | -      |
| dropdownArrow  | 是否显示下拉菜单箭头                                            | boolean                 | -      | -      |
| dropdownProps       | [X6Dropdown](../dropdown/) 组件的选项 | X6DropdownProps         | -      | -      |
| onClick        | 点击工具项的回调函数                                            | (name) => void | -      | -      |

## X6Item 插槽

| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| -                | 工具栏项文本内容         | -                                             |
| icon             | 工具栏项图标内容         | -                                             |
| dropdown         | 工具栏项下拉内容         | -                                             |