---
title: Plugin Development
---

::tip  
Five provides plugin mechanisms in factory mode, providing `FivePlugins in`,`FivePlugins`,`FivePluginInits` to help create and use plugins.
:::

## Role of Plugins
- 1. Plugins are abstracts of some common reuses for five operations.
- 2. Codes can be organized through plugins to reduce logical dependency.

Next, this chapter will use `LoadingPlugin` as an example of how to develop plugins based on `@realsee/dnanoge` plugin library.

## Based on @realsee/dnalogel development

`The open source repository for @realsee/dnaloge` plugin repository is： https://github.com/realsee-developer/dnilegelPlease follow the githubu open repository contribution process and fork this repository to your personal repository, and `git clone` to local location.Switch out of `main` branches, by `README.md` familiar with the project.

### New Folder

You need to create a new folder named `LoadingPlugin` under `plugins/src` and create a new `index.ts` file. Next, you can develop your plugin in `index.ts` file.

### Insert Plugin Factory Function

You can click here to view [five plugin factory mode](https://unpkg.com/@realsee/five@5.0.0-alpha.117/docs/modules/five.html#FivePlugin) for details.

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

### Define type of input output





