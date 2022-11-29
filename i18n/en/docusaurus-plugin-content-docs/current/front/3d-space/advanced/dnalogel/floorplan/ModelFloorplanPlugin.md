---
title: '📦 model household graph'
---

## **ModelFloorplanPlugin**

:::tip This plugin is dependent on**household diagram data**, please learn how to get household chart data first.
:::

## Function Description

**Model Household Graph Plugin** is seamlessly integrated into a household chart interaction based on VR 3D model status.

With this plugin, you can display more detailed two-dimensional household graphs in VR 3D mode status with the following functions:：

- Support 2D household graphics (png / svg format) for display.
- House Tag Show: **supports custom tag style**
- Camera location and orientation before showing to 2D household chart: **supports custom camera icon**
- Multilayer VR properties are supported for multiple floors switching.
- On overview, the two-dimensional household image is aligned with adaptability of the VR 3D model.
- By clicking on the two-dimensional chart room, you will automatically enter the appropriate position of the VR corresponding room.
- Pointer shows: Configuration is not supported but can be overridden by CSS selector priority method.
- Supported gesture quick：sliding in 2D household graph, quickly switches to model state, and when model state looses, auto-rotate models and showcase household maps when close to the display angle of the household chart.This feature**supports configuration**or not.

## Example effect

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/ModelFloorplanPlugin/index.html"></iframe>
</div>

## Install reference

**Please choose `yarn` or `npm` installation method：as needed**

```bash npm2yarn
npm install @realsee/dnalogel
```

**By es reference：**

```tsx
import ModelFloorplanPlugin from "@realsee/dnalogel"
```

## Development Guides

### Initialize

When initializing the `Five` instance, configure `ModelFloorplanPlugin` in the initialization plugin parameters.

```ts
import Five, { FivePluginInits } from '@realsee/five'
import ModelFloorplanPlugin from '@realsee/dnalogel'

// initialize five instances
const five = new Five({
  plugins: [
    [ModelFloorplanPlugin, "modelFloorplanPlugin", {
      // Initialize parameter
    }]
  ]
})
```

### React initialization

When creating the FiveProvider component, `ModelFloorplanPlugin` is configured to initialize plugin parameters.

```ts
import { createFiveProvider } from '@realsee/five/react'

// Create FiveProvider component
const FiveProvider = createFiveProvider({
    plugins: [
        [ModelFloorplanPlugin, "modelFloorplanPlugin", {
            // Initialize parameter
        }]
    ]
})
```

### Vue initialization

When using `FiveProvider` , configure `ModelFloorplanPlugin` in the initialization plug-in parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import ModelFloorplanPlugin from "@realsee/dnalogel/libs/ModelFloorplanPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            ModelFloorplanPlugin,
            'modelFloorplanPlugin', // Custom plugin name
            {
                // Parameter configuration
            }
        ]
    ]
}
</script>
```

### Load data

```ts
// Get plugin instance
const pluginInstance = five.plugins.modelFloorplan
// loading data
pluginInstance.load(floorplanServerData)
```

### Plugin Core Method

**There are：core methods provided by ModelFloorplanPlugin**

- `async load(data: FloorplanServerData)` Load household graph;

> You need to load household chart data manually,[FloorplanServerData] data sources read[like the Open Platform API](https://open-platform.realsee.com/developer/open/api#/)

- `appendTo(wrapper: Element)` Mount DOM nodes;

> You can load the household chart DOM module into your HTML structure.

- `async show(opts?: ShowOpts): true` to show;
> Call the `show()` method of the plug-in, and the plug-in will automatically operate `five` instances to the model overlooking state, and display the floor plan corresponding to the current point.

``` ts
const floorplanPlugin = five.plugins.floorplan
floorplanPlugin.show()
floorplanPlugin.show(options)
```
> If you need to customize the display logic, you can also pass in `options` for configuration. The configuration items are declared as follows：

``` ts
interface ShowOpts {
  floorIndex?: number // floor to show, default is the floor
  userAction?: boolean // When calling the Five API will pass userAction
  modelOpacity?: number // show the household graph, the transparency of the model is zero. 1
  immediately?: boolean //image will appear instantly, by default there will be 500m animations, noting that this immally cannot cancel model animations
}
```

- `async hide(options?: { isAutoHide?: boolean; userAction?: boolean )` Hide household graphs

> You can directly call the `hide()` method to hide the floor plan. If the configuration item`autoShowEnable`is set to`true`(default setting), when the user slides on the floor plan, the sliding range will automatically Close floor plan.

- `updateSize()` Update household size;

- `changeConfigs(config: Partial<Config>, userAction = true)` modify the configuration of the household chart;

- `setState(state: PartialDeep<State>, options: BaseOptions = {})` Change plugin State;

- `enable(options: BaseOptions = {})` Enable plugins;

- `disable(options: BaseOptions = {})` Disable plugins;

- `dispose()` destroys the plugin;

### Custom configuration

**ModelFloorplanPlugin** supports rich custom configuration options (see[ModelFloorplanParameterType]), common configuration items are：

- `selector?: string | Element` DOM node mounted by Element`

> DOM selector or DOM node instances. Attention needs to be paid to the DOM container：must be the same as five canvas wide and the level`z-index`is higher than five canvas.

- `scale?: number` zoom scale

> Modifying this parameter will be changed in conjunction with the VR model ratio below the household chart, default to`1`.

- `hoverEnable?: boolean` Turn on mouse `hover` Highlight partitions

> The default value is `true`.The feature is：when the mouse is `hover` to the corresponding partition, the rectangular is highlighted.

- `getLabelElement?: (room: FloorplanRoomItem) => Element | null` config house label

> If this function is configured, for each house label, this function will be called and the tag `Element` will be replaced by the callback function return `ELement`. The current tab does not show if the result is `null` empty values.<br /> If this function is not configured, default is displayed for all tabs. Parameter`FloorplanRoomItem` Data structure reference[Open Platform Plugin Type Statement](http://dnalogel.developers.realsee.com/storybook/api/interfaces/plugins.FloorplanRoomItem.html).

- `CameraImageUrl?: string` Custom icons

> `style`Incoming CSS styles overwrite default styles, including `backgroundimage`,`width`,`height`and more.<br/>

- `autoShowEnable: boolean` Gesture Quick Operation

> Swipe on the 2D household GUI to quickly switch to the model state; when the model is relaxed, it will rotate the model automatically and show the household map if it is closer to the display angle.Enable by default.

### Event Hooks

Events associated with the chart are bound to `hooks` objects and can be listened to using `hooks.on`.e.g.：

- `showAnimationEnded`

The household chart ends and can only be activated when it is never visible. Calling multiple showers will only trigger showAnimationEnd.

```ts
five.plugins.modelFloorplan.hooks.on('showAnimationEnded', ({ auto, userAction }) => {
  console.log("whether the household graph is automatically displayed by the user's sliding model: ", auto)
  console.log('is the household chart show:', userAction)
  console.log('household graph completed ')
})
```

- `hide`

Account chart disappears complete

```ts
five.plugins.modelFloorplan.hooks.on('hide', ({ auto, userAction }) => {
  console.log('a household graph automatically disappeared:', auto)
  console.log('a household graph disappeared:', userAction)
  console.log('household graph disappeared')
})
```

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
