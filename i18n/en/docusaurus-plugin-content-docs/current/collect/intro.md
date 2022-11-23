---
title: Introduction
---

**If Space Gathering** controls collecting devices based on mobile terminals iOS / Android, collect raw VR data and make preliminary editing and preview, eventually submit the raw data to the cloud and enter the VR process.

- **Device connection and control** SDK uses`Bluetooth`/`WIFI`Communication protocol to implement connection and control of device
- **Gathering raw data** SDK synthesizes panoramic images using imaging techniques and extrapolates picture depth information to provide pre-treatment of VR point relations
- **Edit and preview** SDK uses`SceneKit`/`OpenGL ESS` Technical Preview position Model, and position editing, deleting, etc. on point position models, preview overall VR<!-- 是基于现代浏览器 \[WebGL\](https://www.khronos.org/webgl/) 实现的。而在移动终端( iOS / Android )、微信小程序等环境中，则是以 **WebView** 内嵌前端页面的形式进行如视三维空间渲染能力的集成。同时，为了充分利用终端的能力，如视开放平台官方封装了一系列 `VRWebView` SDK。 -->## Supported Gathering Device

`Acquisition SDK` currently supports the following acquisition devices：

- **Galohua** ：laser VR scanner, application
- **Smartphone cloud** ：`REALSEE G1`, Fast space acquisition
- **Panorama**：fitted to mainstream Marketplace, 2D auto 3D

<!-- ## 支持功能

`采集SDK` 主要提供如下几项功能：

### 空间采集

- **采集及编辑**

### 硬件管理

- **获取原始数据** 支持控制设备旋转、拍摄、并从设备拉取拍摄数据
- **设备ROM升级** 支持向设备推送对应升级Rom包，更新设备固件 -->
