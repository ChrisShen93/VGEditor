<template>
  <div>
    <pre>{{ state }}</pre>

    <pre>{{ viewName }}</pre>
  </div>
</template>

<script>
import { defineComponent, inject, computed, ref } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const state = inject('state');
    const viewName = ref('default');

    return {
      state,
      viewName,
      toggleViewName() {
        viewName.value = viewName.value === 'default' ? 'other' : 'default';
      },
    };
  },
});
</script>
