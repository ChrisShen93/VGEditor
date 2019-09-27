# RegisterGroup

注册组

## 使用说明

> G6 [自定义图项](https://antv.alipay.com/zh-cn/g6/1.x/tutorial/custom-shape.html) 教程

```html
<template>
  <v-g-editor>
    <flow />
    <register-group name="" :config="{}" extend="" />
  </v-g-editor>
</template>
<script>
import VGEditor, { Flow, RegisterGroup } from 'vg-editor';
export default {
  components: { VGEditor, Flow, RegisterGroup }
}
</script>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| name | 组名称 | `string` | - |
| config | 组配置 | `object` | - |
| extend | 继承图形 | `string` | - |
