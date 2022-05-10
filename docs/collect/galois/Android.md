---
title: Android 端
---

:::tip 提示
本文档面向 **Android 开发人员**，后面的描述中我们假设您已经具备 Android 开发基础知识并安装 Android Studio 等相关开发环境。
:::

<!-- [toc] -->

### SDK 下载

SDK分为两部分：基础SDK和拍摄模块
拍摄模块分为：相机拍、云台拍、伽罗华拍

|  类型   | SDK  | 安装包增量 |
|  ----  | ----  | ---- |
| 基础库  | `capture-base-1.0.0.aar` | 约 80M |
| 相机拍  | `capture-osc-1.0.0.aar` | 约 55M |
| 云台拍  | `capture-pan-1.0.0.aar` | 约 55M |
| 伽罗华拍  | `capture-galois-1.0.0.aar` | 约 5M |


### 环境要求
最低兼容 Android 5.0（SDK API Level 21），建议使用 Android 8.0 （SDK API Level 26）及以上版本。
Android Studio 3.5 及以上版本。
App 要求 Android 5.0 及以上设备。

### 申请 SDK 接入密钥
:::caution
请向开发者中心申请接入密钥，包含 app_id 和 app_secret。
:::

### 集成步骤
引入 SDK
在主 module 中添加 rssdk 文件夹，将按需下载好的 `aar` 放入其中，以本地 `aar` 的形式引入工程中。

更改 `build.gradle`
```groovy
dependencies {
  ...
  implementation fileTree(dir: 'rssdk', include: ['*.aar'])
  ...
}
```

#### 添加权限

```xml
 <uses-permission android:name="android.permission.INTERNET" />
 <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
 <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```
伽罗华拍摄，需要额外增加：
```xml
 <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
 <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
 <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
 <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
 <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```
<!-- 如果是云台拍，需要增加
```
    <uses-permission android:name="android.permission.BLUETOOTH" />
    <uses-permission android:name="android.permission.CAMERA" />
``` -->

#### 初始化

SDK的初始化需要在自定义的 `application` 中执行，调用初始化方法：

```java
RsCapture.init(this, object : CaptureConfig() {
            override fun appId(): String {
                return 申请的AppCode
            }

            override fun appSecret(): String {
                return 申请的AppSecret
            }

            override fun userId(): String {
                return 用户唯一标示
            }

			@WorkerThread
            override fun ticketProvider(): TicketProvider {
                return object : TicketProvider() {
                    override fun getTicket(action: Action): Ticket {
	                    //根据 action 去申请 ticket信息
                        return Ticket("test-ticket")
                    }

                }
            }

            override fun sandbox(): Boolean {
	            //是否使用沙盒环境，true: 使用，默认不使用
                return true
            }

            override fun https(): Boolean {
		        //是否开启 https, true：开启，默认开启
                return false
            }

            override fun debug(): Boolean {
	            //是否开启 debug，true：开启，默认不开启
                return true
            }

        })


```

>  `ticket` 获取可参考开发进阶部分


#### 进行拍摄
```java
RsCapture.openShoot(
            shootConfig,
            object : ProjectShootResult() {
                override fun onError(
                    projectId: String,
                    entered: Boolean,
                    captureException: CaptureException
                ) { 
                     //发生错误时回调
	                 //entered :是否已经进入了拍摄页面
	                 //captureException 可通过这个对象获取 code 和 msg
                }

                override fun onEntered(projectId: String) {
                    super.onEntered(projectId)
	                //进入项目后回调
                }

                override fun onExit(
                    projectId: String,
                    captureException: CaptureException?
                ) {
                    super.onExit(projectId, captureException)
                    //退出项目时回调
                    //captureException 如果不为空，说明退出时有异常，可通过这个对象获取 code 和 msg
                }
            })
```
> `projectId` 是已经创建好的项目的ID，如果没有，可以进行创建
> `shootConfig` 是拍摄参数

`ShootCoinfig` 创建

```java
ShootConfig.Builder()
            .projectId("项目id") //项目ID，必选
            .localProjectId("本地项目id")//本地创建的项目ID，可选，默认空
            .checkLocal(true)//如果为 true，如果进入的项目没有对应的本地数据会失败，可选，默认true
            .checkStatus(true)//如果为 true，进入项目时需要联网检查项目状态，上传中，处理中的项目不允许打开修改
            .orientation(ShootConfig.ORIENTATION_PORTRAIT)//拍摄页面方向，只有伽罗华拍生效，默认竖屏，可选
            .walking(15)//转速，单位秒，只有伽罗华拍生效，默认15秒，可选
            .build()
```

