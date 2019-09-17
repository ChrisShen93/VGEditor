<template>
  <command :name="command">
    <icon :type="iconType"/>
  </command>
</template>

<script>
import { Command } from 'vg-editor'
import Icon from '../Icon'

export default {
  name: 'ToolbarButton',

  props: ['command', 'icon', 'text'],

  computed: {
    iconType () {
      return `icon-${this.icon || this.command}`
    }
  },

  components: {
    Command,
    Icon
  }
}
</script>
