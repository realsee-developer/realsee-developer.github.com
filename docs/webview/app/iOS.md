---
title: iOS 端
---

:::tip 提示
本文档面向 **iOS 开发人员**，后面的描述中我们假设您已经具备 iOS 开发基础知识并安装 Xcode 等相关开发环境。
:::

:::caution
本文档尚未完善，内容仅供参考。
:::

## 下载地址

如视提供两个版本的 SDK：**基础版本**和**带看版本**。

- **基础版本**：提供基础的 VR 容器能力，比如全屏浏览、震动、保持屏幕常亮、检测麦克风等。若您只需要浏览 VR 功能，推荐您集成此版本。
- **带看版本**：除了 **基础版本** 的所有功能之外，还包含 [TRTC](https://cloud.tencent.com/document/product/647/32689) 以支持实时语音功能。安装体积会比 **基础版本** 大很多；若您需要支持国内线上带看功能，推荐您集成此版本。

<table align="center">
	<tr align="center">
	  <th>类型</th>
    <th>SDK</th>
    <th>DEMO</th>
    <th>安装包增量</th>
	</tr >
  <tr align="center">
	  <td rowspan="1">基础版本</td>
	  <td><a target="_blank">请联系 developer@realsee.com 获取</a></td>
    <td><a target="_blank">请联系 developer@realsee.com 获取</a></td>
    <td>约4M</td>
	</tr>
  <tr align="center">
	  <td rowspan="1">带看版本</td>
	  <td><a target="_blank">请联系 developer@realsee.com 获取</a></td>
    <td><a target="_blank">请联系 developer@realsee.com 获取</a></td>
    <td>约18M</td>
   </tr>
</table>


## 环境要求

- Xcode 11.0 及以上版本。
- 请确保您的项目已设置有效的开发者签名。
- 请确保您有真机可供调试。

## 申请 SDK 接入密钥

:::caution
请向开发者中心申请接入密钥，包含 `app_id` 和 `app_secret`。
:::

## 集成步骤


### 引入 SDK

首先下载 RSVRSDK，将 RSVRSDK 包解压缩后放到项目目录下：

在项目 `Target` 的 `General` 下的 `Frameworks` 里添加 `RSVRSDK.framework`：

![add_vrlib_step1](https://vrlab-static.ljcdn.com/release/web/ios/add_vrlib_step1.f7d4adf3.png)

设置 `Embed` 为 `Do Not Embed`：

![add_vrlib_step1](https://vrlab-static.ljcdn.com/release/web/ios/add_vrlib_step2.62881917.png)


引入 RSVRSDK 所需要的资源文件 `RSVRSDK.bundle`

![add_vrlib_step1](https://vrlab-static.ljcdn.com/release/web/ios/add_vrlib_step3.ad02175d.png)




### 添加框架依赖

添加 SDK 对系统 `Framework` 的依赖（`Photos`、`libz`、`SceneKit`、`WebKit`等）：

![add_vrlib_step4](https://vrlab-static.ljcdn.com/release/web/ios/add_vrlib_step4.d290d723.png)



### 添加第三方依赖

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

### 申请相关权限

RSVRSDK 会使用保存到相册权限，需要在 `info.plist` 里配置权限申请：

```xml
<key>NSPhotoLibraryAddUsageDescription</key>
<string>使用相册</string>
```

### 初始化 SDK

RSVRSDK 初始化需要引入头文件

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

### 开启 VR 页面

初始化完成以后，通过调用:

```objectivec
RSVREntity *param = [[RSVREntity alloc] init];
// 配置打开的URL
param.vrUrl = @"http://xxx/vrurl";
UIViewController *vc = [RSVRSDK VRWebViewWithParam:param];
// 打开VR页
[self.navigationController pushViewController:vc animated:YES];
```


自此，iOS 端 RSVRSDK 基础版功能完成集成。


## 自定义协议

### 微信分享

RSVRSDK 支持调用微信分享到小程序、复制链接等功能，要使用微信分享功能，需要执行以下操作：

```ruby
// 引入微信分享SDK
pod 'WechatOpenSDK'
```

:::caution 特殊说明
如果使用基础版本，不包含VR分享功能，可以自定义分享逻辑
:::

```objectivec
#pragma RSVRSDKDelegate
...
/// H5 页面点击分享时调用
/// @param sharedJson  H5 页面传过来的分享json
- (void)shareWithParam:(NSString *)sharedJson {
   // 完全自定义分享, 可以实现这个代理回调
   // sharedJson 是一个分享数据的 json 字符串
   // 可以通过 shareJson 自定义分享 UI 已经分享行为
}

/// 当用户点击分享 item 回调
/// @param shareModel 分享 item 数据
- (void)didShareItemClick:(RSVRShareBaseModel *)shareModel {
    // 实现这个代理方法, 分享的 UI 将由 SDK 内部实现
    // 当用户点击分享 icon 的时候, 将会回调这代理方法
    // 可以通过 shareModel.extraData 获取到业务方自定义的数据

    // ⚠️ 如果同时实现 shareWithParam: 跟 didShareItemClick:, 将只会回调 shareWithParam:
}
```


### 自定义 Loading

SDK 支持业务方自定义打开 VR 页面前的 Loading 背景图及 Logo。

构造`VRParam`时自定义如下：

```objectivec
NSString *url = @"http://open-rushivr.cn/xxxxx";
NSString *logoUrl = @"http://xxxcdn.com/logo.png";

RSVRParam *param = [[RSVRParam alloc] init];
[param setVrUrl:url];// 要打开的 VR 链接
[param setLogoUrl:logoUrl]; // 自定义Loading页Logo，建议规格：宽306，高111，分辨率72，背景透明。
[param setLoadingImage:loadingImage]; // 自定义Loading页背景图图片
[param setLoadingType:E_RSRSVRSDKLoadingTypeTypeDefault]; // 自定义Loading类型

UIViewController *vc = [RSVRSDK VRWebViewWithParam:param];
[self.navigationController pushViewController:vc animated:YES];
```


### `callAndBackfeed`

前端发送 `scheme` 信息给客户端，客户端收到信息后会立马返回给前端。


协议格式：

```json
{
  "type": "callAndBackFeed 固定值，已定义",
  "param": {
    "actionUrl": "具体的某个 jsBridge",
    "functionName": "App 端执行完某个操作后回调给前端侧的回调方法名称。"
  }
}
```

前端侧：

```javascript
import JSBridge from '@realsee/jsbridge-x'

const jsBridge = new JSBridge()
jsBridge.callAndBackfeed('custom/showQrCode?url=http%3A%2F%2Fwww.realsee.com')
```

App 侧：

```objectivec
/// 可以实现这个方法来处理某个 RSVRSDK 实例无法处理的 scheme
/// @param urlString scheme url
/// @param finishBlock scheme 回调
- (void)actionURL:(NSString *)urlString withFinishBlock:(finishBlock _Nullable)finishBlock
{
  	NSURL* url = [NSURL URLWithString:urlString];
    if (url && [@"/custom/showQrCode" isEqualToString:url.path]) {
        finishBlock(@"1"); //回调通知前端
    }
}
```

### `callAndListen`

前端发送 `scheme` 信息给客户端，客户端会监听相关状态的变化，当相关状态发生后变更后会立马通过回调的方式反馈给前端。

协议格式：

```js
{
  "type": "callAndListen", // 固定值，已定义
  "param": {
 	  "actionUrl": "", // 具体的某个 jsBridge
	  "functionName": "App", // 端执行完某个操作后回调给前端侧的回调方法名称。
  }
}
```

前端侧：

```javascript
import JSBridge from '@realsee/jsbridge-x'

const jsBridge = new JSBridge()
jsBridge.callAndListen('custom/listenWebViewState', (newState) => {
  // 监听的客户端状态发生变更
})
```

App 侧：

```objectivec
/// 需要实现这个方法来处理一些 VR SDK 没有处理的 H5 scheme, 比如: web/compaign
/// @param urlString sscheme url
/// @param finishBlock scheme 回调
- (void)actionURL:(NSString *)urlString withFinishBlock:(RSVRSchemeFinishCallback _Nullable)finishBlock {
  	NSURL* url = [NSURL URLWithString:urlString];
    if (url && [@"/custom/listenWebViewState" isEqualToString:url.path]) {
        finishBlock(@"START"); //回调通知前端 开始
      ......
        finishBlock(@"PAUSE"); //回调通知前端 暂停
      ......
        finishBlock(@"STOP"); //回调通知前端 停止
    }
}
```
