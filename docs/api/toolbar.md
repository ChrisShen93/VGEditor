# Toolbar

工具栏，负责命令按钮绑定与可用禁用状态控制。

## 使用说明

必需配合 [`<Command />`](./command.md) 组件使用

```html
<template>
  <v-g-editor>
    <flow />
    <toolbar>
      <command name="undo">撤销</command>
      <command name="redo">重做</command>
    </toolbar>
  </v-g-editor>
</template>
<script>
import VGEditor, { Flow, Command, Toolbar } from 'vg-editor';
export default {
  components: { VGEditor, Flow, Command, Toolbar }
}
</script>
```
