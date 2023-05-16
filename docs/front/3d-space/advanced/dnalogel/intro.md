---
title: VR 看房插件介绍
---

[![npm version](https://img.shields.io/npm/v/@realsee/dnalogel.svg?style=flat-square&logo=npm&label=npm%20install%20@realsee/dnalogel)](https://www.npmjs.com/package/@realsee/dnalogel)


@realsee/dnalogel 将 [如视(realsee.com)](https://realsee.com) **VR 看房** 常用能力沉淀，并以 `Five Plugins` 形式进行抽象。
结合[如视 VR 看房 SDK Five](https://open-platform.realsee.com/developer/docs/front/3d-space/get-started/rendering-engine/)
与 [如视开放 API](https://open-platform.realsee.com/developer/open/api/#/) ,可以制作出丰富多彩的三维空间应用。不论是经过线上环境千锤百炼的刚需功能，还是灵感一现的炫酷尝试，所有已经落地的功能我们均毫无保留的开源至github [realsee-developer/dnalogel](https://github.com/realsee-developer/dnalogel) 。


## 使用说明

### 1、安装

```bash npm2yarn
npm install @realsee/dnalogel
```

2.x 版本依赖 `svelte`， 使用时请同时安装:
```bash npm2yarn
npm install svelte 
```


### 2、插件注册

```js
import { Five } from '@realsee/five'
import { Plugin } from '@realsee/dnalogel'
const five = new Five({
  plugins: [[Plugin, 'PluginName', initOptions]],
})
```

### 3、插件方法使用

```js
// 不同插件提供的方法可能存在差异,请参考各插件 API 文档
five.plugins.PluginName.load(data)
five.plugins.PluginName.enable()
five.plugins.PluginName.disable()
five.plugins.PluginName.dispose()
```

### 4、插件依赖数据获取

您可以通过 [open API](https://open-platform.realsee.com/developer/open/api#/) 查看数据获取方式及相关 open API 。

<!--

## 使用示例

:::tip
此小节将以 `ModelRoomLabelPlugin` 为例，阐述如何使用含**如视数据依赖**的插件。开始前请确保您已经能成功渲染出一个 VR。
:::

-->

## 相关链接

- [API 文档](https://unpkg.com/@realsee/dnalogel/docs/index.html)
- [demo 源码](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
- [数据依赖来源：open API](https://open-platform.realsee.com/developer/open/api/)
- [CHANGELOG](https://github.com/realsee-developer/dnalogel/blob/main/plugins/CHANGELOG.md)

## 效果预览

我们为每个插件书写了简单的效果示例，您可点击预览：
[@realsee/dnalogel showcase](https://realsee-developer.github.io/dnalogel/)


