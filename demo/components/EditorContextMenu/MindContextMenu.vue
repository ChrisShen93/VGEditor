<template>
  <context-menu class="contextMenu">
    <node-menu>
      <menu-li command="append" text="Topic" />
      <menu-li command="appendChild" icon="append-child" text="Subtopic" />
      <menu-li command="collapse" text="Fold" />
      <menu-li command="expand" text="Unfold" />
      <menu-li command="delete" />
    </node-menu>
    <canvas-menu>
      <menu-li command="undo" />
      <menu-li command="redo" />
    </canvas-menu>
  </context-menu>
</template>

<script>
import { NodeMenu, CanvasMenu, ContextMenu } from 'vg-editor'
import MenuLi from './MenuItem'
import './style.styl'

export default {
  name: 'FlowContextMenu',
  components: {
    NodeMenu,
    CanvasMenu,
    ContextMenu,
    MenuLi
  }
}
</script>
