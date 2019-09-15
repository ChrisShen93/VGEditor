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
        {this.$scopedSlots.default ? this.$scopedSlots.default() : null}
      </div>
    )
  }
}
