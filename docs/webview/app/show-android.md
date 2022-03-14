---
title: Android 端展示 SDK 集成
---

## 环境要求

- 最低兼容 Android 5.0（SDK API Level 21），建议使用 Android 8.0 （SDK API Level 26）及以上版本。
- Android Studio 3.5 及以上版本。
- App 要求 Android 5.0 及以上设备。


## 申请SDK接入密钥

:::info
如果您还没有申请过 ak/sk ，请向开发者中心申请接入密钥，包含 **app_id** 和 **app_secret** 。
:::

## 集成步骤

### 1、添加 VR 依赖

在主 module 中添加 **vrsdk** 文件夹，将 **vrsdk_-{版本号}.aar** 放入其中，以本地aar的形式引入工程中。

**例**：更改 build.gradle:

```groovy title="build.gradle"
dependencies {
  ...
  implementation fileTree(dir: 'vrsdk', include: ['*.aar'])
  ...
}
```

### 2、添加三方依赖
**vrsdk** 需要依赖一些三方库，依赖如下，需要添加至 build.gradle。

**例**:

```groovy title="build.gradle"
dependencies {
  ...
    // 基础组件
    api "androidx.recyclerview:recyclerview:1.1.0"
    api "androidx.fragment:fragment:1.2.4"
    // 网络、数据解析
    api "com.squareup.okhttp3:okhttp:3.7.0"
    api "com.squareup.retrofit2:retrofit:2.1.0"
    api "io.reactivex:rxjava:1.2.9"
    api "com.google.code.gson:gson:2.7"
    api "io.reactivex:rxandroid:1.2.1"
    // 图片
    api "com.github.bumptech.glide:glide:4.8.0"
    // 本地通知
    api "androidx.localbroadcastmanager:localbroadcastmanager:1.0.0"
  ...
}
```


### 3、初始化 SDK

SDK的初始化需要在自定义的 application 中执行，调用初始化方法

```java
RsVrSdk.init(this, new VrCallBack())
```

需要提供必需参数appId及appSecret。

**例**：

```java
public class App extends Application {

  @Override
  public void onCreate() {
    super.onCreate();
    //设置调试模式
    RsVrSdk.setDebug(true);
    // 初始化VR配置
    initVr();
  }
  
  // 初始化VR配置
  private void initVr() {
        RsVrSdk.init(this, new RsVrCallBack() {
            // App标识，用于传递给服务端
            @Override
            public RsAppInfo appInfo() {
                return new RsAppInfo() {
                    // 接入时请联系如视获取正式值（****必填****），测试可用 1016
                    @Override
                    public String appId() {
                        return "1016";
                    }

                    // 注意正式接入时请联系如视获取正式值（****必填****）,测试可用 123123
                    @Override
                    public String appSecret() {
                        return "123123";
                    }

										// 可作为应用的app标识使用（****必填****）
                    @Override
                    public String scheme() {
                        return "beike";
                    }

                    // 可使用schema+版本号的形式返回，方便后续涉及版本的一些操作（****必填****）
                    @Override
                    public String userAgent() {
                        return "beike/2.45.0";
                    }
                };
              // App需要知晓VR退出的事件时，可以监听这个方法（****可选****）
              @Override
              public void onExitVr() {
                  super.onExitVr();
              }
            }
        });
    }
```


### 4、打开 VR

初始化完成以后，通过调用

```java
RsVrSdk.openVr(this,vrEntity)
```

打开VR链接。

**例**：

```java
// 要打开的VR链接
String url = "http://open-rushivr.cn/xxxxx"
RsVrEntity vrEntity = new RsVrEntity(url);
RsVrSdk.openVr(this, vrEntity);
```

### 5、混淆配置

引入sdk后，打包apk里需要注意混淆配置，请参照下面 **progurad-rules.pro** 配置文件

