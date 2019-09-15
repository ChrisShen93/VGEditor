import BaseMenu from './BaseMenu'

export default {
  mixins: [BaseMenu],
  name: 'CanvasMenu',
  created () {
    this.type = 'canvas'
  }
}
