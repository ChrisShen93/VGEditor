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
          <flow :data="flowChartData" :onNodeClick="handleNodeClick" :graph="{ mode: 'readOnly' }"/>
        </div>
        <div class="demo-chart__panel">
          <flow-detail-panel/>
          <editor-minimap/>
        </div>
      </div>
    </div>
    <flow-context-menu/>
    <register-edge name="custom-polyline" extend="flow-polyline" :config="customEdgeConfig"/>
  </v-g-editor>
</template>

<script>
import VGEditor, { Flow, RegisterEdge } from 'vg-editor'
import { FlowToolbar } from '../components/EditorToolbar'
import { FlowItemPanel } from '../components/EditorItemPanel'
import { FlowDetailPanel } from '../components/EditorDetailPanel'
import EditorMinimap from '../components/EditorMinimap'
import { FlowContextMenu } from '../components/EditorContextMenu'
import data from './data'

export default {
  name: 'FlowDemo',

  methods: {
    handleNodeClick (e) {
      console.log(e)
    }
  },

  data () {
    return {
      flowChartData: data,
      customEdgeConfig: {
        getActivedStyle (item) {
          return {
            lineWidth: 3
          }
        },
        getSelectedStyle (item) {
          return {
            lineWidth: 3
          }
        }
      }
    }
  },

  components: {
    VGEditor,
    Flow,
    FlowToolbar,
    FlowItemPanel,
    FlowDetailPanel,
    EditorMinimap,
    FlowContextMenu,
    RegisterEdge
  }
}
</script>