```properties title="progurad-rules.pro"
#==========================腾讯云Trtc start========================
-keep class com.tencent.** {*;}
#==========================Rxjava start========================
-keep class rx.** {*;}
-keep class jp.co.cyberagent.** {*;}
# wasabeef.blurry glide picasso
-keep class jp.wasabeef.** {*;}
#==========================Retrofit start========================
-keep class com.squareup.** {*;}
-keep class okhttp3.** {*;}
-keep class okio.** {*;}
-keep class retrofit2.** {*;}
#==========================glide start========================
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

:::info
自此，Android SDK 基础版完成集成。
:::


## 微信分享支持

SDK 支持调用微信分享到小程序、复制链接功能，要使用微信分享功能，需要执行以下操作：

### 1、引入微信分享SDK

```groovy
dependencies {
    ...
    // 分享（微信）
    api "com.tencent.mm.opensdk:wechat-sdk-android-without-mta:6.6.4"
    api "androidx.appcompat:appcompat:1.0.0"
  	...
}
```

### 2、添加微信分享 key

```java
// 初始化VR配置及回调
RsVrSdk.init(this, new RsVrCallBack() {
  @Override
  public RsAppInfo appInfo() {
    return new RsAppInfo() {
      ...
        // 微信分享所需要的key
        @Override
        public String wxShareKey() {
        	return "";
      }
      ...
    };
  }
```

### 3、特殊说明

:::caution
如果您使用的是基础版本 SDK ，将不包含 VR 分享功能，您可以通过自定义分享逻辑增加分享功能。
:::

```java
// 初始化VR配置及回调
RsVrSdk.init(this, new RsVrCallBack() {
	...
  // 处理分享逻辑
  @Override
  public void shareWithParam(Context context, String shareJson) {
    
  }
	...
});
```

## 自定义支持

SDK提供了一些接入方使用时的自定义功能，完成一些业务方特定业务功能

### 1、自定义 loading

> 自定义打开vr前的loading：支持业务方自定义打开VR前的loading背景图及logo

构造RsVrEntity时自定义如下：

```java
String url = "http://open-rushivr.cn/xxxxx"
String coverUrl = "http://xxxcdn.com/loading.png";
String logoUrl = "http://xxxcdn.com/logo.png";

RsVrEntity vrEntity = new RsVrEntity(url) // 要打开的VR链接
.setCoverUrl(coverUrl) // 自定义loading页背景图链接，不设置使用默认背景
.setLogoUrl(logoUrl); // 自定义loading页默认的logo，不设置使用默认logo（建议规格：宽306，高111，分辨率72，背景透明）
.setLoadingType(RsLoadingType.LOADING_NULL); // 自定义loading类型

RsVrSdk.openVr(this, vrEntity);
```

### 2、自定义交互1

> 发送 `scheme` 信息给客户端，客户端收到信息后会立马返回给前端

H5侧：通过HybridBridgeLJ对象的`callAndBackfeed()`方法调用到App端

入参：

​	 actionUrl：具体的某个bridge

​	 functionName：App端执行完某个操作后回调给H5侧的方法

```javascript
//例：定义类似：beike://common/showQrCode?url=http%3A%2F%2Fwww.baidu.com 这样的Bridge
var showQrCode = 'lianjiabeike://common/showQrCode?url=http%3A%2F%2Fwww.baidu.com'
var back = function(result){
  alert(result)
}
HybridBridgeLJ.callAndBackfeed("{'actionUrl':'"+(showQrCode)+"','functionName':'back'}")
```

App侧：

```java
// 初始化VR配置及回调
RsVrSdk.init(this, new RsVrCallBack() {
  ...
  // H5自定义的带回调的某个操作，调用到App端，App端处理后可通过RsFinishBlock将结果返回
  @Override
  public void actionUrlWithFinishBlock(Context context, String actionUrl, RsFinishBlock block){
		// 解析actionUrl
     Uri uri = Uri.parse(actionUrl);
     if (TextUtils.equals(uri.getPath(),"/showQrCode")){
       // 获取bridge参数
       String qrUrl = uri.getQueryParameter("url");
       // 示例为跳转到另一个展示二维码的页
       Intent intent = new Intent(context,ResultActivity.class);
       intent.putExtra("qrUrl",qrUrl);
       context.startActivity(intent);
       block.onFinished(OK);
     }
  }
	...
});
```

### 3、自定义交互2

> 发送 `scheme` 信息给客户端，客户端会监听相关状态的变化，当相关状态发生后变更后会立马通过回调的方式反馈给前端。

与`callAndBackfeed` 的区别是：`callAndBackfeed()` 是一次行为，`callAndListen()` 是监听行为

H5侧：通过HybridBridgeLJ对象的`callAndListen()`方法调用到App端

入参：

​	 actionUrl：具体的某个bridge

​	 functionName：App端执行完某个操作后回调给H5侧的方法

```javascript
//例：定义类似：beike://common/listenWebViewState 这样的Bridge
var listenWebViewState = 'lianjiabeike://common/listenWebViewState'
var back = function(result){
  alert(result)
}
HybridBridgeLJ.callAndListen("{'actionUrl':'"+(listenWebViewState)+"','functionName':'back'}")
```


App侧：

```java
// 初始化VR配置及回调
RsVrSdk.init(this, new RsVrCallBack() {
  ...
  // H5自定义的带回调的某个操作，调用到App端，App端监听处理后可通过RsFinishBlock将结果随变化返回
  @Override
  public void actionUrlWithFinishBlock(Context context, String actionUrl, RsFinishBlock block){
		// 解析actionUrl
     Uri uri = Uri.parse(actionUrl);
     if (TextUtils.equals(uri.getPath(),"/listenWebViewState")){
   		 // 回调状态 开始
       block.onFinished(CREATE);
       ......
   		 // 回调状态 暂停
       block.onFinished(PAUSE);
			 ......
       // 回调状态 停止
       block.onFinished(STOP);
     }
  }
	...
});
```


## API 概览

[点击查看详细API说明。](https://developers.realsee.com/docs/docs/live/client/container/android/javadoc/)

