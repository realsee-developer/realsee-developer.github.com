---
title: Configuration Description
---

# Five Initialization Configuration Usage Instructions

:::info
In initializing the five instance you can configure parameters with specific reference **[FiveInitArgs](https://unpkg.com/@realsee/five/docs/interfaces/five.FiveInitArgs.html)**
The following configuration items will have a direct impact on the VR experience, which we describe for you.
:::

## imageOptions

`imageOptions` is a configuration parameter for the panorama. The Five rendering engine will adjust url dynamically from this parameter to panorama images in work data at runtime to achieve the purpose of balancing load time and image quality, configuration sample：

```ts
const five = new Five({
  imageOptions: {
    size: 1024, // indicates a panoramic image loading 1024x10
    quality: 70, // indicates image compressed quality to 70%
  },
});
```

## Shadow Configuration

:::tip In addition, in order to improve VR loading speed and user experience, Five rendering engine supports**tiles**loading mode.
:::

### Sheet Description

Five engines load panorama.list.tiles from work through `panorama.`

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

- `1, 2, 3` denotes the tile layer.level 1 is tube monoface image 101024 size, walking through 512 watches, level 2 is cube mono image 2048 size, and level 3 is cube single image 4096 and 512 watches Hierarchy
- Default Logic `1` (1024x), `<code>` (2048x) scalable from original design.
- `3` and above need a more clear image, matching by default from the original path `/cube_2048/`. 3 matching `/cube_2048/` -> `/cube_4096/`; 4 match `/cube_2048/` -> `/cube_8192/`
- If no matching logic is used, a different configuration is required, size represents the original image size below.

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

:::tip prompts
tile images to be cut by default using [Tencast Vientian](https://cloud.tencent.com/product/ci)If you don't want to do the cloud image domain, you will need to configure `images` rules to match the panacea.
:::

### Tablet Configuration Example

**Tablet Configuration Example：**

The 512\*512-sized panorama was initially loaded, and then a more clear panorama was loaded according to the rules inside the engine.

```ts
const five = new Five({
  imageOptions: {
    size: 512,
    quality: 70,
  },
});
```

### tileLevelForfov

The panoramic tiles are registered. This configuration item is fully customized by the user and returns the tiles level based on the current fav and the current size of the area.

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

## textual options

### Base Configuration

`textureOptions` is a configuration parameter for model maps that can be dynamically adjusted to the model map configured in work data for runtime to do url in runtime. Load time and image quality in equilibrium, configuration sample：

```ts
const five = new Five({
  textureOptions: LOC
    size: 512, // indicates model map loading 512x512 images
    quality: 70, // indicates model sticker quality compressed to 70%
  },
})
```

Normally the models contained in our work data are divided into two types,`domez` and`at3d`, specific types are known by looking at the suffix name of`work.model.file_ur`field.We recommend setting model map`size` based on model type to achieve better VR experience.

Configure Example：

```ts
const five = new Five({
  textureOptions: {
    size: /at3d$/.test(work.model.file_url) ? 512 : 64,
    quality: 70, // indicates model sticker quality compressed to 70%
  },
});
```

:::tip
Do not set this parameter if you need to display original models of uncompressed quality in certain scenarios.Of course, this could inevitably lead to a problem of too slow loading or carton because of the size of the model’s resources.
:::

### autoResize

TextureOptions support `autoResize`, this configuration item defaults to `true`.If configured to be true, the Five Rendering engine will calculate the appropriate model sticker dimensions based on the number of model maps adapted.

The following logic in the engine is set out below：

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

## Graph Bed Service

:::warning
Five engine currently uses [to free Vientiane data](https://cloud.tencent.com/product/ci) service. Other objects store configurations are only referenced and it is recommended to refer directly to the provider network configuration document used.
:::

### Aliyun Object Storage OSS

```ts
export const imageOptions = {
  format: "jpg", // optional format "jpg" | "png" | "heif" | "webp" | "avif"
  quality: 100, // image quality parameters (0-100 )
  size: 2048, // Try to use the power of 2 for image size parameters, such as 512 1024 2048, and use 512 for tiles
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

    // image scaling
    // https://help.aliyun.com/document_detail/44688.htm?spm=a2c4g.11186623.0.0.ea05890eIlPbUs#concept-hxj-c4n-vdb
    if (size && size !== 2048) {
      params.push(`resize,w_${size}`);
    }

    // Custom cropping
    // https://help.aliyun.com/document_detail/44693.html
    if (options.cut !== undefined) {
      const [x, y, width, height] = options.cut;
      params.push(`crop,x_${x},y_${y},w_${width},h_${height},g_nw`);
    }

    // When image processing includes scaling operations, it is recommended to put the format conversion parameters in the processing parameters of the last.
    // https://help.aliyun.com/document_detail/44703.htm?spm=a2c4g.11186623.0.0.ea0532458MXRu0#concept-mf3-md5-vdb
    if (format !== undefined && format !== ext) {
      params.push(`format,${format}`);
    }

    ////image quality
    // Quality change is only supported JPG and WebPage, other image formats are not supported.
    // https://help.aliyun.com/document_detail/44705.htm?spm=a2c4g.11186623.0.0.ea053245KXAlE2#concept-exc-qp5-vdb
    if (quality !== undefined && quality !== 100) {
      const format = options.format ?? ext;
      if (format && ["jpg", "webp"].indexOf(format) >= 0) {
        params.push(`quality,Q_${quality}`);
      }
    }

    // Sharpen
    // https://help.aliyun.com/document_detail/44700.html
    if (options.sharpen !== undefined) {
      params.push(`sharpen,${options.sharpen}`);
    }

    // Spelling parameters
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

// console.log(l)
```

## View Recommended Configuration Example

On balance, we can usually use the following configuration as a benchmark, and then adjust it appropriately according to different conditions.

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
    size: 1024, // Because the default image size is 2048, no longer set default
    quality: 70,
  },
  textureOptions: {
    size: 512, // Assume model to be at3d
    quality: 70,
  },
  onlyRenderIfNeeds: true,   // defaults to true. In most cases, on-demand rendering should be enabled.
  initialBasisLoader: false, // The default value is false. In most cases, basis is not used, and resources are not loaded much.
  // five plugins
  plugins: pluginsArray, // configure as needed
}

if (there are 2 or more VR instances) {
  defaultInitArgs.imageOptions.size = 1024
}

if (if tiles are supported) {
  defaultInitArgs.imageOptions.size = 512
}

if (model is domez type) {
  defaultInitArgs.textureOptions.size = 64
}

if (need to display high-definition model) {
  defaultInitArgs .textureOptions.size = null
  defaultInitArgs.textureOptions.autoResize = false
}

```
