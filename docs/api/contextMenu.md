# ContextMenu

右键菜单，负责菜单显示隐藏，命令按钮绑定与可用禁用状态控制。

## 使用说明

必需配合 [`<Command />`](./command.md) 组件使用

自动根据不同页面状态显示对应菜单，例如：选中节点时则只会显示 `NodeMenu`。

```html
<template>
  <v-g-editor>
    <flow />
    <context-menu>
      <node-menu>     // 节点右键菜单
        <command name="copy">复制</command>
        <command name="delete">删除</command>
      </node-menu>
      <edge-menu />   // 边线右键菜单
      <group-menu />  // 群组右键菜单
      <multi-menu />  // 多选右键菜单
      <canvas-menu /> // 画布右键菜单
    </context-menu>
  </v-g-editor>
</template>

<script>
import VGEditor, {
  Flow,
  Command,
  ContextMenu,
  NodeMenu,
  EdgeMenu,
  GroupMenu,
  MultiMenu,
  CanvasMenu,
} from 'vg-editor';
export default {
  components: {
    VGEditor,
    Flow,
    Command,
    ContextMenu,
    NodeMenu,
    EdgeMenu,
    GroupMenu,
    MultiMenu,
    CanvasMenu
  }
}
</script>
```
