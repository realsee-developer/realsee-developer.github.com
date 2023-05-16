---
title: Introduction to VR View Room Plugin
---

[![npm version](https://img.shields.io/npm/v/@realsee/dnalogel.svg?style=flat-square&logo=npm&label=npm%20install%20@realsee/dnalogel)](https://www.npmjs.com/package/@realsee/dnalogel)


@realsee/dnalogel will [Realsee(realsee.com)](https://realsee.com) **VR see room** regular capacity sedimentation as `Five Plugins` for abstraction. Combine[to make rich three-dimensional applications like VR to view SDK Five](https://open-platform.realsee.com/developer/docs/front/3d-space/get-started/rendering-engine/) and [like the Open API](https://open-platform.realsee.com/developer/open/api/#/).Regardless of how the online environment works in the musical and exciteous attempts, we have left unreserved open sources to github [realsee-developer/dnalogel](https://github.com/realsee-developer/dnalogel).


## Use Instructions

### 1 - Installation

```bash npm2yarn
npm install @realsee/dnalogel
```

Version 2.x Depends `svelte`, install it at the same time:
```bash npm2yarn
npm install svelte 
```


### 2 - Plugin registration

```js
import { Five } from '@realsee/five'
import { Plugin } from '@realsee/dnalogel'
const five = new Five({
  plugins: [[Plugin, 'PluginName', initOptions]],
})
```

### Add-ons Method Use

```js
// The methods provided by different plugins may differ, please refer to the plugin API documentation
five.plugins.PluginName.load(data)
five.plugins.PluginName.enable()
five.plugins.PluginName.disable()
five.plugins.PluginName.dispose()
```

### Add-ons Dependencies

You can view data acquisition and related open API via [open API](https://open-platform.realsee.com/developer/open/api#/)


<!--

## 使用示例

:::tip
此小节将以 `ModelRoomLabelPlugin` 为例，阐述如何使用含**如视数据依赖**的插件。开始前请确保您已经能成功渲染出一个 VR。
:::  

-->

## Related links

- [API documentation](https://unpkg.com/@realsee/dnalogel/docs/index.html)
- [Demo source](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
- [Data Dependencies：open API](https://open-platform.realsee.com/developer/open/api/)
- [CHANGELOG](https://github.com/realsee-developer/dnalogel/blob/main/plugins/CHANGELOG.md)

## Effect Preview

We wrote a simple example of effect for each plugin. You can click on preview： [@realsee/dnalogel showcase](https://realsee-developer.github.io/dnalogel/)


