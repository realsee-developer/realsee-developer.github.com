---
title: iOS party
---

:::tip hint
This document is in front of **iOS developers**, in the description that follows, we assume you already have an iOS development basics and installed Xcode related development environments.
:::

:::caution
This document is not yet complete and its content is for reference purposes only.
:::

## Download address

If you see two versions of SDK：**basics**and**with revision**.

- **Base version**：provides basic VR container capabilities such as full-screen browsing, vibration, keeping screen on and detecting microphone.If you only need to view VR features, it is recommended that you integrate this version.
- **with version**：contains **basic version** and includes [TRTC](https://cloud.tencent.com/document/product/647/32689) to support real-time voice.Installing volume will be much larger than the **base version** and you are recommended to integrate this version if you need to support domestic online visibility features.

<table align="center">
    <tr align="center">
      <th>Type</th>
    <th>SDK</th>
    <th>DEMO</th>
    <th>Installation increment</th>
    </tr>
  <tr align="center">
      <td rowspan="1">Base Version</td>
      <td><a target="_blank" href="https://vr-public-1304125667.cos.ap-beijing.myqcloud.com/release/vrnative/rsvrsdk_lite-1.0.16.zip">rsvrsdk_lite-1.0.16</a></td>
    <td><a target="_blank" href="https://vr-public-1304125667.cos.ap-beijing.myqcloud.com/release/vrnative/vrdemo.zip">demo</a></td>
    <td>About 4M</td>
    </tr>
  <tr align="center">
      <td rowspan="1">Take Version</td>
    <td><a target="_blank" href="https://vr-public-1304125667.cos.ap-beijing.myqcloud.com/release/vrnative/rsvrsdk-1.0.16.zip">rsvrsdk-1.0.16</a></td>
      <td><a target="_blank" href="https://vr-public-1304125667.cos.ap-beijing.myqcloud.com/release/vrnative/vrdemo.zip">demo</a></td>
    <td>About 18M</td>
   </tr>
</table>

## Environmental requirements

- Xcode 11.0 and above.
- Make sure your project has a valid developer signature.
- Please make sure you have a real opportunity to debug.

## Apply SDK access key

:::caution
Please apply to the developer center for access key containing `app_id` and `app_secret`.
:::

## Integration step


### Introduce SDK

First download RSVRSDK, decompress the：package and put it in the project directory.

Add `RSVRSDK.framework`：in `Frameworks` under `General` of project `Target`

![add_vrlib_step1](https://vrlab-static.ljcdn.com/release/web/ios/add_vrlib_step1.f7d4adf3.png)

Set `Embed` to `Do Not Embed`：

![add_vrlib_step1](https://vrlab-static.ljcdn.com/release/web/ios/add_vrlib_step2.62881917.png)


Introducing RSVRSDK resource files `RSVRSDK.bundle`

![add_vrlib_step1](https://vrlab-static.ljcdn.com/release/web/ios/add_vrlib_step3.ad02175d.png)




### Add framework dependency

Add SDK dependencies `Framework` (`Photos`,`libz`,`SceneKit`,`WebKit`etc.)：

![add_vrlib_step4](https://vrlab-static.ljcdn.com/release/web/ios/add_vrlib_step4.d290d723.png)



### Add Third Party Dependencies

Since RSVRSSDK relies on some third-party open source libraries, it is necessary to introduce the Podfile in the main project.

```ruby
# Methods for VRSDK
pod 'FMDB' 
pod 'Mant'
pod 'AFNetworking', '3.2.1'
pod 'YCache'
pod 'YModel'
pod 'Masonry'
```

### Apply for related permissions

RSVRSDK will use save to album. You will need to configure permission request in `info.plist`：

```xml
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Using album</string>
```

### Initialize SDK

RSVRSSDK initialization requires introducing header files

```objectivec
// import VR SDK header
#import <RSVRSDK/RSVRSDK.h>
#import <RSVRSDK/RSVRSDKConfig.h>
```

Provides initialization configuration

```objectivec
- (void) configVR maximum
    [RSVRSDKConfig shareInstance].appInfo.scheme=@"xxxxx";
    [RSVRSDKConfig shareInstance].appInfo.appId = @"appid";
    [RSVRSSDKConfig shareInstance].appInfo.appSecret = @"appSecret";    
    [RSVRSSDKConfig share].appInfo.userAgent = @"xxxxx";
}
```

### Enable VR Page

Once initialization is complete, by call:

```objectivec
RSVREntity *param = [RSVREntity alloc] init];
// Configure open URL
param. rUrl = @"http://xxx/vrurl";
UIViewController*vc = [RSVRSDK VRWebViewVivithParam:param];
// Open VR page
[self.navigationController pushViewController:vc animated:YES];
```


Since then, iOS RSVRSDK basic features have been integrated.


## Custom Protocol

### MicroMessage Sharing

RSVRSDK supports functions such as calling WeChat to share to applets, copying links, etc. To use the WeChat sharing function, you need to perform the following operations：

```ruby
// Introducing Micromessage-Sharing SDK
pod 'WechatOpenSDK'
```

:::caution special note
If using base version, no VR sharing feature is included, you can customize sharing logic :
:::

```objectivec
#pagma RSVRSDKDelegate
...
/// H5 pages call json on share
/// @param sharedJson H5 page on shared
- (void) shareVithParam:(NSString *) sharedJson $
   // completely customize sharing, This proxy callback can be implemented
   // sharedJson is a json string sharing data
   // Can be shared via shareJson custom UI shared
}

/// When users click on item callback
/// @param shadeModel Share item
- (void) didShareItemClick:(RSVRShareModel*)shadeModeModel *) shareModeModel
    // Implement this proxy method, Shared UI will be implemented internally by SDK
    // When users click on sharing icon, this proxy method will be called
    // available through shareModel. xtraData get customized data for the business party

    // ⚠️ if shareWithParam: with didShareItemClick:, will only back shareSithParam:
}
```


### Custom Loading

The SDK supports the operator to customize the Loading Background and Logo on the VR page.

When constructing`VRParam`, customize as follows：

```objectivec
NSString *url = @"http://open-rushivr.cn/xxxxx";
NSString *logoUrl = @"http://xxxcdn.com/logo. ng";

RSVRParam *param = [[RSVRParam alloc] init];
[param setVrUrl:url];// to open VR link
[param setLogoUrl:logoUrl]; // Custom LoadingLogo, recommend specification：broad, high 111, resolution 72, background transparency.
[param setLoadingImage:loadingImage]; // Custom LoadingPage Background Image
[param setLoadingType:E_RSSVRSDKLoadingTypeTypeDefault]; // Custom LoadingType

UIViewController*vc = [RSVRSDK VRWebViewVivithParam:param];
[self.navigationControllerushViewControler:vc animat:YES];
```


### `callAndBackfeed`

Send `scheme` information to the client. The client will return to the front end when it receives the message.


Protocol format：

```json
{
  "type": "callAndBackFeed fixed value, defined",
  "param": {
    "actionUrl": "a specific jsBridge",
    "functionName": "Callback to The callback method name on the frontend side."
  }
}
```

Frontend side：

```javascript
import JSBbridge from '@realsee/jsbridge-x'

const jsBridge = new JSBridge()
jsBridge.callAndBackfeed('custom/showQrCode?url=HTTP%3A%2F%2Fwww.realsee.com')
```

App side：

```objectivec
/// This method can be implemented to handle scheme
that cannot be processed by an RSVRSDK instance /// @param urlString scheme url
/// @param finishBlock scheme callback
- (void)actionURL:(NSString *)urlString withFinishBlock:( finishBlock _Nullable)finishBlock
{
    NSURL* url = [NSURL URLWithString:urlString];
    if (url && [@"/custom/showQrCode" isEqualToString:url.path]) {
        finishBlock(@"1"); / /callback notify frontend
    }
}
```

### `callAndListen`

Send `scheme` information to client, client listens to changes in the status and will send back back to the frontend by callback when the status changes occur.

Protocol format：

```js
{
  "type": "callAndListen", // fixed value, already defined
  "param": {
      "actionUrl": "", // a specific jsBridge
      "functionName": "App", // terminal The name of the callback method that is called back to the front end after an operation is executed.
  }
}
```

Frontend side：

```javascript
import JSBbridge from '@realsee/jsbridge-x'

const jsBridge = new JSBridge()
jsBridge.callAndListen ('custom/listenWebViewState', (newState) => LOCE
  //listener client status changed
})
```

App side：

```objectivec
/// This method needs to be implemented to handle some H5 schemes that the VR SDK does not handle, for example: web/compaign
/// @param urlString sscheme url
/// @param finishBlock scheme callback
- (void)actionURL:(NSString *)urlString withFinishBlock:(RSVRSchemeFinishCallback _Nullable)finishBlock {
    NSURL* url = [NSURL URLWithString:urlString];
    if (url && [@"/custom/listenWebViewState" isEqualToString:url.path]) {
        finishBlock(@" START"); //Callback to inform the front end to start
      ......
        finishBlock(@"PAUSE"); //Callback to notify the front end to pause
      ......
        finishBlock(@"STOP"); // Callback to notify frontend to stop
    }
}
```
