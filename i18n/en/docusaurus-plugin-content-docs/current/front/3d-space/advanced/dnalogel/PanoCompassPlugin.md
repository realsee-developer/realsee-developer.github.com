---
title: Add Panorama
---

## **PanoCompassPlugins**

## Function Description

PanoCompassPlugin provides the ability to render directions in a panorama mode.

## Effect Display

Drag VR to make the view visible on the ground.

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee-developer.github.io/dnalogel/src/PanoCompassPlugin/index.html"></iframe>
</div>

## Install reference

```tsx
import { PanoCompassPlugin } from "@realsee/dnalogel"
```

## Development Guides

### Initialize

When initializing `Five` instances, configure `PanoCompassPlugin` in initialize plugin parameters.

```ts
import { Five } from '@realsee/five'
import { PanoCompassPlugin } from "@realsee/dnalogel";

const five = new Five({
    plugins: [
        [
            PanoCompassPlugin,
            'panoCompassPlugin', // custom plugin name
            { 
                // compassImageUrl: '' // configure the steering wheel image
            }
        ]
    ]
})
```

### React initialization

When creating `FiveProvider` , configure `PanoCompassPlugins` in initialize plugin parameters.

```ts
import { PanoCompassPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
    plugins: [
        [
            PanoCompassPlugin,
            'panoCompassPlugin', // custom plugin name
            { 
                // compassImageUrl: '' // configure the steering wheel image
            }
        ]
    ]
});
```

### Vue initialization

When `FiveProvider` , configure `PanoCompassPlugin` in initialize plugin parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs">
  </FiveProvider>
</template>
<script setup>
import PanoCompassPlugin from "@realsee/dnalogel/libs/PanoCompassPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
    plugins: [
        [
            PanoCompassPlugin ,
            'panoCompassPlugin', // Custom plugin name
            {
                // compassImageUrl: '' // Configure steering wheel image
            }
        ]
    ]
}
</script>
```

### Load data

You need**to load the data that identifies the north direction**to see the correct effect：

```tsx
// Go North from household chart data
const NORTH_RAD = floorplanServerData?.computed_data?.entrance?.north_rad
// Load North data
five.plugins.panoCompassPlugin.load({ north_rad: NORTH_RAD })
```

### Parameter Description

`compassImageUrl` Parameters are used to configure the direction guide base image. The plugin's default direction points to the disk as shown by the example effect. If you want to replace, make sure the picture orientation is：**upward, bottom, left west, right east**.

<figure>
  <div style={{display: 'flex',     background: 'white',
    justifyContent: 'center',
    alignItems: 'center',}}>
    <div style={{flex:1}}><img style={{width:'100%'}} src="//vrlab-public.ljcdn.com/common/file/web/9a1efcbb-0fe1-4cbe-904c-f3be5eefdd4a.jpg
" /></div>
  </div>
  <figcaption>Figure I：indicates the reference to the standard direction of the disk</figcaption>
</figure>

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
