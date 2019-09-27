# Minimap

缩略图

## 使用说明

不指定宽高的情况下则自动适应容器尺寸

```html
<template>
  <v-g-editor>
    <flow />
    <minimap :width="200" :height="200" />
  </v-g-editor>
</template>
<script>
import VGEditor, { Flow, Minimap } from 'vg-editor';
export default {
  components: {
    VGEditor,
    Flow,
    Minimap
  }
}
</script>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| container | 容器 id | `string` | - |
| width | 宽度 | `number` | - |
| height | 高度 | `number` | - |
| viewportWindowStyle | 视窗样式，参考 [G 绘图属性](https://antv.alipay.com/zh-cn/g2/3.x/api/graphic.html) | `object` | - |
| viewportBackStyle | 背景样式，参考 [G 绘图属性](https://antv.alipay.com/zh-cn/g2/3.x/api/graphic.html) | `object` | - |
