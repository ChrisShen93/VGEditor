<template>
  <detail-panel>
    <template v-slot="{ status }">
      <node-panel :status="status">
        <detail-form type="node"/>
      </node-panel>
      <canvas-panel :status="status">
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
