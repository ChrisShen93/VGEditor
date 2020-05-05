<template>
  <div><Flow />this is flow charts test</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Flow } from '../../src';

export default defineComponent({
  name: 'FlowDemo',
  components: { Flow },
});
</script>
