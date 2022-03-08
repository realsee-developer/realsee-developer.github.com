---
title: iOS 端展示 SDK 集成
---

## 环境要求

- Xcode 11.0及以上版本。
- 请确保您的项目已设置有效的开发者签名。
- 请确保您有真机可供调试。

## 申请SDK接入密钥

:::caution
请向开发者中心申请接入密钥，包含**app_id**和**app_secret**。
:::

## 集成步骤

### 1、添加 VR 依赖

首先：引入 RSVRSDK，将RSVRSDK包解压缩后放到项目目录下

> 1、在项目Target的General下的Frameworks里添加RSVRSDK.framework

<!-- ![add_vrlib_step1](../../../../assets/ios/add_vrlib_step1.png) -->

> 2、设置Embed为 Do Not Embed

<!-- ![add_vrlib_step2](../../../../assets/ios/add_vrlib_step2.png) -->

> 3、引入RSVRSDK所需要的资源文件 RSVRSDK.bundle

<!-- ![add_vrlib_step3](../../../../assets/ios/add_vrlib_step3.png) -->



### 2、添加系统框架依赖

添加SDK对系统Framework的依赖（Photos、libz、SceneKit、WebKit）

<!-- ![add_vrlib_step4](../../../../assets/ios/add_vrlib_step4.png) -->



### 3、添加三方依赖

由于 RSVRSDK 依赖了一些第三方的开源库，需要在主工程的 Podfile 引入.

```ruby
# Pods for VRSDK
  pod 'FMDB' 
  pod 'Mantle'
  pod 'AFNetworking', '3.2.1'
  pod 'YYCache'
  pod 'YYModel'
  pod 'Masonry'
```

:::warning 注意：
网络库 AFNetworking 需要使用3.x版本，4.x以后的版本接口存在兼容问题，请务必使用3.x版本。
:::


### 4、申请相关权限

VR SDK会使用保存到相册权限，需要在 info.plist 里配置权限申请

```xml
<key>NSPhotoLibraryAddUsageDescription</key>
<string>使用相册</string>
```



### 5、初始化 RSVRSDK

VR SDK 初始化需要引入头文件

```objectivec
// 导入 VR SDK 头文件
#import <RSVRSDK/RSVRSDK.h>
#import <RSVRSDK/RSVRSDKConfig.h>
```

提供初始化配置

```objectivec
- (void)configVR {
    [RSVRSDKConfig shareInstance].appInfo.scheme = @"xxxxx";
    [RSVRSDKConfig shareInstance].appInfo.appId = @"appid";
    [RSVRSDKConfig shareInstance].appInfo.appSecret = @"appSecret";    
    [RSVRSDKConfig shareInstance].appInfo.userAgent = @"xxxx";
}
```

### 6、打开 VR

初始化完成以后，通过调用

```objectivec
RSVREntity *param = [[RSVREntity alloc] init];
// 配置打开的URL
param.vrUrl = @"http://xxx/vrurl";
UIViewController *vc = [RSVRSDK VRWebViewWithParam:param];
// 打开VR页
[self.navigationController pushViewController:vc animated:YES];
```


:::info
自此，iOS SDK 基础版功能完成集成。**
:::


## 微信分享支持

SDK支持调用微信分享到小程序、复制链接功能，要使用微信分享功能，需要执行以下操作：

### 1、引入微信分享SDK

```groovy
pod 'WechatOpenSDK'
```

### 2、特殊说明

:::caution
如果使用基础版本，不包含VR分享功能，可以自定义分享逻辑
:::

```objective-c
#pragma RSVRSDKDelegate
...
/// H5 页面点击分享时调用
/// @param sharedJson  H5 页面传过来的分享json
- (void)shareWithParam:(NSString *)sharedJson
{
	 ...
}
```


## 自定义支持

SDK提供了一些接入方使用时的自定义功能，完成一些业务方特定业务功能

### 自定义 loading

> SDK 支持业务方自定义打开VR前的loading背景图及logo

