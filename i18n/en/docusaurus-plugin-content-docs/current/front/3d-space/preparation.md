---
title: Development preparation
---


**To see 3D Rendering** is based on modern browser [WebGL](https://www.khronos.org/webgl/) capability.You can simply prepare a modern browser. Other environments do not differ from traditional front-end development.For example, you can quickly build front-end development scaffolds with tools such as [Vite](https://vitejs.dev/) or [Create React App](https://create-react-app.dev/).

## Browser compatibility


 | Safari | Safari on iOS | Chrome | Chrome for Android | Edge  | Firefox |
 |:------:|:-------------:| ------:|:------------------:|:-----:|:-------:|
 |  >= 9  |     >= 9      |  >= 49 |       >= 93        | >= 13 |  >= 45  |

## Public Dataset

**such as the rendering of visual three-dimensional space is strongly dependent on [Work](./get-started/02.terminology.md) data**. **Work** is done by scanning and algorithming data for 3D space after algorithms like hardware devices ([such as scanner views](https://home.realsee.com/product/galois) ,[such as view Lite panorama](https://home.realsee.com/product/pancam) ,[like VR App](https://home.realsee.com/product/mobilecapture)).

:::tip
for **Work** more detailed description of data please move forward **[what is Work](./get-started/02.terminology.md)**.
:::

In order to facilitate community development, debugging and research, we have released some **Work** datasets, you can import Realsee public datasets in the form of npm | yarn：

[![npm version](https://img.shields.io/npm/v/@realsee/open-works.svg?style=flat-square&logo=npm&label=npm%20install%20@realsee/open-works)](https://www.npmjs.com/package/@realsee/open-works)

```bash npm2yarn
npm install @realsee/open-works
```

You can also jump directly to [realsee-developer/open-works](https://github.com/realsee-developer/open-works) to view and get data.

Ready to get **Work** data describing three-dimensional spatial information, you can use our [**rendering engine Five**](./get-started/00.rendering-engine.md) to start developing your own three-dimensional space VR application.

:::tip
Of course, you can also generate your own **Work** by [such as Visi-Open Platform](http://developers.realsee.com/) and [like VR App](https://home.realsee.com/product/mobilecapture) , see blog [if you see three dimensions of space capability as fast as "creating"](/blog/quick-start-with-api).

For business-level real space collection, virtual space design, processing services contact [such as VID-Business cooperation](https://home.realsee.com/solution/spacedata).
:::