#### 项目上传监听
可监听
>上传开始
上传结束
上传进度
上传失败

```java
ProjectUploadListener projectUploadListener = new ProjectUploadListener() {
            @Override
            public void onResult(@NotNull ProjectUploadResult projectUploadResult) {
                //上传结果回调
                //获取正在上传的项目的ID
                String projectId = projectUploadResult.getProjectId();
                switch (projectUploadResult.getState()) {
                    case INIT: {
                        //上传初始化中，这个过程在进行项目上传前的准备，包括校验，压缩文件等
                    }
                    case START: {
                        //项目真正开始上传
                    }
                    case PROGRESS: {
                        //项目上传进度更新
                        //获取上传进度
                        int progress = projectUploadResult.getProgress();
                    }
                    case SUCCESS: {
                        //上传成功
                    }
                    case FAILED: {
                        //上传失败
                        //获取失败原因
                        CaptureException exception = projectUploadResult.getCaptureException();
                        int code = exception.getCode();
                        String msg = exception.getMsg();
                    }
                }
            }
        };

RsCapture.addProjectUploadListener(projectUploadListener);
```

移除监听
```java
RsCapture.removeProjectUploadListener(projectUploadListener);
```

#### 获取项目状态
```java
RsCapture.requestProjectState(projectId, new ProjectStatusCallback() {
            @Override
            public void onResult(@NotNull ProjectStatusResult projectStatusResult) {
                if (projectStatusResult.getCaptureException() != null) {
                    //项目ID
                    String projectId = projectStatusResult.getProjectId();
                    //项目状态
                    switch (projectStatusResult.getProjectStatus()) {
                        case EMPTY: {
                            //默认状态，项目只是创建好了，本地没有拍摄的数据
                        }
                        case SHOOTING: {
                            //拍摄中状态，本地存在拍摄的数据
                        }
                        case UPLOADING: {
                            //项目上传中状态
                        }
                        case UPLOAD_FAILED: {
                            //项目上传失败状态
                        }
                        case UPLOAD_SUCCESS: {
                            //项目上传成功
                        }
                    }
                } else {
                    //项目状态获取失败
                    //获取失败原因
                    CaptureException exception = projectStatusResult.getCaptureException();
                    int code = exception.getCode();
                    String msg = exception.getMsg();
                }
            }
        }, null);
```

### Ticket 更新设置

Ticket 机制，为调用SDK方法提供权限校验逻辑，调用SDK的方法：
>创建项目
删除项目
项目更名
进行拍摄
获取项目状态

SDK 都会先调用接入方实现的更新 Ticket 接口来获取新的 Ticket，然后用新的 Ticket 去执行操作（Action）

为了方便理解，如下为生产接入流程图

![Alt text](http://vrlab-public.ljcdn.com/common/file/web/f5b6eea4-1c84-41fb-9ed8-9a3ad5cb6cfc.jpg)

接入方实现更新Ticket接口：

```java
//构建初始化配置
CaptureConfig captureConfig = new CaptureConfig() {
            @NotNull
            @Override
            public TicketProvider ticketProvider() {
                return new TicketProvider() {
                    @NotNull
                    @Override
                    public Ticket getTicket(
                            @NotNull Action action) throws CaptureException {
                        //这里请求后端更新 ticket， 发生异常可以抛出CaptureException
                        //次回调运行在子线程中，可直接发送网络请求

                        Ticket ticket;
                        try {
                            ticket = getTicketFromServer(action);
                        } catch (Exception e) {
                            throw new CaptureException("发生异常了");
                        }
                        return ticket;
                    }
                };
            }

            ...
        };
//初始化SDK
RsCapture.init(context, captureConfig);
```

### SDK 日志文件

为了方便排查问题，SDK 会将一些不影响性能的日志记录到了文件中
可以通过以下方法获取日志文件
```java
//获取当天日志文件路径
String path = RsCapture.getLatestLogFilePath();
```

### 错误码

错误 `code` 可以通过 `CaptureException` 对象获取
```java
int code = captureException.getCode();
String msg = captureException.getMsg();
```








