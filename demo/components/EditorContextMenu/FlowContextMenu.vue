<template>
  <context-menu class="contextMenu">
    <node-menu>
      <menu-item command="copy" />
      <menu-item command="delete" />
    </node-menu>
    <edge-menu>
      <menu-item command="delete" />
    </edge-menu>
    <group-menu>
      <menu-item command="copy" />
      <menu-item command="delete" />
      <menu-item command="unGroup" icon="ungroup" text="Ungroup" />
    </group-menu>
    <multi-menu>
      <menu-item command="copy" />
      <menu-item command="paste" />
      <menu-item command="addGroup" icon="group" text="Add Group" />
      <menu-item command="delete" />
    </multi-menu>
    <canvas-menu>
      <menu-item command="undo" />
      <menu-item command="redo" />
      <menu-item command="pasteHere" icon="paste" text="Paste Here" />
    </canvas-menu>
  </context-menu>
</template>

<script>
import { NodeMenu, EdgeMenu, GroupMenu, MultiMenu, CanvasMenu, ContextMenu } from 'vg-editor'
import MenuItem from './MenuItem'
import './style.styl'

export default {
  name: 'FlowContextMenu',
  components: {
    NodeMenu,
    EdgeMenu,
    GroupMenu,
    MultiMenu,
    CanvasMenu,
    ContextMenu,
    MenuItem
  }
}
</script>
