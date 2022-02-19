---
title: 自定义滚动条的容器
sidebarDepth: 2
---

# {{ $frontmatter.title }}


:::tip

该滚动条依赖[OverlayScrollbars](https://kingsora.github.io/OverlayScrollbars/#!documentation/options),具体配置请参考官网

:::

## 元素调整大小

:::demo `resize`有`none, both, horizontal, vertical`。

scrollbox/resize

:::

## 溢出后行为

:::demo

scrollbox/xy

:::


## 滚动条的行为

:::demo

scrollbox/scroll

:::


## X6Scrollbox 属性

| 参数             | 说明                     | 类型                                          | 可选值  | 默认值  |
|------------------|--------------------------|-----------------------------------------------|---------|---------|
| className          | 自定义的样式名                 | string                                        | -       | `os-theme-dark` |
| resize   | 宿主元素的调整大小行为 | string                                       | `none, both, horizontal, vertical`       | `none` |
| sizeAutoCapable        | 宿主元素是否能够“自动”大小           | boolean       |      | `true`       |
| overflowBehaviorX  | 定义如何处理X轴的溢出     | string                    | `hidden, scroll, visible-hidden, visible-scroll`      | `scroll` |
| overflowBehaviorY  | 定义如何处理Y轴的溢出     | string                    | `hidden, scroll, visible-hidden, visible-scroll`      | `scroll` |
| scrollbarsVisibility   | 滚动条是否可见            | string     | `visible, hidden, auto`       | `auto`       |
| scrollbarsAutoHide | 滚动条是否自动隐藏           | string      | `never, scroll, leave, move       | `never`       |
| scrollbarsAutoHideDelay | 滚动条隐藏延迟时间,单位：毫秒         | number                     | -      | `800`       |
| initializedCb | 滚动条初始化钩子           | function                     | -       | -       |
| destroyedCb | 滚动条销毁钩子           | function                     | -       | -       |
| scrollStartCb | 滚动条滚动开始钩子，参数为eventArgs          | function                     | -       | -       |
| scrollCb | 滚动条滚动钩子，参数为eventArgs          | function                     | -       | -       |
| scrollStopCb | 滚动条滚动停止钩子，参数为eventArgs          | function                     | -       | -       |



## X6Scrollbox 插槽
| 插槽名           | 说明                     | 子标签                                        |
|------------------|--------------------------|-----------------------------------------------|
| -                | 滚动条内容             | -                                             |