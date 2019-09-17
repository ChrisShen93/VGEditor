<template>
  <context-menu class="contextMenu">
    <node-menu>
      <menu-item command="append" text="Topic" />
      <menu-item command="appendChild" icon="append-child" text="Subtopic" />
      <menu-item command="collapse" text="Fold" />
      <menu-item command="expand" text="Unfold" />
      <menu-item command="delete" />
    </node-menu>
    <canvas-menu>
      <menu-item command="undo" />
      <menu-item command="redo" />
    </canvas-menu>
  </context-menu>
</template>

<script>
import { NodeMenu, CanvasMenu, ContextMenu } from 'vg-editor'
import MenuItem from './MenuItem'
import './style.styl'

export default {
  name: 'FlowContextMenu',
  components: {
    NodeMenu,
    CanvasMenu,
    ContextMenu,
    MenuItem
  }
}
</script>
