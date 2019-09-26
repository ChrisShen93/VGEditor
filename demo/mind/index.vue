<template>
  <v-g-editor class="demo">
    <div class="demo-chart">
      <div class="demo-chart__header">
        <mind-toolbar/>
      </div>
      <div class="demo-chart__container">
        <div class="demo-chart__main">
          <mind :data="mockData"/>
        </div>
        <div class="demo-chart__panel">
          <mind-detail-panel/>
          <editor-minimap/>
        </div>
      </div>
    </div>
    <mind-context-menu/>
  </v-g-editor>
</template>

<script>
import VGEditor, { Mind } from 'vg-editor'
import { MindToolbar } from '../components/EditorToolbar'
import { MindDetailPanel } from '../components/EditorDetailPanel'
import EditorMinimap from '../components/EditorMinimap'
import { MindContextMenu } from '../components/EditorContextMenu'
import mockData from '../mockData/mind-data'

export default {
  name: 'KoniDemo',

  data () {
    return {
      mockData
    }
  },

  components: {
    VGEditor,
    Mind,
    MindToolbar,
    MindDetailPanel,
    EditorMinimap,
    MindContextMenu
  }
}
</script>
