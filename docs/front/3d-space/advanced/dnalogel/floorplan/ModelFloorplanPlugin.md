---
title: 📦 模型户型图
---

## **ModelFloorplanPlugin**

:::tip 此插件强依赖于**户型图数据**，请率先了解如何获取户型图数据。
:::

## 功能说明

**模型户型图插件** 无缝集成了一套基于 VR 3D 模型状态下户型图交互。

借助此插件，您可以在 VR 3D 模型状态下展示更详细的二维户型图，集成的功能如下：
- 支持二维户型图( png / svg 格式)展示。
- 房屋标签展示: **支持自定义标签样式**。
- 展示进入二维户型图前，相机位置和朝向: **支持自定义相机图标**。
- 支持多楼层 VR 房源，即支持多楼层切换。
- 俯视视角上，二维户型图与 VR 3D 模型的自适应对齐。
- 点击二维户型图房间，会自动进入到 VR 对应房间的合适点位。
- 指北针展示: 暂不支持配置，但可以借助 CSS 选择器优先级方式覆盖原有样式。
- 支持手势快捷操作：在二维户型图界面进行滑动，会快速切换到模型状态；在模型状态松手时，如果比较接近户型图的展示角度，会自动旋转模型，并展示户型图。此功能**支持配置**是否禁用。

## 示例效果

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/ModelFloorplanPlugin/index.html"></iframe>
</div>

## 安装引用

**请按需选择 `yarn` 或 `npm` 安装方式：**

```bash npm2yarn
npm install @realsee/dnalogel
```

**通过 es 引用：**

```tsx
import ModelFloorplanPlugin from "@realsee/dnalogel/plugins/floorplan/ModelFloorplanPlugin"
```

## 开发指南

### 初始化

> 方法1：在初始化 `Five` 实例的时候，将 `ModelFloorplanPlugin` 配置在初始化插件参数即可。

```ts
import Five, { FivePluginInits } from '@realsee/five'
import ModelFloorplanPlugin from '@realsee/dnalogel/plugins/floorplan/ModelFloorplanPlugin'

// 初始化 five 实例
const five = new Five({
  plugins: [
    [ModelFloorplanPlugin, "modelFloorplan", {
      // 初始化参数
    }]
  ]
})
```

> 方法2：在创建 FiveProvider 组件时将 `ModelFloorplanPlugin` 配置在初始化插件参数即可。

```ts
import { createFiveProvider } from '@realsee/five/react'

// 创建 FiveProvider 组件
const FiveProvider = createFiveProvider({
    plugins: [
        [ModelFloorplanPlugin, "modelFloorplan", {
            // 初始化参数
        }]
    ]
})
```

