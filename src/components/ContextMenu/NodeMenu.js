import BaseMenu from './BaseMenu'

export default {
  mixins: [BaseMenu],
  name: 'NodeMenu',
  created () {
    this.type = 'node'
  }
}
