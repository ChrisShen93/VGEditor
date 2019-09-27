# RegisterBehaviour

注册命令

## 使用说明

> G6 [自定义交互](https://antv.alipay.com/zh-cn/g6/1.x/tutorial/custom-interaction.html) 教程

```html
<template>
  <v-g-editor>
    <flow />
    <register-behaviour name="" :behaviour="() => {}" :dependences="[]" />
  </v-g-editor>
</template>
<script>
import VGEditor, { Flow, RegisterBehaviour } from 'vg-editor';
export default {
  components: { VGEditor, Flow, RegisterBehaviour }
}
<script>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| name | 行为名称 | `string` | - |
| behaviour | 行为配置 | `function(page)` | - |
| dependences | 继承行为 | `string[]` | - |
