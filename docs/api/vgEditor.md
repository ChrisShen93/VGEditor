# VGEditor

An editor component for the graph.

## Usage

```html
<template>
  <v-g-editor ref="vgEditor">
    <flow/>
  </v-g-editor>
</template>

<script>
import VGEditor, { Flow } from 'vg-editor'
export default {
  methods: {},
  components: { VGEditor, Flow }
}
</script>
```

## API

利用`$refs`属性，可以拿到`<v-g-editor/>`上的`propsAPI`属性。通过他们可以执行不同的命令。

### propsAPI

| 属性 | 说明 | 类型 |
| :--- | :--- | :--- |
| executeCommand | 执行命令 | `function(command)` |
| read | 读取数据 | `function(data)` |
| save | 保存数据 | `function() => object` |
| add | 添加图项 | `function(type, model)` |
| find | 查找图项 | `function(id)` |
| update | 更新图项 | `function(item, model)` |
| remove | 删除图项 | `function(item)` |
| getSelected | 获取当前选中图项 | `function` |

示例

```html
<script>
export default {
  methods: {
    saveDataFromChart () {
      console.log(this.$refs.flowChart.propsAPI.save())
    }
  }
}
</script>
```

### editor

## Events

See more on [EditorEvents](./editorEvents.md).
