---
title: 介绍
---

# Vreo

[![npm version](https://img.shields.io/npm/v/@realsee/vreo.svg?style=flat-square&logo=npm&label=npm%20install%20@realsee/vreo)](https://www.npmjs.com/package/@realsee/vreo)

**Vreo** (VR Video) 是基于如视三维渲染引擎 [Five](https://unpkg.com/@realsee/five/docs/index.html) 和 用户界面构建库 [React](https://reactjs.org/) 实现的**如视 3D 空间剧本播放器**。


:::info
区别于传统意义上，以文本形式呈现的台词和以舞台表演展现的故事情节，**Vreo 剧本是按格式编写的、代表了不同类型帧合集的数据体**。通过传入约定结构的 Vreo 剧本数据，Vreo 就能够对数据帧进行分析，而后在 3D 空间内进行流畅的讲述和展示。

:::

## 功能介绍

Vreo 不仅支持如视 3D 空间行为播放，还支持定制如： 弹幕题词、全景标签等类的模块。不仅如此，Vreo 还内置了户改动画等特效功能。总的来说，Vreo 提供的功能可分为如下四类：
- 相机运镜：支持 3D 空间全景游走、旋转、分镜切换等类似于电影运镜的效果。
- 定制模块：提供弹幕提词、全景标签、视频广告、空间文本等模块定制能力。
- 内置特效：提供全景特效、视频特效、户改动画、模型特效等丰富动态效果。
- 独特的虚拟形象渲染能力：支持用户在 Web 页面模拟虚拟形象，配合语音讲解、相机运镜和定制特效，可实现智能化讲房功能。

:::tip
您也可以访问 **[Vreo Demo](https://vrlab-static.ljcdn.com/release/web/vreo/index.html?v=1)** 体验 Vreo 功能。
:::

## 依赖说明

:::caution
如视 3D 空间剧本播放器功能基于 如视 3D 空间功能实现，如您的系统当前还未集成**如视 3D 空间**功能，请先前往 [**如视 3D 空间文档**](../3d-space/intro.md) 了解更多相关信息
:::