> 方法3：在使用 `FiveProvider` 时，将 `ModelFloorplanPlugin` 配置在初始化插件参数即可。

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import { TopviewFloorplanPlugin } from "@realsee/dnalogel";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            ModelFloorplanPlugin,
            'modelFloorplanPlugin', // 自定义插件名称
            {
                // 参数配置
            }
        ]
    ]
}
</script>
```

### 载入数据

```ts
// 获取插件实例
const pluginInstance = five.plugins.modelFloorplan
// 载入数据
pluginInstance.load(floorplanServerData)
```

### 插件核心方法

**ModelFloorplanPlugin** 提供的核心方法有：

- `load(data: FloorplanServerData)` 载入户型图数据

> 您需要手动载入户型图数据，[FloorplanServerData] 的数据来源请阅读[如视开发者中心服务端 API](http://developers.realsee.com/docs/#/docs/five/server/README)

- `appendTo(wrapper: Element)` 挂载 DOM 节点

> 您可以将户型图DOM模块载入您的 HTML 结构中。

- `async show(opts?: ShowOpts): true` 展示

>调用插件的 `show()` 方法，插件会自动操作 `five` 实例到模型俯视状态，并展示当前点位对应楼层的户型图。

``` ts
const floorplanPlugin = five.plugins.floorplan
floorplanPlugin.show()
floorplanPlugin.show(options)
```

>如果需要自定义展示逻辑，也可以传入 `options` 进行配置，配置项声明如下：

``` ts
interface ShowOpts {
  floorIndex?: number   // 要展示的楼层，默认是当前点位对应的楼层
  userAction?: boolean  // 在户型图展示时，调用 Five 相关 API 会透传 userAction
  modelOpacity?: number // 展示户型图时，模型对应的透明度，默认是 0.01
  immediately?: boolean // 图片出现是否要立即出现，默认会有 500ms 的动画，注意这个 immediately 不能取消模型动画
}
```

- `hide(options?: { isAutoHide?: boolean; userAction?: boolean )`

> 您可以直接调用 `hide()` 方法将户型图隐藏，如果在配置项`autoShowEnable`设置为`true`（默认设置）时，当用户在户型图上进行滑动操作时，超过一定滑动幅度会自动关闭户型图。

- `changeFloor(floorIndex: number)` 更改户型楼层

> 有些房源是多楼层的（复式、别墅等），每一层的户型均不同，您可以通过`changeFloor()`直接切换对应楼层的户型。<br/>
> 需要注意的是，对于多楼层房源仅会高亮当前楼层的三维模型的模块。<br/>
> 当然，当用户在 VR 全景中走点时，对应的楼层发生变化户型图展示期间也会自动展示当前点位的楼层。

### 自定义配置

**ModelFloorplanPlugin** 支持丰富的自定义配置选项（详见[ModelFloorplanParameterType]），常见的配置项有：

- `selector?: string | Element` 插件挂载的 DOM 节点

> DOM 选择器或 DOM 节点实例。
> 需要注意的是：DOM容器必须与 five canvas 宽高一样，且层级`z-index`比 five canvas 高。

- `scale?: number` 户型图缩放比例

> 修改此参数会连同户型图下方的VR模型比例一同更改，默认为`1`。

- `hoverEnable?: boolean` 是否开启鼠标 `hover` 高亮分间

> 默认值是 `false`。功能是：当鼠标 `hover` 至对应分间时，改分间会高亮。

- `getLabelElement?: (room: FloorplanRoomItem) => Element | null` 配置房屋标签

> 如果配置了这个函数，对于每一个房屋标签，都会调用此函数，并把标签的 `Element` 替换成回调函数返回的 `ELement`。
> 如果返回结果为 `null` 这类空值时，当前标签不展示。<br />
> 如果不配置此函数，默认为所有标签都展示。
> 参数`FloorplanRoomItem` 数据结构参考[开放平台插件类型声明](http://dnalogel.developers.realsee.com/storybook/api/interfaces/plugins.FloorplanRoomItem.html)。

- `cameraImage?: { style: React.CSSProperties }` 配置相机图标

> `style`传入的 CSS 样式会覆盖默认样式，包括 `backgroundImage`、`width`、`height`等。<br/>

- `autoShowEnable: boolean` 手势快捷操作

> 在二维户型图界面进行滑动，会快速切换到模型状态；在模型状态松手时，如果比较接近户型图的展示角度，会自动旋转模型，并展示户型图。默认开启。

### 事件 Hooks
户型图相关的事件绑定在 `hooks` 对象上，可以使用 `hooks.on` 方法监听事件。如：


- `showAnimationEnded`

户型图展示结束，只会在从不可见到可见触发，调用多次show只会触发一次 showAnimationEnded。

```ts
five.plugins.modelFloorplan.hooks.on('showAnimationEnded', ({ auto, userAction }) => {
  console.log('是否是用户滑动模型导致的户型图自动展示: ', auto)
  console.log('是否是用户行为导致的户型图展示: ', userAction)
  console.log('户型图展示完成')
})
```

- `hide`

户型图消失完成

```ts
five.plugins.modelFloorplan.hooks.on('hide', ({ auto, userAction }) => {
  console.log('是否是用户滑动模型导致的户型图自动消失: ', auto)
  console.log('是否是用户行为导致的户型图消失: ', userAction)
  console.log('户型图已经消失')
})
```

## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
