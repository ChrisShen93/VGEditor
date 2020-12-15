# ItemPanel

元素面板栏

## 使用说明

必需配合 `<Item />` 组件使用，如果 `<Item />` 包含 `src` 属性则自动显示元素概览图片。

```html
<template>
  <v-g-editor>
    <flow />
    <item-panel>
      <item
        type="node"
        size="72*72"
        shape="flow-circle"
        model={{
          color: '#FA8C16',
          label: '起止节点',
        }}
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAwCAYAAAC/gkysAAACT0lEQVRoQ+3bvy+EMRgH8KfImW6xSkTEnyAxMYm/wCSRYMJkETGxiVgMggmTyWQUE7dI/AlikFgNbuGCSi95L72mfZ/26etX8r3x3j699tPnad/hqoiIRg/08fsnzU4MUWtkgOrKfIlPR0AT0cMzNW8eqdbXQ2f3K2pRGbTxQZrZnqJ6rRdaZQKtD6KNK2rePtG5Gt7Xr9cL1A+0uKQxeJMn9KbmLvTL7jTV48LQygisXVJTbTa0Xh4DSIrA4R2R2mpovQS4FDc6AlySV6cx4GRuyDihG+AAJxUQxmGPA5xQQBiGjAOcUEAYhowDnFBAGFZZxp3u7dD86nrXMHzfFQ3MM/NxY8rm4fZX1r/dT2y7FMNvgysGyw2ae14GEBtbLJILk7Jobmw2nDsoM5jUzIjJzJhsCEHEAsf8RtEmG850ZA/MzrTiR3yYklJKXRB7W8jJLh9oNlxsSYZWMzfe12+oNO22uZCVwIVQ7MGFyoWDi0FwDxmuNLnnMSWbDeeWgwsRA8OVMlfWqSX85+B8p1YZXOqE3f00tIdxMNzzH8k4u5TszAllXu7rhW/SvgXgJv/re5yvVH2naWx2cdkQQsqF4KArf4/j9jhfOaXicHucOynf9uB7ZUrFstt/++FQ7EvFycehce9eXHxZZleJVxlczur9x1jACVcNcIATCgjDkHGAEwoIw5BxgBMKCMOQcYATCgjDkHGAEwoIw5BxgBMKCMPaGYe/66frtf+ujwsi6XDtCyK4kpQG17mShEtw8XBdl+BMGK5dluP5rl1+AW7rR6GKRZtdAAAAAElFTkSuQmCC'
      />
    </item-panel>
  </v-g-editor>
</template>
<script>
import VGEditor, { Flow, Item, ItemPanel } from 'vg-editor';
export default {
  components: { VGEditor, Flow, Item, ItemPanel }
}
</script>
```

## API

### Item

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | **必填** 元素类型，可选类型：`node` `edge` | `string` | - |
| size | **必填** 元素尺寸，书写格式：`50*50` | `string` | - |
| shape | **必填** 元素形状，内置形状：[node](./registerNode.md#内置节点)、[edge](./registerEdge.md#内置边) | `string` | - |
| model | 元素初始 model | `object` | - |
| src | 元素概览 src | `string` | - |
