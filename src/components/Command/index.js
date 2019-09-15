export default {
  name: 'Command',

  props: {
    name: String,
    required: true
  },

  render () {
    const { name } = this
    return (
      <div data-command={name} class='command'>
        {this.$slots.default ? this.$slots.default : null}
      </div>
    )
  }
}
