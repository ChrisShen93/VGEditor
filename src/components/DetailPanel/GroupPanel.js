import BasePanel from './BasePanel'

export default {
  mixins: [BasePanel],
  name: 'GroupPanel',
  created () {
    this.type = 'group'
  }
}
