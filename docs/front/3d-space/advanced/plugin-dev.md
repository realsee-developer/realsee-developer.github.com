---
title: 插件开发
---

:::tip
Five 提供了工厂模式的插件机制, 提供了 `FivePlugin`、`FivePluginInstance`、`FivePluginInits` 接口来帮助创建和使用插件.
:::

## 插件的作用
- 1、插件即是将一些通用的对于 five 的操作的一些复用的抽象。 
- 2、可以通过插件来组织代码，减少逻辑依赖。

接下来，本章将以 `LoadingPlugin` 为例，讲解如何基于 `@realsee/dnalogel` 插件库开发插件。

## 基于 @realsee/dnalogel 开发

`@realsee/dnalogel` 插件库的开源仓库地址为： https://github.com/realsee-developer/dnalogel 。请按照 github 开源仓库贡献流程，将此仓库
 fork 到您的个人仓库中，并 `git clone` 到本地。从 `main` 分支中切出分支，按照 `README.md` 熟悉项目。

### 新建文件夹

您需要在 `plugins/src` 路径下新建名为 `LoadingPlugin` 的文件夹，并新建 `index.ts` 文件，接下来，您就可以在 `index.ts` 文件中开发您的插件。

### 引入插件工厂函数

您可点击此处查看 [five 插件工厂模式](https://unpkg.com/@realsee/five@5.0.0-alpha.117/docs/modules/five.html#FivePlugin) 详细说明。

```ts title="index.ts"
import type { FivePlugin } from "@realsee/five";
import { Five } from "@realsee/five"

export interface LoadingPluginParametersType {}
export interface LoadingPluginExportReturnsType {}

export const LoadingPlugin: FivePlugin<LoadingPluginParametersType, LoadingPluginExportReturnsType> = (
    five: Five,
    params
) => {
    return null
}
```

### 定义输入输出类型





