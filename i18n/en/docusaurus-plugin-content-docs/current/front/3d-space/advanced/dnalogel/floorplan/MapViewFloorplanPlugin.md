---
title: '📦 large spatial model household chart'
---

## **MapviewFloorplanPlugin**

:::tip This plugin is dependent on**household diagram data**, please learn how to get household chart data first.
:::

## Function Description

**Large Space Model Household Graph Plugin** is the**upgrade version of the model household diagram plugin,**,**adds zoom and drag gesture**.

With this plug-in, you can display a more detailed two-dimensional floor plan in the VR 3D model state, except for the following functions that are the same as the**model floor plan plug**in：

- Support 2D household graphics (png / svg format) for display.
- House Tag Show: **supports custom tag style**
- Camera location and orientation before showing to 2D household chart: **supports custom camera icon**
- Multilayer VR properties are supported for multiple floors switching.
- On overview, the two-dimensional household image is aligned with adaptability of the VR 3D model.
- By clicking on the two-dimensional chart room, you will automatically enter the appropriate position of the VR corresponding room.
- Pointer shows: Configuration is not supported but can be overridden by CSS selector priority method.
- Supported gesture quick：sliding in 2D household graph, quickly switches to model state, and when model state looses, auto-rotate models and showcase household maps when close to the display angle of the household chart.This feature**supports configuration**or not.

**The floor plan of the large space model also adds the following functions：**

- Equivalent to amplify and reduce two-dimensional household maps with VR 3D models to ensure alignment between both.
- Drag to view zoomed and zoom shows. Perfect for viewing the content of a certain area of the household chart.

## Example effect

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee-developer.github.io/dnalogel/src/MapviewFloorplanPlugin/index.html"></iframe>
</div>

## Install reference

**Please choose `yarn` or `npm` installation method：as needed**

```bash npm2yarn
npm install @realsee/dnalogel
```

**By es reference：**

```tsx
import MapviewFloorplanPlugin from "@realsee/dnalogel"
```

## Development Guides

::tip  
Use this plugin fully with model household schema plugins**full of**, including initialization, data loading, core method calls, custom configurations, and event hooks usage with the same effect as shows, mainly differentiated from**Large space model household image plugins add zoom and drag functions**If you already have access to model profile plugins, you have mastered how large spatial model household map plugins are used and need to be adapted to appropriate usage scenes.
:::

### Initialize

When initializing the `Five` instance, configure `MapviewFloorplanPlugin` in the initialization plugin parameters.

```ts
import Five, { FivePluginInits } from '@realsee/five'
import MapviewFloorplanPlugin from '@realsee/dnalogel'

// initialize five instances
const five = new Five({
  plugins: [
    [MapviewFloorplanPlugin, "mapviewFloorplanPlugin", {
      // Initialize parameter
    }]
  ]
})
```

### React initialization

Configure `MapviewFloorplanPlugin` when creating FiveProvider components.

```ts
import { createFiveProvider } from '@realsee/five/react'

// Create FiveProvider component
const FiveProvider = createFiveProvider({
    plugins: [
        [MapviewFloorplanPlugin, "mapviewFloorplanPlugin", {
            // Initialize parameter
        }]
    ]
})
```

### Vue initialization

When using `FiveProvider` , configure `MapviewFloorplanPlugin` in the initialization plug-in parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import  MapviewFloorplanPlugin from "@realsee/dnalogel/libs/MapviewFloorplanPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            MapviewFloorplanPlugin,
            'mapviewFloorplanPlugin', // Custom plugin name
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
const pluginInstance = five.plugins.mapviewFloorplan
// loading data
pluginInstance.load(floorplanServerData)
```

### Plugin Core Method

**There are：core methods provided by MapviewFloorplanPlugin**

- `load(data: FloorplanServerData)` Load household chart data

> You need to load household chart data manually,[FloorplanServerData] data sources read[the Realsee Open Platform API](https://open-platform.realsee.com/developer/open/api#/)

- `appendTo(wrapper: Element)` Mount DOM nodes

> You can load the household chart DOM module into your HTML structure.

- `async show(opts?: ShowOpOpts): true`
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
  userAction? boolel// When calling the Five API will pass userAction
  modelOpacity?: number // show the household graph, the transparency of the model is zero. 1
  immediate?: boolean //image will appear instantly, by default there will be 500m animations, noting that this immally cannot cancel model animations
}
```

- `hide(options?: { isAutoHide?: boolean; userAction?: boolean )`

> You can directly call the `hide()` method to hide the floor plan. If the configuration item`autoShowEnable`is set to`true`(default setting), when the user slides on the floor plan, the sliding range will automatically Close floor plan.

- `changeFloor(floorIndex: number)` floor type

> Some of the properties are multi-storey (compound, villa etc.), each layer has different types of household, and you can switch over the corresponding floors directly by`changeFloor()`.<br/> Note that a three-dimensional model of the current layer is only highlighted for multi-storey buildings.<br/> Of course, when the user walks in the VR panorames, the floors of the current point will be shown automatically during the floormap show.

### Custom configuration

**MapviewFloorplanPlugin** supports rich custom configuration options (see[MapviewFloorplanParameterType]), common configuration items have：

- `selector?: string | DOM node mounted by Element`

> DOM selector or DOM node instances. Attention needs to be paid to the DOM container：must be the same as five canvas wide and the level`z-index`is higher than five canvas.

- `scale?: number` zoom scale

> Modifying this parameter will be changed in conjunction with the VR model ratio below the household chart, default to`1`.

- `hoverEnable?: boole` Turn on mouse `hop` Highlight partitions

> The default value is `false`.The feature is：when the mouse is `hover` to the corresponding partition, the rectangular is highlighted.

- `getLabelElement?: (room: FloorplanRoomItem) => Element | null` config house label

> If this function is configured, for each house label, this function will be called and the tag `Element` will be replaced by the callback function return `ELement`. The current tab does not show if the result is `null` empty values.<br /> If this function is not configured, default is displayed for all tabs. Parameter`FloorplanRoomItem` Data structure reference[Open Platform Plugin Type Statement](http://dnalogel.developers.realsee.com/storybook/api/interfaces/plugins.FloorplanRoomItem.html).

- `cameraImage?: { style: React.CSSProperties }` Configure camera icon

> `style`Incoming CSS styles overwrite default styles, including `backgroundimage`,`width`,`height`and more.<br/>

- `autoShowEnable: boolean` Gesture Quick Operation

> Swipe on the 2D household GUI to quickly switch to the model state; when the model is relaxed, it will rotate the model automatically and show the household map if it is closer to the display angle.Enable by default.

### Event Hooks

Events associated with the chart are bound to `hooks` objects and can be listened to using `hooks.on`.e.g.：

- `showAnimationEnded`

The household chart ends and can only be activated when it is never visible. Calling multiple showers will only trigger showAnimationEnd.

```ts
five.plugins.mapviewFloorplan.hooks.on('showAnimationEnded', ({ auto, userAction }) => {
  console.log("whether the household graph is automatically displayed by the user's sliding model: ", auto)
  console.log('is the household chart show:', userAction)
  console.log('household diagram complete')
})
```

- `hide`

Account chart disappears complete

```ts
five.plugins.mapviewFloorplan.hooks.on('hide', ({ auto, userAction }) => {
  console.log("whether the household graph automatically disappears from the user's sliding model:", auto)
  console.log(' is the household graph disappeared: ', userAction)
  console.log('household graph disappeared')
})
```

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
