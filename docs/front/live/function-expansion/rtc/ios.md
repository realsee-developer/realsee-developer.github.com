---
title: iOS 语音集成
---

:::tip 提示
iOS 语音的集成文档仅针对 iOS 客户端开发人员。其他端开发人员无需做额外处理，只要保证各端语音跑通，则天然支持多端语音带看。
:::

:::caution
开始前请确保您已经集成了 `iOS 展示 SDK`，若您还没有集成 `iOS 展示 SDK`，请跳转至 **iOS 展示 SDK 集成** 文档，进行集成。
:::


**SDK 使用腾讯语音（Trtc）实现了带看过程中的语音同步，使用带看功能需进行以下操作步骤：**

## 依赖添加

需要单独引入腾讯语音库，修改 **Podfile** 文件，添加依赖

```groovy
# 语音（腾讯云Trtc）
pod 'TXLiteAVSDK_TRTC', '8.7.10102'
```

## 登录校验

带看需要校验用户登录状态，SDK 需要获取当前用户登录 Token 去验证有效性，需要提供获取用户信息的方法实现，即

```objectivec
// 返回最新的用户登录Token
[RSVRSDKConfig shareInstance].accessToken = ^NSString * _Nullable{
  	return [[NSUserDefaults standardUserDefaults] valueForKey:@"login_token"];
};
// 返回最新的用户ID
[RSVRSDKConfig shareInstance].userId = ^NSString * _Nullable{
  	return [[NSUserDefaults standardUserDefaults] valueForKey:@"login_user_id"];
};
// 返回最新的用户名
[RSVRSDKConfig shareInstance].userName = ^NSString * _Nullable{
  	return [[NSUserDefaults standardUserDefaults] valueForKey:@"login_user_name"];
};
```

验证结果为用户未登录或者登录信息无效的情况时，会主动跳转 App 登录, SDK 通过设置 RSVRSDKDelegate 的形式回调 App 登录

```objective-c
[RSVRSDKConfig shareInstance].configDelegate = self;
```

实现 RSVRSDKDelegate 的方法:

```objectivec
#pragma RSVRSDKDelegate

/// 需要在这个代理方法里面实现唤起登录界面.
/// @param didUserLoginBlock 当用户登录成功之后, 需要主动调用这个 block
- (void)actionLogin:(dispatch_block_t)didUserLoginBlock
{
    self.loginBlockAction = didUserLoginBlock;
    LoginViewController* loginVc = [[LoginViewController alloc] init];
    [self.navigationController pushViewController:loginVc animated:YES];
}
....
```

H5 在收到登录成功的通知后，会重新调用获取用户信息方法，获取更新后的信息，通过验证，发起带看。


