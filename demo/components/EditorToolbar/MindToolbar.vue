<template>
  <toolbar class='toolbar'>
    <toolbar-button command="undo" />
    <toolbar-button command="redo" />
    <toolbar-button command="zoomIn" icon="zoom-in" text="Zoom In" />
    <toolbar-button command="zoomOut" icon="zoom-out" text="Zoom Out" />
    <toolbar-button command="autoZoom" icon="fit-map" text="Fit Map" />
    <toolbar-button command="resetZoom" icon="actual-size" text="Actual Size" />
    <toolbar-button command="append" text="Topic" />
    <toolbar-button command="appendChild" icon="append-child" text="Subtopic" />
    <toolbar-button command="collapse" text="Fold" />
    <toolbar-button command="expand" text="Unfold" />
  </toolbar>
</template>

<script>
import { Toolbar } from 'vg-editor'
import ToolbarButton from './ToolbarButton'
import './style.styl'

export default {
  name: 'MindToolbar',

  components: {
    Toolbar,
    ToolbarButton
  }
}
</script>
