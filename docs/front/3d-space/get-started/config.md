---
title: 配置说明
---

# Five 初始化配置使用说明

:::info
在初始化 five 实例时，可以配置的参数项具体可参考 **[FiveInitArgs](https://unpkg.com/@realsee/five/docs/interfaces/five.FiveInitArgs.html)**
，以下几个配置项将直接影响到 VR 体验，我们在此为您详细说明。
:::

## imageOptions

`imageOptions` 是全景图的配置参数，Five 渲染引擎将根据此参数对 work 数据中的全景图片在 runtime 时动态调整 url, 以达到平衡加载时间和图片质量的目的，配置示例：

```ts
const five = new Five({
  imageOptions: {
    size: 1024, // 表示全景图加载 1024x1024 的图片
    quality: 70, // 表示图片质量压缩到 70%
  },
});
```

## 瓦片配置

:::tip 此外，为提高 VR 加载速度和用户体验效果，Five 渲染引擎支持**瓦片**加载模式。
:::

### 瓦片说明

Five 引擎通过 work 中的 `panorama.list.tiles` 实现全景图瓦片加载。

```json
"panorama.list[]": {
  "index": 0,
  "right": "",
  "left": "",
  "up": "",
  "down": "",
  "front": "",
  "back": "",
  // highlight-start
  "tiles": [1, 2, 3]
    // highlight-end
},
```

- `1, 2, 3` 表示瓦片层级。level 1 为 cube 单面图片 1024 尺寸，走 512 瓦片； level 2 为 cube 单面图片 2048 尺寸，走 512 瓦片； level 3 为 cube 单面图片 4096
  尺寸，走 512 瓦片。 依次类推。
- 默认逻辑 `1` (1024x), `2` (2048x) 从 原图缩放实现。
- `3` 及以上需要更加高清的图片，默认从 原图路径的 `/cube_2048/` 中匹配。 3 则匹配 `/cube_2048/` -> `/cube_4096/`; 4 则匹配 `/cube_2048/` -> `/cube_8192/`。
- 如果不使用匹配逻辑，则需要另行配置, size 表示下方的图片原始尺寸。

```json
"panorama.list[]": {
  "index": 0,
  "right": "",
  "left": "",
  "up": "",
  "down": "",
  "front": "",
  "back": "",
  // highlight-start
  "tiles": [
    {
      "level": 1,
      "size": 4096,
      "right": "",
      "left": "",
      "up": "",
      "down": "",
      "front": "",
      "back": ""
    },
    {
      "level": 2,
      "size": 4096,
      "right": "",
      "left": "",
      "up": "",
      "down": "",
      "front": "",
      "back": ""
    }
  ]
  // highlight-end
}

```

:::tip 提示
瓦片图片的切割默认使用 [腾讯云数据万象](https://cloud.tencent.com/product/ci) 实现。如果不是腾讯云图片域名，则需要按照对应万象配置 `imageOptions` 规则。
:::

### 瓦片配置示例

**瓦片配置示例：**

初始加载 512\*512 尺寸的全景图，然后根据引擎内置的规则加载更高清的全景图。

```ts
const five = new Five({
  imageOptions: {
    size: 512,
    quality: 70,
  },
});
```

### tileLevelForFov

全景瓦片登记，此配置项由用户完全自定义，根据当前 fov 和当前绘制区域大小 viewSize 返回瓦片等级。

```ts
const five = new Five({
  imageOptions: {
    size: 512,
    quality: 70,
    panorama: {
      // highlight-start
      // tileLevelForFov?: false | ((fov: number, viewSize: Vector2) => number)
      // highlight-end
    },
  },
});
```

## textureOptions

### 基础配置

`textureOptions` 是模型贴图的配置参数，可以动态对配置在 work 数据中的模型贴图在 runtime 做 url 调整。 以平衡加载时间和图片质量，配置示例：

```ts
const five = new Five({
  textureOptions: {
    size: 512, // 表示模型贴图加载 512x512 的图片
    quality: 70, // 表示模型贴图质量压缩到 70%
  },
});
```

一般我们 work 数据里包含的模型分为两种类型，`domez` 和`at3d`，具体类型可通过查看`work.model.file_url`字段的后缀名得知。我们推荐根据模型的类型来设定模型贴图的`size` 以达到更好的 VR 体验效果。

配置示例：

```ts
const five = new Five({
  textureOptions: {
    size: /at3d$/.test(work.model.file_url) ? 512 : 64,
    quality: 70, // 表示模型贴图质量压缩到70%
  },
});
```

:::tip
如您在某些特定场景需要展示未被压缩质量的原始模型，可以不设置此参数。当然，这不可避免的可能会发生因为模型资源过大而引发加载速度过慢或者卡顿的问题。
:::

### autoResize

textureOptions 支持 `autoResize`， 此配置项默认为 `true`。如果配置为 true，Five 渲染引擎将根据模型贴图的数量自适应地计算合适的模型贴图尺寸。

引擎内置逻辑如下：

```ts
if (textureOptions.autoResize !== false) {
  if (textureLength > 96) {
    textureOptions.size = Math.min(textureOptions.size || Infinity, 100);
  } else if (textureLength > 48) {
    textureOptions.size = Math.min(textureOptions.size || Infinity, 200);
  } else if (textureLength > 24) {
    textureOptions.size = Math.min(textureOptions.size || Infinity, 400);
  } else if (textureLength > 12) {
    textureOptions.size = Math.min(textureOptions.size || Infinity, 800);
  } else {
    textureOptions.size = Math.min(textureOptions.size || Infinity, 1024);
  }
}
```

## 图床服务

:::warning
Five 引擎内部目前默认使用 [腾讯云数据万象](https://cloud.tencent.com/product/ci) 服务，其他对象存储的相关配置仅做参考，建议直接参考所使用的供应方官网配置文档。
:::

### 阿里云对象存储 OSS

```ts
export const imageOptions = {
  format: "jpg", // 格式 可选 "jpg" | "png" | "heif" | "webp" | "avif"
  quality: 100, // 图片质量参数(0-100)
  size: 2048, // 图片尺寸参数 尽量使用 2 的幂次 如 512 1024 2048，瓦片使用512
  transform: (
    source: string,
    options: {
      size?: number;
      quality?: number;
      format?: "jpg" | "png" | "heif" | "webp" | "avif";
      cut?: [number, number, number, number];
      sharpen?: number;
    }
  ) => {
    let base = source.split("?")[0];
    let ext = base.split(".").pop();

    if (ext === "jpeg") ext = "jpg";
    if (ext !== "png" && ext !== "jpg") return source;

    let suffix: string = "";

    const params: string[] = ["x-oss-process=image"];
    const { format, quality, size } = options;

    // 图片缩放
    // https://help.aliyun.com/document_detail/44688.htm?spm=a2c4g.11186623.0.0.ea05890eIlPbUs#concept-hxj-c4n-vdb
    if (size && size !== 2048) {
      params.push(`resize,w_${size}`);
    }

    // 自定义裁剪
    // https://help.aliyun.com/document_detail/44693.html
    if (options.cut !== undefined) {
      const [x, y, width, height] = options.cut;
      params.push(`crop,x_${x},y_${y},w_${width},h_${height},g_nw`);
    }

    // 图片处理包含缩放操作时，建议将格式转换参数放到处理参数的最后。
    // https://help.aliyun.com/document_detail/44703.htm?spm=a2c4g.11186623.0.0.ea0532458MXRu0#concept-mf3-md5-vdb
    if (format !== undefined && format !== ext) {
      params.push(`format,${format}`);
    }

    // 图片质量
    // 质量变换仅支持JPG和WebP，其他图片格式不支持。
    // https://help.aliyun.com/document_detail/44705.htm?spm=a2c4g.11186623.0.0.ea053245KXAlE2#concept-exc-qp5-vdb
    if (quality !== undefined && quality !== 100) {
      const format = options.format ?? ext;
      if (format && ["jpg", "webp"].indexOf(format) >= 0) {
        params.push(`quality,Q_${quality}`);
      }
    }

    // 锐化
    // https://help.aliyun.com/document_detail/44700.html
    if (options.sharpen !== undefined) {
      params.push(`sharpen,${options.sharpen}`);
    }

    // 拼接参数
    if (params.length) {
      suffix = "?" + params.join("/");
    }
    return base + suffix;
  },
};

const url = imageOptions.transform(
  "https://dts-test.bellecdn.com/806gyq3vl4Zpy97JO1/6gyq3vl4Zpy97JO1/images/cube_2048/6/bcaaac09c0edbacef756205bf6db9895/6_r.jpg",
  { quality: 70, format: "jpg", size: 1024 }
);

// console.log(url)
```

## 如视推荐配置示例

综上，我们通常可以使用以下配置作为基准，然后根据不同的条件来适当调整

```ts
const defaultInitArgs = {
  backgroundAlpha: 0,
  initWithTransition: false,
  floorplan: {
    minLatitude: 0,
    maxLatitude: Math.PI / 2,
    defaultFov: 95,
  },
  panorama: {
    minLatitude: -Math.PI / 4,
    maxLatitude: Math.PI / 4,
    defaultFov: 95,
  },
  imageOptions: {
    size: 1024, // 因为默认图片尺寸就是 2048，所以不再设置默认值
    quality: 70, // 如果有瓦片，就不要设置quality了
  },
  textureOptions: {
    size: 512, // 假设模型默认是 at3d
    quality: 70,
  },
  onlyRenderIfNeeds: true,   // 默认值为 true。 大多情况下，都是应该开启按需渲染
  initialBasisLoader: false, // 默认值为 false。 大多数情况并不使用 basis, 不多加载资源
  // five 插件
  plugins: pluginsArray, // 按需配置
}

if (有 2 个及以上 VR 实例) {
  defaultInitArgs.imageOptions.size = 1024
}

if (如果支持瓦片) {
  defaultInitArgs.imageOptions.size = 512
}

if (模型是 domez 类型) {
  defaultInitArgs.textureOptions.size = 64
}

if (需要展示高清模型) {
  defaultInitArgs.textureOptions.size = null
  defaultInitArgs.textureOptions.autoResize = false
}

```
