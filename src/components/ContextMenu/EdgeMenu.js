import BaseMenu from './BaseMenu'

export default {
  mixins: [BaseMenu],
  name: 'EdgeMenu',
  created () {
    this.type = 'edge'
  }
}
