---
title: 分割容器
sidebarDepth: 2
---

# {{ $frontmatter.title }}

[[toc]]

:::doc-toc

## 简单分割

:::demo X6SplitBox有主次两个Box。

splitbox/basic

:::

## 不显示分割线

:::demo

splitbox/noDivider

:::

## 复杂分割

:::demo

splitbox/complex

:::


## X6SplitBox 属性

| 参数                 | 说明                     | 类型                           | 可选值       | 默认值       |
|----------------------|--------------------------|--------------------------------|--------------|--------------|
| split                | 拆分方向                 | string                 | `vertical、horizontal` | `vertical` |
| resizable            | 是否可以调整面板大小     | boolean                        | -       | `true`       |
| primary              | 主面板                   | string        | `first、second`    | `first`    |
| size                 | 主面板大小               | number、string               | -            | -            |
| defaultSize          | 主面板默认大小           | number、string               | -      | `25%`      |
| minSize              | 主面板最小大小           | number                         | -            | -            |
| maxSize              | 主面板最大大小           | number                         | -            | -            |
| step                 | 调整大小的步长           | number                         | -            | -            |
| styleProperties      | 组件样式                 | CSSProperties                  | -            | -            |
| boxStyle             | 面板样式                 | CSSProperties                  | -            | -            |
| primaryBoxStyle      | 主面板样式               | CSSProperties                  | -            | -            |
| secondBoxStyle       | 次面板样式               | CSSProperties                  | -            | -            |
| resizerStyle         | 分割条样式               | CSSProperties                  | -            | -            |
| onResizeStart        | 开始调整大小时的回调函数 | () => void                     | -            | -            |
| onResizeEnd          | 调整大小结束时的回调函数 | (newSize) => void      | -            | -            |
| onResizing           | 调整大小过程中的回调函数 | (newSize) => void      | -            | -            |
| onResizerClick       | 单击分隔条的回调函数     | () => void                     | -            | -            |
| onResizerDoubleClick | 双击分隔条的回调函数     | () => void                     | -            | -            |

## X6SplitBox 插槽
| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| first            | 第一个Box内容            | -                                             |
| second           | 第二个Box内容            | -                                             |