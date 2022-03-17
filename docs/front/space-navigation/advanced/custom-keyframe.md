---
title: '自定义关键帧'
---
 
除了默认内置的剧本帧之外，**Vreo** 支持自定义剧本帧。你可以将剧本帧类型设定为 `VreoKeyframeEnum.Custom`，然后通过监听 `vreoplayer.on(VreoKeyframeEnum.Custom, callback)` 剧本事件去解析你自己定义的剧本行为。

## 通过配置参数集成

你可以实现个 `React` 组件，例如：

```tsx
export function YourCustomKeyframe(props: CustomVreoKeyframeProps) {

  React.useEffect(() => {
    props.subscribe.on(VreoKeyframeEnum.Custom, callback)

    return () => {
      props.subscribe.off(VreoKeyframeEnum.Custom, callback)
    }
  }, [])

  return <>...</>
}
 ```

然后通过 `new Player(five, {customKeyframes: [YourCustomKeyframe]})` 配置参数添加进去即可。

## React Hooks 集成

```tsx
export function YourCustomKeyframe() {
  // 是不是很简单
  useVreoEventCallback(VreoKeyframeEnum.Custom, callback)

  return <>...</>
}
