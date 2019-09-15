import { merge } from '@utils'
import {
  GRAPH_MOUSE_EVENTS,
  GRAPH_OTHER_EVENTS,
  PAGE_EVENTS,
  GRAPH_MOUSE_REACT_EVENTS,
  GRAPH_OTHER_REACT_EVENTS,
  PAGE_REACT_EVENTS
} from '@common/constants'

export default {
  mounted () {
    this.init().then(this.bindEvent)
  },

  beforeDestroy () {
    this.page && this.page.destroy()
    this.page = null
  },

  methods: {
    getPageId () {
      // should be extend
    },

    initPage () {
      // should be extend
    },

    readData () {
      const { data } = this.config

      if (data) {
        this.page.read(data)
      }
    },

    addListener (target, eventName, handler) {
      if (typeof handler === 'function') target.on(eventName, handler)
    },

    init () {
      return new Promise(resolve => {
        this.pageId = this.getPageId()

        merge(this.config, this.$props, {
          graph: {
            container: this.pageId
          }
        })

        this.$nextTick(() => {
          this.initPage()
          this.readData()

          resolve()
        })
      })
    },

    bindEvent () {
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
    }
  },

  inject: ['root'],

  data () {
    return {
      config: {},
      page: null,
      pageId: ''
    }
  },

  render () {
    const { page, pageId } = this
    return (
      <div id={pageId} style={{ height: '100%' }}>
        {page
          ? this.$scopedSlots.default
            ? this.$scopedSlots.default()
            : null
          : null}
      </div>
    )
  }
}
