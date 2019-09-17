# Editor Events

## Usage

```html
<template>
  <v-g-editor :onBeforeCommandExecute="handleBeforeCommand" :onAfterCommandExecute="handleAfterCommand">
    <flow/>
  </v-g-editor>
</template>

<script>
import VGEditor, { Flow } from 'vg-editor'
export default {
  methods: {
    handleBeforeCommand ({ command }) {
      console.log('before command execute', command)
    },
    handleAfterCommand ({ command }) {
      console.log('after command execute', command)
    }
  },
  components: { VGEditor, Flow }
}
</script>
```

## Event List

| Event Name | Description |
| --- | --- |
| onBeforeCommandExecute | A function is called before executing the command. |
| onAfterCommandExecute | A function is called after executing the command. |
