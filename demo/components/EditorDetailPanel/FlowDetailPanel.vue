<template>
  <detail-panel>
    <template scope="scope">
      <node-panel :status="scope.status">
        <detail-form type="node"/>
      </node-panel>
      <edge-panel :status="scope.status">
        <detail-form type="edge"/>
      </edge-panel>
      <group-panel :status="scope.status">
        <detail-form type="group"/>
      </group-panel>
      <multi-panel :status="scope.status">
        <!-- todo -->
      </multi-panel>
      <canvas-panel :status="scope.status">
        <!-- todo -->
      </canvas-panel>
    </template>
  </detail-panel>
</template>

<script>
import { NodePanel, EdgePanel, GroupPanel, MultiPanel, CanvasPanel, DetailPanel } from 'vg-editor'
import DetailForm from './DetailForm'

export default {
  name: 'FlowDetailPanel',
  components: {
    NodePanel,
    EdgePanel,
    GroupPanel,
    MultiPanel,
    CanvasPanel,
    DetailPanel,
    DetailForm
  }
}
</script>
