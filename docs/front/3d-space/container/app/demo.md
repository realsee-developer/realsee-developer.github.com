---
title: 跑通 DEMO
---

## Android Demo

### 环境要求

- 最低兼容 Android 5.0（SDK API Level 21），建议使用 Android 8.0 （SDK API Level 26）及以上版本。
- Android Studio 3.5 及以上版本。
- App 要求 Android 5.0 及以上设备。


### 操作步骤

- 1、 新建空白Android项目。
- 2、 项目 **import Module** 方式引入Demo 里的 **demo_external** module。
- 3、 同步依赖文件，运行 **demo_external** module 即可。

### 使用说明

> 输入或者扫码要跳转的 VR 链接 (VR Url)，点击进入测试即可。

:::caution 注意：
如果打开Debug模式，需要申请悬浮窗权限（android.permission.SYSTEM_ALERT_WINDOW），点击[确定]去设置或者取消即可。
:::


## iOS Demo

### 环境要求

- Xcode 11.0及以上版本。
- 请确保您的项目已设置有效的开发者签名。
- 请确保您有真机可供调试。

### 操作步骤

- 1、打开Demo项目，命令行执行 **pod update** 拉取依赖。
- 2、运行 **target** 即可。
