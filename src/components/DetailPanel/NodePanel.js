import BasePanel from './BasePanel'

export default {
  mixins: [BasePanel],
  name: 'NodePanel',
  created () {
    this.type = 'node'
  }
}
