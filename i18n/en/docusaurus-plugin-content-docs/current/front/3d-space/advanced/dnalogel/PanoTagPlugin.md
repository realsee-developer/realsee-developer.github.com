---
title: Add Panorama Hotspot
---

## **PanoTagPlugin**

## Function Description

**Panorama Hot Tag Plugin** provides information about different hotspot labels in panorama mode.

Details below：

- Hotspot labels are divided into “Audio Label”, “Text Label”, “ImageText”, “VR Jump Label (Link)”, “Marketing”, “MediaPlane” and “Custom Label”.
- Labels can be divided into："2D(Two)" and "3D(Three)" by dimension type (DimensionType).
- By point type (PointType), the tag can be divided into：point mark (PointTag) and PlaneTag.
- Users are free to combine the above-mentioned tag classification attributes and create more suitable panorama hotspot labels depending on their type of business.

## Example effect

<div className="docs-vr-normal">
  <iframe className="docs-vr-iframe" src="https://realsee.js.org/dnalogel/src/PanoTagPlugin/index.html"></iframe>
</div>

## Install reference

**Please choose `yarn` or `npm` installation method：as needed**

```bash npm2yarn
npm install @realsee/dnalogel
```

**By es reference：**

```tsx
import { PanoTagPlugin } from "@realsee/dnalogel";
```

## Development Guides

### Initialize

When initializing `Five` instances, configure `PanoTagPlugin` in initialize plugin parameters.

```ts
import { Five } from "@realsee/five";
import { PanoTagPlugin } from "@realsee/dnalogel";

const five = new Five({
  plugins: [
    [
      PanoTagPlugin,
      "panoTagPlugin", // custom plugin name
      {
        // parameter configuration
      },
    ],
  ],
});
```

### React initialization

When creating `FiveProvider` , configure `PanoTagPlugin` in initialize plugin parameters.

```ts
import { PanoTagPlugin } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";

const FiveProvider = createFiveProvider({
  plugins: [
    [
      PanoTagPlugin,
      "panoTagPlugin", // custom plugin name
      {
        // parameter configuration
      },
    ],
  ],
});
```

### Vue initialization

When using `FiveProvider` , configure `PanoTagPlugin` in initialize plugin parameters.

```vue
<template>
  <FiveProvider :fiveInitArgs="fiveInitArgs"> </FiveProvider>
</template>
<script setup>
import PanoTagPlugin from "@realsee/dnalogel/libs/PanoTagPlugin";
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
const fiveInitArgs = {
  plugins: [
    [
      PanoTagPlugin,
      "panoTagPlugin", // Custom plugin name
      {
        // Parameter configuration
      },
    ],
  ],
};
</script>
```

### Load data

```ts
// Get an instance of a plugin, where `panoTagPlugin` is a custom name at the initialization time
const pluginInstance = five.plugins.panoTagPlugin;

// call `load` method to load panoramic tag data
pluginInstance.load(tagsData, config);
```

### Core approach

- `load:(data: Tags, config?: AddTagConfig) => void` loading plugin data

- `addTag:(tag: Tag | Tag[], config?: AddTagConfig) => void`

- `clearTags: () => void` clear all tags

- `async show: (params?: { userAction?: boolean; withAnimation?: boolean }) => void` display label

- `async hide: (params?: { userAction?: boolean; withAnimation?: boolean }) => void` hidden tags.

- `enable: (params?: { userAction?: boolean }) => void` Allowed plugins

- `disable: (params?: { userAction?: boolean }) => void` disabled

- `dispose: () => void` destroyed plugin

- `setState: (state: Partial<State>, params: { userAction?: boolean; visibleWithAnimation?: boolean }) => void` Update plugin status

- `changeTagNormalById: (id: TagId, normal: ArrayPosition) => void` change tag location

- `changeDataById: (id: TagId, data: PartialDeep<Tag<C>['data']>, deepMerge = true) => void` change data

- `changeTagById: (id: TagId,tag: PartialDeep<{ [P in keyof Pick<Tag<C>, 'enabled' | 'style' | 'dimensionType' | 'contentType' | 'data' | 'normal'>]: Tag[P] }>,deepMerge = true,) => void` Change any attribute of tag

- `destroyTagById: (id: TagId | TagId[]) => void` destroyed tag

- `pauseCurrentMedia: () => void` pauses all media in the current tab

## Add Custom Hotspot

There is a tag type called "Custom Hot Label", in which developers can add customized tag styles according to their business needs.

You can refer to the examples below：

```ts
// Add custom hotspot
const addCustomerTag = () => {
  // Custom Element
  const ele = document.createElement("div");
  ele.innerText = "This is a custom hotspot label";
  ele.style.color = "red";
  ele.style.width = "200px";
  ele.style.border = "1px solid #000";

  const tagData: Tag = {
    id: "03338b76-b64a-4e90-37fb-44e3c0ffeb88",
    pointType: "PointTag",
    dimensionType: "2D",
    position: [-1.7882169929208833, 1.022040232156752, -2.339700937271118],
    data: {
      text: "Custom Hotspot Label",
    },
    element: ele,
    // ContentType is set to Custom
    contentType: "Custom",
  };
  pluginInstance.addTag(tagData);
};
```

## Data Structure

One of the most important structures in the plugin is `Tag`that need to be used to add hotspots, modify tag information, etc. Data structure is below：

```typescript
export type Tag<
  C extends ContentType = any,
  P extends PointType = any,
  D extends DimensionType = any,
  CustomDataType extends Object = {}
> = {
  /** enable/disable*/
  enabled?: boolean;
  /** Unique ID*/
  id: TagId;
  /** One point tag/4 point tags*/
  pointType: P;
  /** 2-dimensional/3-dimensional type*/
  dimensionType: D;
  /** Content type, display the corresponding UI according to the content type */
  contentType: C;
  /** Point*/
  position: P extends PointType.PointTag
    ? Position
    : P extends PointType.PlaneTag
    ? [Position, Position, Position, Position]
    : any;
  /** Custom label content */
  element?: string | Element | ElementRenderer;
  /** Label data */
  data: C extends ContentType.Custom ? CustomDataType : ContentTypeMap[C];
  /** "Expand/ Collapse" "Visible/Invisible" policy configuration*/
  config?: TagConfig<C, P, D, CustomDataType>;
  /** Normal vector*/
  normal?: Position;
  /** Style*/
  style?: {
    /** Small Dot style*/
    point?:
      | { style: "Default" }
      | { style: "CustomIcon"; iconUrl: string }
      | { style: "noPoint" };
    /** Animation delay when folded, unit：ms */
    foldedPointDelay?: number;
  };
} & (D extends DimensionType.Three
  ? P extends PointType.PointTag
    ? { normal: Position }
    : unknown
  : unknown); /** Three-dimensional tags need To normal vector */
```

Tag Type Definition

```typescript
export enum ContentType {
  /**Audio Tags*/
  Audio = "Audio",
  /** Text Tags*/
  Text = "Text",
  /** Graphic label */
  ImageText = "ImageText",
  /** VR jump tag */
  Link = "Link",
  /** Marketing labels*/
  Marketing = "Marketing",
  /** Image Video Poster */
  MediaPlane = "MediaPlane",
  /** Other/Custom Tag */
  Custom = "Custom",
}
```

Definition of Tag Dimensions

```typescript
export enum DimensionType {
  Two = "2D",
  Three = "3D",
}
```

Tab point type definition

```typescript
export enum PointType {
  PointTag = "PointTag",
  PlaneTag = "PlaneTag",
}
```

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
