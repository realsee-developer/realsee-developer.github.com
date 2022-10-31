---
title: 开发准备
---


**如视三维空间渲染** 是基于现代浏览器 [WebGL](https://www.khronos.org/webgl/) 能力实现的。您只要准备一款现代浏览器即可，其他的环境准备与传统前端开发并无差异。比如，您可以通过 [Vite](https://vitejs.dev/) 或 [Create React App](https://create-react-app.dev/) 等工具快速搭建前端开发脚手架。

## 浏览器兼容性


 | Safari | Safari on iOS | Chrome | Chrome for Android | Edge  | Firefox |
 | :----: | :-----------: | -----: | :----------------: | :---: | :-----: |
 |  >= 9  |     >= 9      |  >= 49 |       >= 93        | >= 13 |  >= 45  |

## 公开数据集

**如视三维空间的渲染强依赖于 [Work 数据](./get-started/02.terminology.md)** 。
**Work** 是通过如视硬件设备（[如视扫描仪](https://realsee.com/website/product/hardware) 、[如视 Lite 全景相机](https://realsee.com/website/product/lite) 、[如视 VR App](https://home.realsee.com/product/mobilecapture) ）扫描并经过算法加工之后生成的用于描述三维空间的数据。

:::tip
关于 **Work** 数据更详细的介绍请移步 **[什么是 Work](./get-started/02.terminology.md)** 。
:::

为便于社区开发、调试和研究，我们公开了部分 **Work** 数据集，
您可通过 npm | yarn 形式引入如视公开数据集：

[![npm version](https://img.shields.io/npm/v/@realsee/open-works.svg?style=flat-square&logo=npm&label=npm%20install%20@realsee/open-works)](https://www.npmjs.com/package/@realsee/open-works)

```bash npm2yarn
npm install @realsee/open-works
```

也可以直接跳转至 [realsee-developer/open-works](https://github.com/realsee-developer/open-works) 查看、获取数据。

准备好前端开发环境，拿到描述三维空间信息的 **Work** 数据之后，您就可以使用我们的 [**渲染引擎 Five**](./get-started/00.rendering-engine.md) 来着手开发您自己的三维空间 VR 应用。

:::tip
当然，您也可以通过 [如视-开放平台](http://developers.realsee.com/) 和 [如视 VR App](https://realsee.com/website/mobile) 去生成您自己的 **Work** 数据，参考博客 [如视三维空间能力迅速 "尝鲜"](/blog/quick-start-with-api)。

企业级实景空间采集、虚拟空间设计、加工服务请联系 [如视官网-商务合作](https://realsee.com/website/business)。
:::

