import BaseRegister from './BaseRegister'

export default {
  mixins: [BaseRegister],
  name: 'RegisterEdge',
  created () {
    this.type = 'edge'

    this.bindEvent()
  }
}
