import BaseMenu from './BaseMenu'

export default {
  mixins: [BaseMenu],
  name: 'MultiMenu',
  created () {
    this.type = 'multi'
  }
}
