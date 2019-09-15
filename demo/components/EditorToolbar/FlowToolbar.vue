<template>
  <toolbar class='toolbar'>
    <toolbar-button command="undo" />
    <toolbar-button command="redo" />
    <toolbar-button command="copy" />
    <toolbar-button command="paste" />
    <toolbar-button command="delete" />
    <toolbar-button command="zoomIn" icon="zoom-in" text="Zoom In" />
    <toolbar-button command="zoomOut" icon="zoom-out" text="Zoom Out" />
    <toolbar-button command="autoZoom" icon="fit-map" text="Fit Map" />
    <toolbar-button command="resetZoom" icon="actual-size" text="Actual Size" />
    <toolbar-button command="toBack" icon="to-back" text="To Back" />
    <toolbar-button command="toFront" icon="to-front" text="To Front" />
    <toolbar-button command="multiSelect" icon="multi-select" text="Multi Select" />
    <toolbar-button command="addGroup" icon="group" text="Add Group" />
    <toolbar-button command="unGroup" icon="ungroup" text="Ungroup" />
  </toolbar>
</template>

<script>
import { Toolbar } from 'vg-editor'
import ToolbarButton from './ToolbarButton'
import './style.styl'

export default {
  name: 'FlowToolbar',

  components: {
    Toolbar,
    ToolbarButton
  }
}
</script>
