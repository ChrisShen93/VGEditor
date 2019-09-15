import BaseRegister from './BaseRegister'

export default {
  mixins: [BaseRegister],
  name: 'RegisterNode',
  created () {
    this.type = 'node'

    this.bindEvent()
  }
}
