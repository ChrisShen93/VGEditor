import BasePanel from './BasePanel'

export default {
  mixins: [BasePanel],
  name: 'CanvasPanel',
  created () {
    this.type = 'canvas'
  }
}
