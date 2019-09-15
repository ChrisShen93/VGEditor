export default {
  props: ['status'],

  data () {
    return {
      type: ''
    }
  },

  render () {
    const { type, status } = this

    if (`${type}-selected` !== status) {
      return null
    }

    return (
      <div>
        {this.$scopedSlots.default ? this.$scopedSlots.default() : null}
      </div>
    )
  }
}
