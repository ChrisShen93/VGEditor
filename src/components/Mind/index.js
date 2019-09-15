import Editor from '@components/Base/Editor'
import {
  MIND_CONTAINER,
  MIND_CLASS_NAME,
  EVENT_BEFORE_ADD_PAGE,
  EVENT_AFTER_ADD_PAGE,
  GRAPH_MOUSE_EVENTS,
  GRAPH_OTHER_EVENTS,
  PAGE_EVENTS,
  GRAPH_MOUSE_REACT_EVENTS,
  GRAPH_OTHER_REACT_EVENTS,
  PAGE_REACT_EVENTS
} from '@common/constants'
import Page from '../Page'

export default {
  mixins: [Page],

  name: 'Mind',

  methods: {
    initPage () {
      const editor = this.root.editor

      editor.emit(EVENT_BEFORE_ADD_PAGE, { className: MIND_CLASS_NAME })

      this.page = new Editor.Mind(this.config)

      editor.add(this.page)

      editor.emit(EVENT_AFTER_ADD_PAGE, { page: this.page })
    },

    bindEvent () {
      /* todo: find a way to extend from super       begin */
      const { addListener } = this
      const props = this.$props || {}

      GRAPH_MOUSE_EVENTS.forEach((event) => {
        const eventName = GRAPH_MOUSE_REACT_EVENTS[event]

        addListener(this.graph, `${event}`, props[`on${eventName}`])
        addListener(this.graph, `node:${event}`, props[`onNode${eventName}`])
        addListener(this.graph, `edge:${event}`, props[`onEdge${eventName}`])
        addListener(this.graph, `group:${event}`, props[`onGroup${eventName}`])
        addListener(this.graph, `guide:${event}`, props[`onGuide${eventName}`])
        addListener(this.graph, `anchor:${event}`, props[`onAnchor${eventName}`])
      })

      GRAPH_OTHER_EVENTS.forEach((event) => {
        addListener(this.graph, [event], props[GRAPH_OTHER_REACT_EVENTS[event]])
      })

      PAGE_EVENTS.forEach((event) => {
        addListener(this.page, [event], props[PAGE_REACT_EVENTS[event]])
      })
      /* todo: find a way to extend from super     end */

      this.bindKeyUpEditLabel()
    },

    bindKeyUpEditLabel () {
      const editLabel = this.page.get('labelTextArea')

      editLabel.on('keyup', (e) => {
        e.stopPropagation()

        const item = editLabel.focusItem
        const text = editLabel.textContent

        this.page.emit('keyUpEditLabel', {
          item,
          text
        })
      })
    },

    getPageId () {
      return `${MIND_CONTAINER}_${this.root.editor.id}`
    }
  },

  props: {
    data: { default: () => ({ roots: [] }) }
  }
}
