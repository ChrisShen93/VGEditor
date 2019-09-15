import BasePanel from './BasePanel'

export default {
  mixins: [BasePanel],
  name: 'MultiPanel',
  created () {
    this.type = 'multi'
  }
}
