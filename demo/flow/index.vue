<template>
  <v-g-editor class="demo" ref="flowChart">
    <div class="demo-chart">
      <div class="demo-chart__header">
        <flow-toolbar/>
      </div>
      <div class="demo-chart__container">
        <div class="demo-chart__sidebar">
          <flow-item-panel/>
        </div>
        <div class="demo-chart__main">
          <flow :data="flowChartData"/>
        </div>
        <div class="demo-chart__panel">
          <flow-detail-panel/>
          <editor-minimap/>
        </div>
      </div>
    </div>
    <flow-context-menu/>
  </v-g-editor>
</template>

<script>
import VGEditor, { Flow } from 'vg-editor'
import { FlowToolbar } from '../components/EditorToolbar'
import { FlowItemPanel } from '../components/EditorItemPanel'
import { FlowDetailPanel } from '../components/EditorDetailPanel'
import EditorMinimap from '../components/EditorMinimap'
import { FlowContextMenu } from '../components/EditorContextMenu'

export default {
  name: 'FlowDemo',

  methods: {
    save () {
      const page = this.$refs.flowChart.editor.getCurrentPage()
      console.log(page, page.save())
    }
  },

  data () {
    return {
      flowChartData: { nodes: [], edges: [] }
    }
  },

  components: {
    VGEditor,
    Flow,
    FlowToolbar,
    FlowItemPanel,
    FlowDetailPanel,
    EditorMinimap,
    FlowContextMenu
  }
}
</script>
