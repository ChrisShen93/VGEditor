# VGEditor

A visual graph editor based on G6 and Vue, inspired by [GGEditor](https://github.com/alibaba/GGEditor)

## Todo list

> Feature:

- [x] Flow
- [x] Koni
- [x] Mind
- [x] Toolbar
- [x] ShapePanel
- [x] DetailPanel
- [x] Mini map
- [x] RegisterNode
- [x] RegisterEdge
- [x] RegisterCommand
- [x] RegisterBehaviour
- [x] RegisterGuide
- [ ] API doc

## Installation

### yarn and npm

```shell
yarn add vg-editor@PLUGIN_VERSION
# or
npm install vg-editor@PLUGIN_VERSION -S
```

|Vue version|Plugin version|
|---|---|
|2.4.x|2.4.4|
|2.5.x|2.5.3|
|2.6.x|2.6.3|

### run demo

```shell
npm run dev
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
