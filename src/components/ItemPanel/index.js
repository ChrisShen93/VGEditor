import Item from './Item'

export { Item }

export default {
  name: 'ItemPanel',

  created () {
    this.bindEvent()
  },

  beforeDestroy () {
    document.removeEventListener('mouseup', this.handleMouseUp)
  },

  methods: {
    bindEvent () {
      this.root.handleAfterAddPage(({ page }) => {
        this.page = page

        document.addEventListener('mouseup', this.handleMouseUp)
      })
    },

    handleMouseUp () {
      this.page.cancelAdd()
    }
  },

  inject: ['root'],

  render () {
    return (
      <div>
        {this.$scopedSlots.default ? this.$scopedSlots.default() : null}
      </div>
    )
  }
}
