---
title: Android
---

:::tip hint
This document is in the direction of **Android developers**, in the description that follows, we assume you already have Android basics and installed Android Studio and other related development environments.
:::

## Download address

If you see two versions of SDK：**basics**and**with revision**.

- **Base version**：provides basic VR container capabilities such as full-screen browsing, vibration, keeping screen on and detecting microphone.If you only need to view VR features, it is recommended that you integrate this version.
- **with version**：contains **basic version** and includes [TRTC](https://cloud.tencent.com/document/product/647/32689) to support real-time voice.It is recommended that you integrate this version if you need to support online viewing features.

<table align="center">
    <tr align="center">
      <th>Type</th>
    <th>SDK</th>
    <th>DEMO</th>
    <th>Installation increment</th>
    </tr>
  <tr align="center">
    <td rowspan="1">Base Version</td>
	  <td><a target="_blank" href="https://vr-public-1304125667.cos.ap-beijing.myqcloud.com/release/vrnative/rsvrsdk_lite-1.0.16.aar">rsvrsdk_lite-1.0.16</a></td>
    <td><a target="_blank" href="https://vr-public-1304125667.cos.ap-beijing.myqcloud.com/release/vrnative/demo_external.zip">demo</a></td>
    <td>About 1.2M</td>
    </tr>
  <tr align="center">
    <td rowspan="1">Take Version</td>
	  <td><a target="_blank" href="https://vr-public-1304125667.cos.ap-beijing.myqcloud.com/release/vrnative/rsvrsdk-1.0.16.aar">rsvrsdk-1.0.16</a></td>
    <td><a target="_blank" href="https://vr-public-1304125667.cos.ap-beijing.myqcloud.com/release/vrnative/demo_external.zip">demo</a></td>
    <td>About 10M</td>
   </tr>
</table>

## Environmental requirements

- Minimum compatibility with Android 5.0 (SDK API Lebel 21), recommended using Android 8.0 (SDK API Lebel 26) and above.
- Android Studio 3.5 and above.
- App requires Android 5.0 and above.

### Application for SDK access key

:::caution
Please apply to the developer center for access key containing `app_id` and `app_secret`.
:::

## Integration step

### Introduce SDK

Add **vrsdk** folders in main `module` , put **rsvrsdk-{版本号}.aar** into it, and import it into the project in the form of local `aar`.

Change build.gradle:

```groovy title="build.gradle"
dependencies {
  ...
  implementation fileTree(dir: 'vrsdk', include: ['*.aar'])
  ...
}
```

### Add Trilateral Dependency

Some third-party library dependencies need to be added to `build.gradle`：

```groovy title="build.gradle"
dependencies have been {
  ...
    // basic component
    api "androidx. ecyview:recyclerview:1.1.0"
    api "androidx.fragment:fragment:1.2.4"
    // Network parsing data
    api "com.squareup.okhttp3:okhttp:3.7.0"
    api "com.squareup.retrofit2:retrofit:2.1.0"
    api "io.reactivex:rxjava:1.2.9"
    api "com.google.code.gson:gson:2.7"
    api "io.reactivex:rxandroid:1.2.1"
    // Picture
    api "com.github.bumptech.glide:glide:4.8.0"
    // Local notification
    api "androidx.localbroadcastmanager:localbroadcastmanager:1.0.0"
  ...
}
```

### Initialize SDK

The initialization of the SDK needs to be performed in the custom `application` , and the initialization method：is called

```java
RsVrSdk.init(this, new VrCallBack())
```

Required parameters appId and appSecretary are required.

```java
public class App extends Application {

  @Override
  public void onCreate() {
    super.onCreate();
    //Set debug mode
    RsVrSdk.setDebug(true);
    // Initialize VR configuration
    initVr();
  }

  // Initialize VR configuration
  private void initVr() {
        RsVrSdk.init(this, new RsVrCallBack() {
            // App ID, used to pass to the server
            @Override
            public RsAppInfo appInfo() {
                return new RsAppInfo() {
                    // When accessing, please contact Realsee to obtain the official value (****required****), test available 1016
                    @Override
                    public String appId() {
                        return "1016";
                    }
                    // Please contact Realsee to obtain the official value (****required****) for formal access, 123123 is available for testing
                    @Override
                    public String appSecret() {
                        return "123123";
                    }
                    // Can be used as the app identifier of the application (****required****)
                    @Override
                    public String scheme() {
                        return "realsee";
                    }
                    // Can use the form of schema+version number Return, convenient for subsequent operations related to version (****required****)
                    @Override
                    public String userAgent() {
                        return "realsee/2.45.0";
                    }
                };
            }
        } );
}
```

### Open VR Page

after initialization finished, by calling：

```java
RsVrSdk.openVr (this, vrEntity)
```

Open VR link

```java
String url = "http://open.realsee.com/xxxxx"
RsVrEntity vrEntity = new RsVrEntity(url);
RsVrSdk.openVr(this, vrEntity);
```

### obfuscate configuration

After introducing SDK, pack apk requires attention to obfuscate configurations, refer to **progurad-rules.pro** profile:

```properties title="progurad-rules.pro"
#============================ Tencent Cloud Trtc start==================== =====
-keep class com.tencent.** {*;}
#=============================Rxjava start= =========================
-keep class rx.** {*;}
-keep class jp.co.cyberagent.** {*; }
# wasabeef. blurry glide picasso
-keep class jp. wasabeef.** {*;}
#============================ Retrofit start===========================
-keep class com.squareup.** {*;}
-keep class okhttp3.** {*;}
-keep class okio.** {*;}
-keep class retrofit2.** {*;}
#======================= ====glide start===========================
-keep public class * implements com.bumptech.glide.module.GlideModule
-keep public class * extends com.bumptech.glide.AppGlideModule
-keep public enum com.bumptech.glide.load.resource.bitmap.ImageHeaderParser$** {
**[] $VALUES;
public *;
}
-keep class com.bumptech.glide.** {*;}
#==========================vrsdk start==========================
-keep class com.rushi.android.vrsdk.** {*;}
-keep class com.lianjia.common.vr.** {*;}
-keep interface com.lianjia.common.vr.** {*;}
```

Complete integration of RsVrdk SDK basic functionality from here

## Extended support

### See with

:::caution
Please note that using VR belt viewing, you need to download the version of SDK package
:::

VR belt need to use TRTC [TRTC](https://cloud.tencent.com/document/product/647/32689)voice service. If the app is not integrated this service you need to add a dependency on`build.gradle`

```groovy
dependencies {
    ...
    // See audio
    api "com.tencent.liteav:LiteAVSDK_Professional:8.4.9947"
  	...
}
```

### Share

RsVrSdk SDK supports calling micromessaging for sessions, friends, copying links; according to call priority, shared implementations support three ways：

#### Fully customized

Shared implementation is fully implemented by app, SDK provides only channels for shared data transmission. Complete by implementing methods：

```java
// Initialize VR configuration and callback
RsVrSdk.init(this, new RsVrCallBack() {
  @Override
  public RsAppInfo appInfo() {
    return new RsAppInfo() {
      ...
        /**
        * Fully customized sharing Implementation
        * @param context context
        * @param shareJson shared entity json passed from the H5 side
        * @return returns true to represent complete customization, the default is false
        */
        @Override
        public boolean shareWithParam(Context context, String shareJson) {
        	Log.e(TAG,"shareWithParam shareJson: "+shareJson);
        	return true;
      	}
      ...
    };
  }
```

#### Partial Customization

The shared popup is implemented by SDK, when the items in the popup are clicked, pass the data to the app implementation

```java
// Initialize VR configuration and callback
RsVrSdk.init(this, new RsVrCallBack() {
  @Override
  public RsAppInfo appInfo() {
    return new RsAppInfo() {
      ...
        /**
        * Partial custom sharing Part of the implementation, receiving the callback when clicking to share a specific item
        * @param shareData The sharing entity passed from the H5 side
        * @return returns true to represent part of the customization, the default is false
        */
        @Override
        public boolean onShareItemClick(RsBaseShareModel shareData) {
          // It can be converted to the object needed by the App through the convertToShareModel of the shareData object, and the input parameter is the class of the model
          AppWxMiNiProgramModel model = shareData.convertToShareModel(AppWxMiNiProgramModel.class);
          Log.e(TAG,"onShareWithShareType model: "+model);
          return true;
        }
      ...
    };
}
```

#### Share with VRSDK

1. import Micromessage-Sharing SDK：

```groovy
dependencies are only available
    ...
    // Share (microletter)
    api "com.tencent.mm.opensdk:wechat-sdk-android-without-mta:6.6.4"
    api "androidx.appcompat:appcompat:1.0.0"
  	...
}
```

2. Add MicroMessage Share `key`：

```java
// Initialize VR configuration and callback
RsVrSdk.init(this, new RsVrCallBack() {
  @Override
  public RsAppInfo appInfo() {
    return new RsAppInfo() {
      ...
        // Keys required for WeChat sharing
        @Override
        public String wxShareKey() {
        	return "";
      }
      ...
    };
}
```

### Custom Loading

The SDK supports the operator to customize the Loading Background and Logo on the VR page.

When constructing `RsVrEntity` , customize as follows：

```java
String url = "http://open-rushivr.cn/xxxxx"
String coverUrl = "http://xxxcdn.com/loading.png";
String logoUrl = "http://xxxcdn.com/logo.png";

RsVrEntity vrEntity = new RsVrEntity(url)// VR link to open
  .setCoverUrl(coverUrl) // Custom Loading Page Background Link without setting default background
  .setLogoUrl(logoUrl) // Custom Loading page by default logo, recommend specification：wide 306, high 111, resolution 72, background translation
  .setLoadingType(RsLoadingType.LOADING_NULL) // Custom loadingtype (LOADING_NUL: no loading)
  .setHideLoadingProgress(true) // Set if loading

RsVrSdk.openVr(this, vrEntity);
```

### Page Jump

Jump inside page, H5 moves back to Apps by passing routerUrl

```java
// Initialize VR configuration and callback
RsVrSdk.init(this, new RsVrCallBack() {
  @Override
  public RsAppInfo appInfo() {
    return new RsAppInfo() {
      ...
        /**
        * Jump within the page Turn, H5 calls back to the App side by passing routerUrl
        * @param context context context
        * @param routerUrl jump protocol url
        */
        @Override
        public void onActionRouter(Context context, String routerUrl) {
        	Log.e(TAG,"onActionRouter routerUrl: "+routerUrl);
      	}
      ...
    };
  }
```

###

### Custom Protocol

#### `callAndBackfeed`

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
import JSBridge from "@realsee/jsbridge-x";

const jsBridge = new JSBridge();
jsBridge.callAndBackfeed("custom/showQrCode?url=http%3A%2F%2Fwww.realsee.com");
```

App side：

```java
// Initialize VR configuration and callback
RsVrSdk.init(this, new RsVrCallBack() {
  ...
  // An H5-defined operation with a callback is called to the App side, and the App side can pass RsFinishBlock after processing Result returns
  @Override
  public void actionUrlWithFinishBlock(Context context, String actionUrl, RsFinishBlock block){
        // parse actionUrl
     Uri uri = Uri.parse(actionUrl);
     if (TextUtils.equals(uri.getPath(),"/custom/showQrCode")){
       // Get the bridge parameter
       String qrUrl = uri.getQueryParameter("url");
       // The example is to jump to another page showing the QR code
       Intent intent = new Intent(context,ResultActivity.class);
       intent.putExtra("qrUrl",qrUrl);
       context.startActivity(intent);
       block.onFinished(OK);
     }
  }
    ...
});
```

#### `callAndListen`

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
import JSBridge from "@realsee/jsbridge-x";

const jsBridge = new JSBridge();
jsBridge.callAndListen("custom/listenWebViewState", (newState) => {
  //listener client status changed
});
```

App side：

```java
// Initialize VR configuration and callback
RsVrSdk.init(this, new RsVrCallBack() {
  ...
  // An H5-defined operation with a callback is called to the App side, and the App side can pass RsFinishBlock after monitoring and processing Return the result with the change
  @Override
  public void actionUrlWithFinishBlock(Context context, String actionUrl, RsFinishBlock block){
        // parse actionUrl
     Uri uri = Uri.parse(actionUrl);
     if (TextUtils.equals(uri.getPath(),"/custom/listenWebViewState")){
         // Callback state starts
       block.onFinished(CREATE);
       ......
         // Callback state pauses
       block.onFinished(PAUSE);
			 ......
       // 回调状态 停止
       block.onFinished(STOP);
     }
  }
	...
});
```
