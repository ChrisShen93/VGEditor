import Editor from '@components/Base/Editor'
import {
  EDITOR_EVENTS,
  EDITOR_REACT_EVENTS,
  EVENT_BEFORE_ADD_PAGE,
  EVENT_AFTER_ADD_PAGE
} from '@common/constants'
import PropsAPI from '@common/context/PropsAPIContext/PropsAPI'

export default {
  name: 'VGEditor',

  created () {
    this.init()
    this.bindEvent()
  },

  beforeDestroy () {
    this.editor && this.editor.destroy()
    this.propsAPI = null
  },

  methods: {
    addListener (target, eventName, handler) {
      if (typeof handler === 'function') target.on(eventName, handler)
    },

    handleBeforeAddPage (func) {
      this.editor.on(EVENT_BEFORE_ADD_PAGE, func)
    },

    handleAfterAddPage (func) {
      const page = this.editor.getCurrentPage()

      if (page) {
        func({ page })
        return
      }

      this.editor.on(EVENT_AFTER_ADD_PAGE, func)
    },

    init () {
      this.editor = new Editor()
      this.propsAPI = new PropsAPI(this.editor)
    },

    bindEvent () {
      EDITOR_EVENTS.forEach(event => {
        this.addListener(this.editor, [event], this[EDITOR_REACT_EVENTS[event]])
      })
    }
  },

  props: [...EDITOR_EVENTS.map(event => EDITOR_REACT_EVENTS[event])],

  data () {
    return {
      editor: null,
      propsAPI: null
    }
  },

  provide () {
    return {
      root: this
    }
  },

  render () {
    return (
      <div>
        {this.$scopedSlots.default ? this.$scopedSlots.default() : null}
      </div>
    )
  }
}
