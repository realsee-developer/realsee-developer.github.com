---
title: 添加AI设计增量渲染功能
---

## **IncrementRenderer**

最低支持版本库：`@realsee/dnalogel@2.0.0-alpha.34`

## 功能说明

**增量渲染** 在 AI 设计场景下当三维空间点位还未完全渲染的情况下，进行三维空间的快速渲染，并支持持续加载渲染完成的点位。

## 安装引用

**请按需选择 `yarn` 或 `npm` 安装方式：**

```bash npm2yarn
npm install @realsee/dnalogel
```

**通过 es 引用：**

```tsx
import { IncrementRenderer } from "@realsee/dnalogel/components";
```

## 开发指南

### 初始化

按需初始化对象实例。

```ts
/**
 * 增量渲染器的配置
 */
export interface IncrementRendererOptions {
  // 初始meta数据
  initialMeta?: IncrementRendererMeta

  // 初始work数据
  initialWork?: any

  // 轮询时间间隔，单位毫秒，默认1000ms
  pollingInterval?: number

  // 当 getMeta 或者 getWork 获取异常后重试的次数
  retryCount?: number

  // 获取meta数据的接口
  getMeta: () => Promise<IncrementRendererMeta>

  // 获取work数据的接口
  getWork: () => Promise<any>

  // 当work数据发生变更
  onWorkChange: (work: Work) => void

  // 当渲染完成
  onRenderDone: (work: Work) => void

  // 渲染状态变化
  onStatusChange?: (status: RENDER_STATUS | string) => void

  // 当发生异常时的回调
  onError?: (error: Error) => void
}

const incrementRenderer = new IncrementRenderer(opt:IncrementRendererOptions);
```

### react 使用示例

```tsx
import { IncrementRenderer } from "@/@realsee/core/modules/IncrementRenderer";
import { useFiveWork } from "@realsee/five/react";
import { useEffect, useCallback } from "react";

export const IncrementRendererUse = ({
  props,
  onFinished,
}: {
  props: { meta: any; work: any };
  onFinished: () => void;
}) => {
  const [, loadFiveWork] = useFiveWork();

  // 进行meta数据获取
  // 参考https://open-platform.realsee.com/developer/open/api/#/paths/open-v1-entity-meta/get
  const getMeta = useCallback(async () => {
    return await getMetaFromApi();
  }, []);

  // 进行work数据获取
  // 参考https://open-platform.realsee.com/developer/open/api/#/paths/open-v1-entity-vr/get
  const getWork = useCallback(async () => {
    return await getWorkFromApi();
  }, []);

  // 渲染状态变化回调
  const onStatusChange = useCallback((status) => {
    console.info("VR render status change: ", status);
  }, []);

  // 执行异常的报错捕获回调
  const onError = useCallback((e: Error) => {
    console.error(e);
  }, []);

  // 当work数据发生变更，即增量部分渲染完成把新的work数据交给five
  const onWorkChange = useCallback(
    (work) => {
      if (work) {
        loadFiveWork(work);
      }
    },
    [loadFiveWork]
  );

  // 这个是完全渲染完成的回调
  const onRenderDone = useCallback(
    (work) => {
      onWorkChange(work);
      onFinished?.();
    },
    [onFinished, onWorkChange]
  );

  useEffect(() => {
    const incrementRenderer = new IncrementRenderer({
      initialMeta: props.meta,
      initialWork: props.work,
      getMeta,
      getWork,
      onStatusChange,
      onWorkChange,
      onRenderDone,
      onError,
    });
    return () => incrementRenderer.dispose();
  }, [
    getMeta,
    getWork,
    onError,
    onRenderDone,
    onStatusChange,
    onWorkChange,
    props.meta,
    props.work,
  ]);

  return <></>;
};
```

### 核心方法

- `dispose()` 停止增量渲染

## demo 源码参考

[demo 源码参考](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
