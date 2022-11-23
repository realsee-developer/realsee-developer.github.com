---
title: Android
---

:::tip hint
This document is in the direction of **Android developers**, in the description that follows, we assume you already have Android basics and installed Android Studio and other related development environments.
:::

<!-- [toc] -->

### SDK Downloads

SDK split into two parts：base SDK and capture module Capture module split into：camera, cloud, gamohao

| Type         | SDK                        | Installation increment |
| ------------ | -------------------------- | ---------------------- |
| Base Library | `capture-base-1.0.0.0.aar` | About 80M              |
| Camera Beat  | `capture-osc-1.0.0.aar`    | about 55M              |
| Cloud Beat   | `capture-pan-1.0.0.aar`    | about 55M              |
| Galo Beat    | `capture-galois-1.0.0.aar` | about 5M               |

### Environmental requirements

Minimum compatibility with Android 5.0 (SDK API Lebel 21), recommended using Android 8.0 (SDK API Lebel 26) and above. Android Studio 3.5 and above. App requires Android 5.0 and above.

### Apply SDK access key

::caution  
Please apply for access keys to the Developer Center containing app_id and app_secret.
:::

### Integration step

Introduce SDK , add rssdk folder in the main module, put `aar` downloaded on demand into it, and import it into the project in the form of local `aar`.

Change `build.gradle`

```groovy
dependencies {
  ...
  implementation fileTree(dir: 'rssdk', include: ['*.aar'])
  ...
}
```

#### Add permission

```xml
 <uses-permission android:name="android.permission.INTERNET" />
 <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
 <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```

Galohua, additional extra：

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

#### Initialize

The initialization of the SDK needs to be performed in the custom `application` , and the initialization method：is called

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
                        //Apply for ticket information according to action
                        return Ticket("test-ticket")
                    }

                }
            }

            override fun sandbox(): Boolean {
                //Whether to use the sandbox environment, true: yes, default not to use
                return true
            }

            override fun https(): Boolean {
                //whether to enable https, true：to enable, default to enable
                return false
            }

            override fun debug(): Boolean {
                //whether to enable debug, true：is enabled, default is not enabled
                return true
            }

})


```

> `ticket` for reference development

#### Capture

```java
RsCapture.openShoot(
            shootConfig,
            object : ProjectShootResult() {
                override fun onError(
                    projectId: String,
                    entered: Boolean,
                    captureException: CaptureException
                ) {
                     //Callback
                     when an error occurs //entered: whether it has been Entered the shooting page
                     //captureException can get the code and msg through this object
                }

                override fun onEntered(projectId: String) {
                    super.onEntered(projectId)
                    //Callback
                after entering the project }

                override fun onExit(
                    projectId: String,
                    captureException: CaptureException?
                ) {
                    super.onExit(projectId, captureException)
                    //Callback when exiting the project
                    //captureException If it is not empty, it means that there is an exception when exiting, and you can get the code and msg
                }
})
```

> `ProjectId` is the ID of the created project. If not, you can create `shootConfig` is a photo parameter

`ShootCoinfig` created

```java
ShootConfig.Builder()
            .projectId("project id") //project ID, required
            .localProjectId("local project id")//locally created project ID, optional, default empty
            .checkLocal(true) //If true, if the entered project does not have corresponding local data, it will fail, optional, default true
            (true)//If true, you need to check the project status online when entering the project, uploading, processing The project is not allowed to open and modify
            .orientation(ShootConfig.ORIENTATION_PORTRAIT)//Shooting page orientation, only Galois shooting takes effect, default vertical screen, optional
            .walking(15)//Speed speed, unit second, only Galois shooting Take effect, default 15 seconds, optional
            .build()
```

#### Project Upload Listening

Listen

> Upload started end of upload upload failed

```java
ProjectUploadListener projectUploadListener = new ProjectUploadListener() {
            @Override
            public void onResult(@NotNull ProjectUploadResult projectUploadResult) {
                //Upload result callback
                //Get the ID of the project being uploaded
                String projectId = projectUploadResult.getProjectId();
                switch (projectUploadResult.getState()) {
                    case INIT: {
                        //During upload initialization, this process is preparing for project upload, including verification, compressed files, etc.
                    }
                    case START: {
                        //The project really starts Upload
                    }
                    case PROGRESS: {
                        //Project upload progress update
                        //Get upload progress
                        int progress = projectUploadResult.getProgress();
                    }
                    case SUCCESS: {
                        //Upload successfully
                    }
                    case FAILED: {
                        //Upload failed
                        //Get failure reason
                        CaptureException exception = projectUploadResult.getCaptureException();
                        int code = exception.getCode();
                        String msg = exception.getMsg();
                    }
                }
            }
        };

RsCapture.addProjectUploadListener(projectUploadListener);
```

Remove listening

```java
RsCapture.removeProjectUploadListener(projectUploadListener);
```

#### Gets project status

```java
RsCapture.requestProjectState(projectId, new ProjectStatusCallback() {
            @Override
            public void onResult(@NotNull ProjectStatusResult projectStatusResult) {
                if (projectStatusResult.getCaptureException() != null) {
                    //Project ID
                    String projectId = projectStatusResult.getProjectId();
                    //Project status
                    switch (projectStatusResult.getProjectStatus()) {
                        case EMPTY: {
                            //The default state, the project is just created, and there is no local shooting data
                        }
                        case SHOOTING: {
                            // Shooting status, the shooting data exists locally
                        }
                        case UPLOADING: {
                            //Project uploading status
                        }
                        case UPLOAD_FAILED: {
                            //Project uploading failed status
                        }
                        case UPLOAD_SUCCESS: {
                            //Project uploading was successful
                        }
                    }
                } else {
                    //Failed to obtain project status
                    //Reason for failed acquisition
                    CaptureException exception = projectStatusResult.getCaptureException();
                    int code = exception.getCode();
                    String msg = exception.getMsg();
                }
            }
        }, null);
```

### Ticket Update Settings

Ticket mechanism, which provides permission verification logic for calling SDK methods, calling SDK method：

> Create Project Delete Project Rename Project to take a record to get project status

The SDK will first access the updated Ticket interface to get a new Ticket and then use the new Ticket to perform the operation (Action).

For ease of understanding, the following flow chart for production

![Alt text](http://vrlab-public.ljcdn.com/common/file/web/f5b6eea4-1c84-41fb-9ed8-9a3ad5cb6cfc.jpg)

Interface update to Ticket implemented by the connector：

```java
//Build initialization configuration
CaptureConfig captureConfig = new CaptureConfig() {
            @NotNull
            @Override
            public TicketProvider ticketProvider() {
                return new TicketProvider() {
                    @NotNull
                    @Override
                    public Ticket getTicket(
                            @NotNull Action action) throws CaptureException {
                        //Request the backend to update the ticket here, if an exception occurs, CaptureException can be thrown
                        //The second callback runs in the child thread and can directly send the network request

                        Ticket ticket;
                        try {
                            ticket = getTicketFromServer(action);
                        } catch (Exception e) {
                            throw new CaptureException("An exception occurred");
                        }
                        return ticket;
                    }
                };
            }

            ...
        };
//Initialize SDK
RsCapture.init(context, captureConfig);
```

### SDK Log File

To facilitate troubleshooting, SDK will record some performance logs into the file to fetch log files by following methods

```java
//get the same log file path
String path = RsCapture.getLatestLogFilePath();
```

### Error code

Error `code` can be retrieved by `CaptureException` objects

```java
int code = captureException.getCode();
String msg = captureException.getMsg();
```
