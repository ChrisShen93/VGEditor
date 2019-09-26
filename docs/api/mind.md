# Mind

思维导图

## 使用说明

```html
<template>
  <v-g-editor>
    <mind/>
  </v-g-editor>
</template>
<script>
import VGEditor, { mind } from 'vg-editor'
export default {
  components: { VGEditor, mind }
}
</script>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| data | 初始数据 | `object` | - |
| graph | 图配置项，参考 [G6 Graph API](https://antv.alipay.com/zh-cn/index.html) | `object` | - |
| shortcut | 快捷键配置，[内置命令](./notFinished.md#内置命令) | [`object`](#Shortcut) | - |

### Shortcut

示例：

```html
<template>
  <v-g-editor>
    <mind :shortcut="{ zoomIn: true, zoomOut: false }"/>
  </v-g-editor>
</template>
<script>
import VGEditor, { mind } from 'vg-editor'
export default {
  components: { VGEditor, mind }
}
</script>
```

## Events

请移步至 [PageEvents](./pageEvents.zh-CN.md) 查看详情
