---
title: iOS Voice Integration
---

:::tip hint
iOS voice integrated documents only for iOS client developers.There is no need for additional treatment by developers on other ends and there is natural support for multiple-end audio belts as long as the voices of all sides are secured.
:::

::caution  
Before you start, make sure you have integrated `iOS SDK`, and if you have not integrated `iOS SDK`, jump to **[iOS SDK integration](../../../../webview/app/iOS.md)** documentation.
:::


**The SDK uses Tencent Voice (Trtc) to realize voice synchronization during the process of watching with video. To use the video with video function, the following steps are required：**

## Dependencies added

Require separate introduction of Tencent Voice Library, modify **Podfile** file, add dependency

```groovy
# Voice (Tencent Yuntc)
pod 'TXLiteAVSDK_TRTC', '8.7.10102'
```

## Login Validation

A user login status needs to be checked, the SDK needs to get the current user login token to verify validity, and needs to provide a method for retrieving user's information, i.e.

```objectivec
// Returns the latest user login token
[RSVRSDKConfig shareInstance]. ccessToken = ^NSString * _Nullable.
    return [[NSUserDefaults] valueForKey:@"login_token"];
};
// Return to the latest user ID
[RSVRSDSDKConfig share]. serId = ^NSString * _Nullable
    return [[NSUserDefaults standards]valueForKey:@"login_user_id"];
};
// Return to the latest user
[RSVRSDKConfig ShareInstance]. serName = ^NSString * _Nullable
    return [[NSUserDefaults standardUserDefaults] valueForKey:@"login_user_name"];
};
```

When the validation results are not logged in or invalid login information, jump on the app login, the SDK login by setting up RSVRSDKDelegate

```objective-c
[RSVRSDKConfig shareInstance].configDelegate = self;
```

Methods to implement RSVRSDKDelegate:

```objectivec
#pagma RSVRSDKDelegate

// needs to be implemented in this proxy method to wake up login interface.
/// @param didUserLoginBlock needs to be activated when users log in, then use this block
- (void) actionLogin:(dispatch_block_t) didUserLoginBlock

    self. oginBlockAction = didUserLoginBlock;
    LoginViewControler* loginVc = [[LoginViewController alloca] init];
    [self. avigationController pushViewControler:loginVc animated:YES];
}
...
```

H5 On receipt of a successful login notification, the method of retrieving user information will be redeployed, updated information will be obtained, validated and initiated.


