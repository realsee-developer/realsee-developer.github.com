---
title: Android 语音集成
---

:::tip 提示
Android 语音的集成文档仅针对 Android 客户端开发人员。其他端开发人员无需做额外处理，只要保证各端语音跑通，则天然支持多端语音带看。
:::

:::caution
开始前请确保您已经集成了 `Android SDK`，若您还没有集成 `Android SDK`，请跳转至 **[Android SDK 集成](../../../../webview/app/Android.md)** 文档，进行集成。
:::

**SDK 使用腾讯语音（Trtc）实现了带看过程中的语音同步，使用带看功能需进行以下操作步骤：**

## 依赖添加

为避免版本冲突，SDK 并没有将腾讯语音库合入 aar 中，因此需要单独引入腾讯语音库，修改 **build.gradle** 文件，添加依赖

```groovy title="build.gradle"
dependencies {
    ...
    // 语音（腾讯云）
    api "com.tencent.liteav:LiteAVSDK_Professional:8.4.9947"
  	...
}
```

## 登录校验

带看需要校验用户登录状态，SDK 需要获取当前用户登录 Token 去验证有效性，验证结果为用户未登录或者登录信息无效的情况时，会主动跳转 App 登录，SDK 通过回调接口的形式回调 App 登录。

```java
RsVrSdk.init(this, new RsVrCallBack() {
  @Override
  public RsAppInfo appInfo() {
    return new RsAppInfo() {
      ...
    };
  }

  // 返回登录token
  @Override
  public String accessToken() {
    return Utils.getAccessToken();
  }

  // 返回用户id
  @Override
  public String getUserId() {
    return Utils.getUserId();
  }

  // 返回用户名
  @Override
  public String getUserName() {
    return Utils.getUserName();
  }

  // 登录token校验不过时，跳转App登录
  @Override
  public void actionLogin(Activity activity, int requestCode) {
    Intent intent = new Intent(activity, GetUserIdActivity.class);
    activity.startActivityForResult(intent, requestCode);
  }
});
```
