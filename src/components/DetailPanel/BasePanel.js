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
        {this.$slots.default ? this.$slots.default : null}
      </div>
    )
  }
}