构造VrParam时自定义如下：

```objective-c
NSString *url = @"http://open-rushivr.cn/xxxxx";
NSString *logoUrl = @"http://xxxcdn.com/logo.png";

RSVRParam *param = [[RSVRParam alloc] init];
[param setVrUrl:url];// 要打开的VR链接
[param setLogoUrl:logoUrl]; // 自定义loading页默认的logo，不设置使用默认logo（建议规格：宽306，高111，分辨率72，背景透明）
[param setLoadingImage:loadingImage]; // 自定义loading页背景图图片，不设置使用默认背景
[param setLoadingType:E_RSVRWebViewLoadingTypeTypeDefault]; // 自定义loading类型

UIViewController *vc = [RSVRSDK VRWebViewWithParam:param];
    [self.navigationController pushViewController:vc animated:YES];
```

### 自定义交互1

> 发送 `scheme` 信息给客户端，客户端收到信息后会立马返回给前端

H5侧：通过window.webkit.messageHandlers.realsee.postMessage方法调用到App端

入参：

```json
{
  "type": "callAndBackFeed 固定值，已定义",
  "param": {
    "actionUrl": "具体的某个bridge",
    "functionName": "App端执行完某个操作后回调给H5侧的方法"
  }
}
```

**例**：定义类似：realsee://common/showQrCode?url=http%3A%2F%2Fwww.baidu.com 这样的Bridge

```javascript
var showQrCode = 'lianjiabeike://common/showQrCode?url=http%3A%2F%2Fwww.baidu.com'
var back = function(result){
  alert(result)
}
window.webkit.messageHandlers.realsee.postMessage("{'type':'callAndBackfeed','param':'{'actionUrl':"+showQrCode+",'functionName':"+back+"}'}")
```

App侧：

```objectivec
/// 可以实现这个方法来处理某个 VR  WebView 实例无法处理的 scheme
/// @param urlString scheme url
/// @param finishBlock scheme 回调
- (void)actionURL:(NSString *)urlString withFinishBlock:(finishBlock _Nullable)finishBlock
{
  	NSURL* url = [NSURL URLWithString:urlString];
    if (url && [@"/showQrCode" isEqualToString:url.path]) {
        finishBlock(@"1"); //回调通知H5
    }
}
```

### 自定义交互2

> 发送 `scheme` 信息给客户端，客户端会监听相关状态的变化，当相关状态发生后变更后会立马通过回调的方式反馈给前端

H5侧：通过window.webkit.messageHandlers.realsee.postMessage方法调用到App端

入参：

```objectivec
 type: callAndListen 固定值，已定义
 param:{
 	 actionUrl：具体的某个bridge
	 functionName：App端执行完某个操作后回调给H5侧的方法
 }
```

例：定义类似：beike://common/listenWebViewState 这样的Bridge

```javascript
var listenWebViewState = 'lianjiabeike://common/listenWebViewState'
var back = function(result){
  alert(result)
}
window.webkit.messageHandlers.realsee.postMessage("{'type':'callAndListen','param':'{'actionUrl':"+listenWebViewState+",'functionName':"+back+"}'}")
```

App侧：

```objectivec
/// 可以实现这个方法来处理某个 VR  WebView 实例无法处理的 scheme
/// @param urlString scheme url
/// @param finishBlock scheme 回调
- (void)actionURL:(NSString *)urlString withFinishBlock:(finishBlock _Nullable)finishBlock
{
  	NSURL* url = [NSURL URLWithString:urlString];
    if (url && [@"/listenWebViewState" isEqualToString:url.path]) {
        finishBlock(@"START"); //回调通知H5 开始
      ......
        finishBlock(@"PAUSE"); //回调通知H5 暂停
      ......
        finishBlock(@"STOP"); //回调通知H5 停止
    }
}
```

## API概览

[点击查看详细API](https://developers.realsee.com/docs/docs/live/client/container/ios/iosdoc/annotated.html)
