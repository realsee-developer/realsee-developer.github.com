--- 
title: Android 端
---

:::tip 提示
本文档面向 **Android 开发人员**，后面的描述中我们假设您已经具备 Android 开发基础知识并安装 Android Studio 等相关开发环境。
:::

:::caution
本文档尚未完成，内容仅供参考。
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
	  <td><a target="_blank">待添加</a></td>
    <td><a target="_blank">待添加</a></td>
    <td>约1.2M</td>
	</tr>
  <tr align="center">
	  <td rowspan="1">带看版本</td>
	  <td><a target="_blank">待添加</a></td>
    <td><a target="_blank">待添加</a></td>
    <td>约10M</td>
   </tr>
</table>


## 环境要求

- 最低兼容 Android 5.0（SDK API Level 21），建议使用 Android 8.0 （SDK API Level 26）及以上版本。
- Android Studio 3.5 及以上版本。
- App 要求 Android 5.0 及以上设备。

### 申请SDK接入密钥

:::caution
请向开发者中心申请接入密钥，包含 `app_id` 和 `app_secret`。
:::

## 集成步骤

### 引入 SDK

在主 `module` 中添加 **vrwebview** 文件夹，将 **vrwebview_-{版本号}.aar** 放入其中，以本地 `aar` 的形式引入工程中。

更改 build.gradle:

```groovy title="build.gradle"
dependencies {
  ...
  implementation fileTree(dir: 'vrsdk', include: ['*.aar'])
  ...
}
```

### 添加三方依赖

需要将一些第三方库依赖添加至 `build.gradle`：

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


### 初始化 SDK

SDK的初始化需要在自定义的 `application` 中执行，调用初始化方法：

```java
VRWebView.init(this, new VrCallBack())
```

需要提供必需参数appId及appSecret。


```java
public class App extends Application {

  @Override
  public void onCreate() {
    super.onCreate();
    //设置调试模式
    VRWebView.setDebug(true);
    // 初始化VR配置
    initVr();
  }
  
  // 初始化VR配置
  private void initVr() {
        VRWebView.init(this, new RsVrCallBack() {
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
                        return "realsee";
                    }

                    // 可使用schema+版本号的形式返回，方便后续涉及版本的一些操作（****必填****）
                    @Override
                    public String userAgent() {
                        return "realsee/2.45.0";
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


### 打开 VR 页面

初始化完成以后，通过调用：

```java
VRWebView.openVr(this, vrEntity)
```

打开VR链接。

```java
// 要打开的VR链接
String url = "http://open.realsee.com/xxxxx"
RsVrEntity vrEntity = new RsVrEntity(url);
VRWebView.openVr(this, vrEntity);
```

### 混淆配置

引入 SDK 后，打包 apk 里需要注意混淆配置，请参照下面 **progurad-rules.pro** 配置文件:

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

自此，Android SDK 基础版完成集成。


## 自定义协议

### 微信分享

VRWebView SDK 支持调用微信分享到小程序、复制链接等功能，要使用微信分享功能，需要执行以下操作：

引入微信分享 SDK：

```groovy
dependencies {
    ...
    // 分享（微信）
    api "com.tencent.mm.opensdk:wechat-sdk-android-without-mta:6.6.4"
    api "androidx.appcompat:appcompat:1.0.0"
  	...
}
```

添加微信分享 `key`：

```java
// 初始化VR配置及回调
VRWebView.init(this, new RsVrCallBack() {
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

:::caution 特殊说明
如果您使用的是基础版本 SDK ，将不包含 VR 分享功能，您可以通过自定义分享逻辑增加分享功能。
:::

```java
// 初始化VR配置及回调
VRWebView.init(this, new RsVrCallBack() {
	...
  // 处理分享逻辑
  @Override
  public void shareWithParam(Context context, String shareJson) {
    
  }
	...
});
```

### 自定义 Loading


SDK 支持业务方自定义打开 VR 页面前的 Loading 背景图及 Logo。

构造 `RsVrEntity` 时自定义如下：

```java
String url = "http://open-rushivr.cn/xxxxx"
String coverUrl = "http://xxxcdn.com/loading.png";
String logoUrl = "http://xxxcdn.com/logo.png";

RsVrEntity vrEntity = new RsVrEntity(url) // 要打开的VR链接
  .setCoverUrl(coverUrl) // 自定义Loading页背景图链接，不设置使用默认背景
  .setLogoUrl(logoUrl); // 自定义Loading页默认的Logo，建议规格：宽306，高111，分辨率72，背景透明
  .setLoadingType(RsLoadingType.LOADING_NULL); // 自定义loading类型

VRWebView.openVr(this, vrEntity);
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

```java
// 初始化VR配置及回调
VRWebView.init(this, new RsVrCallBack() {
  ...
  // H5自定义的带回调的某个操作，调用到App端，App端处理后可通过RsFinishBlock将结果返回
  @Override
  public void actionUrlWithFinishBlock(Context context, String actionUrl, RsFinishBlock block){
		// 解析actionUrl
     Uri uri = Uri.parse(actionUrl);
     if (TextUtils.equals(uri.getPath(),"/custom/showQrCode")){
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


```java
// 初始化VR配置及回调
VRWebView.init(this, new RsVrCallBack() {
  ...
  // H5自定义的带回调的某个操作，调用到App端，App端监听处理后可通过RsFinishBlock将结果随变化返回
  @Override
  public void actionUrlWithFinishBlock(Context context, String actionUrl, RsFinishBlock block){
		// 解析actionUrl
     Uri uri = Uri.parse(actionUrl);
     if (TextUtils.equals(uri.getPath(),"/custom/listenWebViewState")){
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