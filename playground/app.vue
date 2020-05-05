<template>
  <div>
    <div>
      <router-link to="/flow">flow</router-link>
      <router-link to="/mind">mind</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';

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
