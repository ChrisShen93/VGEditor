# VGEditor

A visual graph editor based on G6 and Vue, inspired by [GGEditor](https://github.com/alibaba/GGEditor)

### Online demo

1. [flow](https://chrisshen93.github.io/VGEditor/demo/build/#/flow)
2. [koni](https://chrisshen93.github.io/VGEditor/demo/build/#/koni)
3. [mind](https://chrisshen93.github.io/VGEditor/demo/build/#/mind)

## Installation

### yarn and npm

```shell
yarn add vg-editor@2.7.1
# or
npm install vg-editor@2.7.1 -S
```

> If you're using vue-cli v4, you must use vg-editor@2.7.1

### Run demo

```shell
git clone https://github.com/ChrisShen93/VGEditor.git
cd VGEditor
yarn
yarn dev
```

## Usage

### Flow

```html
<template>
  <v-g-editor>
    <flow :data="data"/>
  </v-g-editor>
</template>

<script>
import VGEditor, { Flow } from 'vg-editor'
const data = {
  nodes: [{
    type: 'node',
    size: '70*70',
    shape: 'flow-circle',
    color: '#FA8C16',
    label: '起止节点',
    x: 55,
    y: 55,
    id: 'ea1184e8',
    index: 0,
  }, {
    type: 'node',
    size: '70*70',
    shape: 'flow-circle',
    color: '#FA8C16',
    label: '结束节点',
    x: 55,
    y: 255,
    id: '481fbb1a',
    index: 2,
  }],
  edges: [{
    source: 'ea1184e8',
    sourceAnchor: 2,
    target: '481fbb1a',
    targetAnchor: 0,
    id: '7989ac70',
    index: 1,
  }],
};
export default {
  data () {
    return { data }
  },
  components: { VGEditor, Flow }
}
</script>
```

### Mind

```html
<template>
  <v-g-editor>
    <mind :data="data">
  </v-g-editor>
</template>

<script>
import VGEditor, { Mind } from 'vg-editor'
const data = {
  roots: [{
    label: '中心主题',
    children: [{
      label: '分支主题 1',
    }, {
      label: '分支主题 2',
    }, {
      label: '分支主题 3',
    }],
  }],
};
export default {
  data () {
    return { data }
  },
  components: { VGEditor, Mind }
}
</script>
```

### Documentation

[API](https://chrisshen93.github.io/VGEditor/docs/)
