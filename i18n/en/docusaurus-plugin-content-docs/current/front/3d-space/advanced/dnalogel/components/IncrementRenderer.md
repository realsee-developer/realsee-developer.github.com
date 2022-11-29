---
title: Add AI incremental rendering feature
---

## **IncrementRenderer**

Minimum support repository：`@realsee/dnalogel@2.0.0-alpha.34`

## Function Description

**Incremental Render** Rapid rendering of three-dimensional space under the AI Design scenario when the three-dimensional space point has not yet been fully rendered, and supports continuous loading of completed points.

## Install reference

**Please choose `yarn` or `npm` installation method：as needed**

```bash npm2yarn
npm install @realsee/dnalogel
```

**By es reference：**

```tsx
import { IncrementRenderer } from "@realsee/dnalogel/components";
```

## Development Guides

### Initialize

Initialize object instance as needed.

```ts
/**
 * Incremental renderer configuration
 */
export interface IncrementRendererOptions {
  // initial meta data
  initialMeta?: IncrementRendererMeta

  // initial work data
  initialWork?: any

  // polling interval, unit Milliseconds, default 1000ms
  pollingInterval?: number

  // The number of retries when getMeta or getWork gets an exception
  retryCount?: number

  // Interface to get meta data
  getMeta: () => Promise<IncrementRendererMeta>

  // Get work Data interface
  getWork: () => Promise<any>

  // When work data changes
  onWorkChange: (work: Work) => void

  // When rendering is completed
  onRenderDone: (work: Work) => void

  / / Rendering status changes
  onStatusChange?: (status: RENDER_STATUS | string) => void

  // Callback when an exception occurs
  onError?: (error: Error) => void
}

const incrementRenderer = new IncrementRenderer(opt:IncrementRendererOptions);
```

### React Use Example

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

  // Get meta data
  // Refer to https://open-platform.realsee.com/developer/open/api/#/paths/open-v1-entity-meta/get
  const getMeta = useCallback(async () => {
    return await getMetaFromApi();
  }, []);

  // Get work data
  // Refer to https://open-platform.realsee.com/developer/open/api/#/paths/open-v1-entity- vr/get
  const getWork = useCallback(async () => {
    return await getWorkFromApi();
  }, []);

  // Rendering status change callback
  const onStatusChange = useCallback((status) => {
    console.info("VR render status change: ", status);
  }, []);

  // Execute exception error capture callback
  const onError = useCallback((e: Error) => {
    console.error(e);
  }, []);

  // When the work data changes, that is, the incremental part is rendered and the new work data is handed over to five
  const onWorkChange = useCallback(
    (work) => {
      if (work) {
        loadFiveWork(work);
      }
    },
    [loadFiveWork]
  );

  // This is the callback for complete rendering
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

### Core approach

- `dispose()` stop incremental rendering

## demo source reference

[demo source reference](https://github.com/realsee-developer/dnalogel/tree/main/examples/src)
