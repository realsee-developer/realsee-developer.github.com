---
title: React Support
---

`@realsee/jsbridge-x` is complete [TypeScript Generations](https://www.typescriptlang.org/docs/handbook/2/generics.html) and [React Hooks](https://reactjs.org/docs/hooks-intro.html) , if your technical stack is based on TypeScript and React to use @realsee/jsbridge-x more elegantly by reference below.

## Create JSBbridge instance

The bridge class of the functional import client and the micromessage applet from `@realsee/jsbridge-x`.

:::tip
If you need to use `@realsee/jsbridge-x` , you need to implement browser "bridge" by `@realsee/jsbridge-x`. Assume that your own browser "bridge" file is named `JSBridgeBrowser.ts`
:::

```tsx
import { JSBridgeApp } from "@realsee/jsbridge-x/lib/app"; // client
import { JSBridgeMiniprogram } from "@realsee/jsbridge-x/lib/miniprogram"; // Miniprogram
import { JSBridgeBrowser } from "./JSBridgeBrowser"; // NOTE, browser bridge requires you to implement yourself

import { isApp, isMiniprogram } from "./utils/deviceDetect";

let bridgeInstance;

// Initialize jsBridge instances based on ends' type
if (isApp) bridgeInstance = new JSBridgeApp();
else if (isMiniprogram) bridgeInstance = new JSBridgeMiniprogram();
else bridgeInstance = new JSBridgeBrowser();
```

## Integration "Bridge" to React Context context

Integrate "bridge" into React Context Context with `JSBridgeContext`

```tsx
import { JSBridgeApp } from "@realsee/jsbridge-x/lib/app"; // client
import { JSBridgeMiniprogram } from "@realsee/jsbridge-x/lib/miniprogram"; // Miniprogram
import { JSBridgeBrowser } from "./JSBridgeBrowser"; // Note that the browser bridge requires your own implementation
// highlight-start
import { JSBridgeContext } from "@realsee/jsbridge-x/lib/react";
// highlight-end

import { isApp, isMiniprogram } from "./utils/deviceDetect";

let bridgeInstance;

// Initialize jsBridge instance by end's type
if (isApp) bridgeInstance = new JSBridgeApp();
else if (isMiniprogram) bridgeInstance = new JSBridgeMiniprogram();
else bridgeInstance = new JSBridgeBrowser();

ReactDOM.render(
  <React.StrictMode>
    // highlight-start
    <JSBridgeContext.Provider value={bridgeInstance}>
      <YourApp />
    </JSBridgeContext.Provider>
    // highlight-end
  </React.StrictMode>,
  document.getElementById("root")
);
```

## Use "bridge"

Next, you can use the "bridge" method in any component that is packaged by `JSBridgeContext.Provider`

For example, get "Liu Ha" \"Dig holes" takes the height of the screen：

```tsx
import { useBangsHeightState } from "@realsee/jsbridge-x/lib/react/hooks";

function DemoApp() {
  const bandHeight = useBangsHeightState();

  return null;
}
```

Close loading:

```ts
import { useJSBridgeAction } from "@realsee/jsbridge-x/lib/react/hooks";

function DemoApp() {
  const { closeLoading } = useJSBridgeAction();

  React.useEffect(() => {
    Promise.resolve().then(closeLoading);
  }, []);

  return null;
}
```

## Full amount of documentation

:::tip
**[For more details API, refer to @realsee/jsbrdige-x full document](https://unpkg.com/@realsee/jsbridge-x/docs/index.html).**
:::
