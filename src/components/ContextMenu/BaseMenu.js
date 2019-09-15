export default {
  data () {
    return {
      type: ''
    }
  },

  render () {
    const { type } = this

    return (
      <div class='menu' data-status={`${type}-selected`}>
        {this.$slots.default ? this.$slots.default : null}
      </div>
    )
  }
}
