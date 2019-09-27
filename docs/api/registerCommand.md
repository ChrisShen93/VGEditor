# RegisterCommand

注册命令

## 使用说明

```html
<template>
  <v-g-editor>
    <flow />
    <register-command name="" "config="{}" extend="" />
  </v-g-editor>
</template>
<script>
import VGEditor, { Flow, RegisterCommand } from 'vg-editor';
export default {
  components: { VGEditor, Flow, RegisterCommand }
}
</script>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| name | 命令名称 | `string` | - |
| config | 命令配置 | `object` | - |
| extend | 继承命令，[内置命令](./command.md#内置命令) | `string` | - |
