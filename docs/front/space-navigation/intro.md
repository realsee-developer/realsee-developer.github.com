---
title: 介绍
---

**Vreo** (VR Video) 是基于如视三维渲染引擎 [Five](https://unpkg.com/@realsee/five/docs/index.html) 和 用户界面构建库 [React](https://reactjs.org/) 实现的**如视三维空间剧本播放器**。


:::tip
我们将三维空间的动态行为以剧本的概念去抽象。传统的剧本主要展现故事情节和构造人物形象，而 **Vreo 剧本** 则注重三维空间信息的动态表达。

传统意义上的剧本通常主要由 **台词** 和 **舞台指示** 组成，在 **Vreo 剧本** 中也有类似的概念。比如，在 **Vreo 剧本** 中的舞台即是渲染三维空间，台词即讲解数字人的题词、字幕。

**舞台指示** 指的是剧本里的 **叙述性文字说明** ——内容包括对人物的形象特征、心理活动、情感变化和场景、气氛的描写，时间、地点、动作的说明以及对灯光、布景、音响效果等艺术处理的要求等。

在 **Vreo 剧本** 中则不是以 **叙述性文字说明** 来表现舞台指示，我们以 **剧本帧** 的形式去定义相机运镜、三维特效、空间动作等行为。由于我们的初衷是三维空间信息的动态表达，因此不会有人物的形象特征、心理活动、情感变化等诉求，而灯光、布景、音效等在三维空间均有类似模块。
:::

## 功能介绍

Vreo 不仅支持如视三维空间动态游走、模式切换等运镜之外，还支持全景标签、空间文本、模型特效等功能，主要分类如下：

- **相机运镜**：支持三维空间全景游走、旋转、分镜切换等类似于电影运镜的效果。
- **定制模块**：提供弹幕提词、全景标签、视频广告、空间文本等模块定制能力。
- **内置特效**：提供全景特效、视频特效、户改动画、模型特效等丰富动态效果。
- **独特的虚拟形象渲染能力**：支持用户在 Web 页面模拟虚拟形象，配合语音讲解、相机运镜和定制特效，可实现智能化讲解功能。

:::tip
您也可以访问 **[Vreo Demo](https://vrlab-static.ljcdn.com/release/web/vreo/index.html?v=1)** 体验 Vreo 功能。
:::

## 依赖说明

:::caution
剧本播放器功能基于如视三维空间能力实现，如果您的系统当前还未集成 **如视三维空间** 能力，请先前往 [**如视三维空间文档**](../3d-space/intro.md) 了解更多。
:::