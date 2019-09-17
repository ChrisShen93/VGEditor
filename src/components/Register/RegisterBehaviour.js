import BaseRegister from './BaseRegister'

export default {
  mixins: [BaseRegister],
  name: 'RegisterBehaviour',
  created () {
    this.type = 'behaviour'

    this.bindEvent()
  }
}
