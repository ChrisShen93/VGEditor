import BaseRegister from './BaseRegister'

export default {
  mixins: [BaseRegister],
  name: 'RegisterCommand',
  created () {
    this.type = 'command'

    this.bindEvent()
  }
}
