--- 
title: 使用说明
---

:::tip **户型图插件** 是在房源的三维模型的基础上抽象的一份二维户型图交互，从二维的视角下提供更加精准、直观的户型结构、面积、朝向、承重、入户门等信息展示。
:::

**目前抽象了三个使用场景的插件：**

- [PanoFloorplanRadarPlugin] 全景户型雷达图插件
- [ModelFloorplanPlugin] 模型户型图插件
- [TopviewFloorplanPlugin] 俯视模型户型图插件

**户型图插件** 与房源的三维模型相辅相成，您可以按照实际业务的诉求选择合适的插件。

## 依赖说明

:::tip 🌟 **请注意，户型图相关插件强依赖于户型图数据！！！**🌟
:::

## 功能说明

<div style={{display:'flex'}}>
    <img src="https:////vrlab-static.ljcdn.com/release/web/temp/floorplanRadar.57b51f71.png" alt="全景雷达图" width="50%" height="50%" />
    <img src="https:////vrlab-static.ljcdn.com/release/web/temp/floorplan.15808fa0.png" alt="模型户型图" width="50%" height="50%" />
</div>

户型图的展示一般会有两种场景：**浏览房源全景时雷达图**（上图左），以及 **查看房源三维模型状态下的详细户型图**（上图右）。

## 插件选择

如果您想在房源点位全景模式下展示户型图，可以采用[PanoFloorplanRadarPlugin] 全景户型雷达图插件，效果类似于上图左所示。<br/>

对于在房源三维模型模式下展示户型图，目前有两种选择：

- 如果使用功能比较复杂，希望有更多的功能支持，可以选择 [ModelFloorplanPlugin] 模型户型图插件；
- 如果使用场景较为简单，希望快捷接入，可以选择 [TopviewFloorplanPlugin] 俯视模型户型图插件。

两个插件整体的效果都类似于上图右所示，彼此间的区别是：

- [ModelFloorplanPlugin] 支持在户型图上进行滑动时自动切换到模型模式。同时在展示时，支持更多样化的配置参数。切换效果也会更加流畅。
- [TopviewFloorplanPlugin] 则能够监听 `Five` 实例状态的变化，自动的进行展示和隐藏，不需要进行显示的 `plugin.show()`、`plugin.hide()` 调用。

## 补充说明

户型图插件的目的是更详细的展示、描述户型信息的交互，目前还在不断完善中。

您可以参考 [户型相关描述用语](https://open-platform.realsee.com/developer/docs/front/3d-space/advanced/dnalogel/floorplan/desc/)，我们在不断尝试从三维、二维等各个层面来体现房源的户型特征、信息。
