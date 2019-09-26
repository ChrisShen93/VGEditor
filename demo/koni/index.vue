<template>
  <v-g-editor class="demo">
    <div class="demo-chart">
      <div class="demo-chart__header">
        <koni-toolbar/>
      </div>
      <div class="demo-chart__container">
        <div class="demo-chart__sidebar">
          <koni-item-panel/>
        </div>
        <div class="demo-chart__main">
          <koni/>
        </div>
        <div class="demo-chart__panel">
          <koni-detail-panel/>
          <editor-minimap/>
        </div>
      </div>
    </div>
    <koni-custom-node/>
    <koni-context-menu/>
  </v-g-editor>
</template>

<script>
import VGEditor, { Koni } from 'vg-editor'
import { KoniToolbar } from '../components/EditorToolbar'
import { KoniItemPanel } from '../components/EditorItemPanel'
import { KoniDetailPanel } from '../components/EditorDetailPanel'
import EditorMinimap from '../components/EditorMinimap'
import { KoniContextMenu } from '../components/EditorContextMenu'
import KoniCustomNode from './shape/nodes/KoniCustomNode'

export default {
  name: 'KoniDemo',

  components: {
    VGEditor,
    Koni,
    KoniToolbar,
    KoniItemPanel,
    KoniDetailPanel,
    EditorMinimap,
    KoniContextMenu,
    KoniCustomNode
  }
}
</script>
