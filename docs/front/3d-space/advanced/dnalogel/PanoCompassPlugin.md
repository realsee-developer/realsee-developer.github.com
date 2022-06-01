---
title: 添加全景指南针
---

## **PanoCompassPlugin**

## 功能说明

PanoCompassPlugin 提供在全景模态下渲染出方向指向盘的能力。

## 效果展示

拖动 VR ，使视角朝向地面可看到效果。

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/PanoCompassPlugin/index.html"></iframe>
</div>

## 安装引用

```tsx
import { PanoCompassPlugin } from "@realsee/dnalogel"
```

## 开发指南

### 初始化
在初始化 `Five` 实例时，将 `PanoCompassPlugin` 配置在初始化插件参数即可。

```ts
import { Five } from '@realsee/five'
import { PanoCompassPlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            PanoCompassPlugin,
            'panoCompassPlugin', // 自定义插件名称
            { 
                // compassImageUrl: '' // 配置方向指向盘图片
            }
        ]
    ]
})
```

### React 初始化
在创建 `FiveProvider` 时，将 `PanoCompassPlugin` 配置在初始化插件参数即可。

```ts
import { PanoCompassPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            PanoCompassPlugin,
            'panoCompassPlugin', // 自定义插件名称
            { 
                // compassImageUrl: '' // 配置方向指向盘图片
            }
        ]
    ]
});
```

### Vue 初始化
在 `FiveProvider` 时，将 `PanoCompassPlugin` 配置在初始化插件参数即可。
```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import  PanoCompassPlugin from "@realsee/dnalogel/libs/PanoCompassPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            PanoCompassPlugin,
            'panoCompassPlugin', // 自定义插件名称
            {
                // compassImageUrl: '' // 配置方向指向盘图片
            }
        ]
    ]
}
</script>
```

### 载入数据

您需要**载入标识北向的数据**方可看到正确效果：

```tsx
// 朝北方向来源于户型图数据
const NORTH_RAD = floorplanServerData?.computed_data?.entrance?.north_rad
// 载入朝北数据
five.plugins.panoCompassPlugin.load({ north_rad: NORTH_RAD })
```

### 参数说明

`compassImageUrl` 参数用以配置方向指南底盘图片，插件默认方向指向盘如示例效果所示，如需更换，请务必保证图片方向示意为：**上北、下南、左西、右东**。

<figure>
  <div style={{display: 'flex',     background: 'white',
    justifyContent: 'center',
    alignItems: 'center',}}>
    <div style={{flex:1}}><img style={{width:'100%'}} src="//vrlab-public.ljcdn.com/common/file/web/9a1efcbb-0fe1-4cbe-904c-f3be5eefdd4a.jpg
" /></div>
  </div>
  <figcaption>图一：方向指向盘标准方向参考图</figcaption>
</figure>


## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
