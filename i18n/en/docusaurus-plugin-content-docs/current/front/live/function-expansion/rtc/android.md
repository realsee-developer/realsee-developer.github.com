---
title: Android Voice Integration
---

:::tip hint
Android voice integrated documents only for Android client developers.There is no need for additional treatment by developers on other ends and there is natural support for multiple-end audio belts as long as the voices of all sides are secured.
:::

::caution  
Before you start, make sure you have integrated `Android SDK`, and if you have not integrated `Android SDK`please jump to **[Android SDK integration](../../../../webview/app/Android.md)** documentation for integration.
:::

**The SDK uses Tencent Voice (Trtc) to realize voice synchronization during the process of watching with video. To use the video with video function, the following steps are required：**

## Dependencies added

To avoid version conflicts, the SDK does not merge the Tencent audio library into aar, so you need to introduce it separately and modify **build.gradle** files to add dependencies

```groovy title="build.gradle"
dependencies {$
    ...
    // Voice (Tencapsule cloud)
    api "com.tencent.liteav:LiteAVSDK_Professional:8.4.9947"
    ...
}
```

## Login Validation

With a need to verify user login status, the SDK needs to get the current user login token to verify validity, the validation results are not logged in or the login information is invalid, it will move the app to login, and the SDK will log back in the form of a callback interface.

```java
RsVrSdk.init(this, new RsVrCallBack() {
  @Override
  public RsAppInfo appInfo() {
    return new RsAppInfo() {
      ...
    };
  }

  // return login token
  @Override
  public String accessToken() {
    return Utils.getAccessToken();
  }

  // Return user id
  @Override
  public String getUserId() {
    return Utils.getUserId();
  }

  // Return user name
  @Override
  public String getUserName() {
    return Utils.getUserName();
  }

  // If the login token fails the validation, jump to App login
  @Override
  public void actionLogin(Activity activity, int requestCode) {
    Intent intent = new Intent(activity, GetUserIdActivity.class);
    activity.startActivityForResult(intent, requestCode);
  }
});
```
