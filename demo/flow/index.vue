<template>
  <v-g-editor class="demo" ref="flowChart">
    <button @click="save">save</button>
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

export default {
  name: 'FlowDemo',

  methods: {
    save () {
      console.log(this.$refs.flowChart.editor.getCurrentPage().save())
      console.log(this.$refs.flowChart.propsAPI.save())
    }
  },

  data () {
    return {
      flowChartData: { nodes: [], edges: [] },
      customEdgeConfig: {
        // afterDraw (item) {
        //   const keyShape = item.getKeyShape()
        //   keyShape.attr('lineDash', [10, 10])
        //   keyShape.attr('lineDashOffset', 0)
        //   keyShape.animate({
        //     lineDashOffset: -20,
        //     repeat: true
        //   }, 500)
        // },
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
