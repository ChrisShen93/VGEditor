import BasePanel from './BasePanel'

export default {
  mixins: [BasePanel],
  name: 'EdgePanel',
  created () {
    this.type = 'edge'
  }
}
