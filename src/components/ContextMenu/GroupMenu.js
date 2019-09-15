import BaseMenu from './BaseMenu'

export default {
  mixins: [BaseMenu],
  name: 'GroupMenu',
  created () {
    this.type = 'group'
  }
}
