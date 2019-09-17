import { STATUS_CANVAS_SELECTED } from '@common/constants'
import { uniqueId } from '@utils'

export default {
  name: 'DetailPanel',

  created () {
    this.bindEvent()
  },

  methods: {
    bindEvent () {
      this.root.handleAfterAddPage(({ page }) => {
        this.status = STATUS_CANVAS_SELECTED

        page.on('statuschange', ({ status }) => {
          this.status = status
          this.uniqueId = uniqueId()
        })
      })
    }
  },

  inject: ['root'],

  data () {
    return {
      status: '',
      uniqueId: ''
    }
  },

  render () {
    const { status, uniqueId } = this
    if (!status) {
      return null
    }

    return (
      <div key={uniqueId}>
        {this.$scopedSlots.default ? this.$scopedSlots.default({ status, uniqueId }) : null}
      </div>
    )
  }
}
