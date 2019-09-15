<template>
  <detail-panel>
    <template slot-scope="scope">
      <node-panel :status="scope.status">
        <detail-form type="node"/>
      </node-panel>
      <canvas-panel :status="scope.status">
        <!-- todo -->
      </canvas-panel>
    </template>
  </detail-panel>
</template>

<script>
import { NodePanel, CanvasPanel, DetailPanel } from 'vg-editor'
import DetailForm from './DetailForm'

export default {
  name: 'MindDetailPanel',
  components: {
    NodePanel,
    CanvasPanel,
    DetailPanel,
    DetailForm
  }
}
</script>
