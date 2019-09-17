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

      const graph = this.getGraph()

      GRAPH_MOUSE_EVENTS.forEach((event) => {
        const eventName = GRAPH_MOUSE_REACT_EVENTS[event]

        addListener(graph, `${event}`, this[`on${eventName}`])
        addListener(graph, `node:${event}`, this[`onNode${eventName}`])
        addListener(graph, `edge:${event}`, this[`onEdge${eventName}`])
        addListener(graph, `group:${event}`, this[`onGroup${eventName}`])
        addListener(graph, `guide:${event}`, this[`onGuide${eventName}`])
        addListener(graph, `anchor:${event}`, this[`onAnchor${eventName}`])
      })

      GRAPH_OTHER_EVENTS.forEach((event) => {
        addListener(this.graph, [event], this[GRAPH_OTHER_REACT_EVENTS[event]])
      })

      PAGE_EVENTS.forEach((event) => {
        addListener(this.page, [event], this[PAGE_REACT_EVENTS[event]])
      })
    },

    getGraph () {
      return this.page.getGraph()
    }
  },

  inject: ['root'],

  props: [
    ...GRAPH_MOUSE_EVENTS.map(event => {
      const evN = GRAPH_MOUSE_REACT_EVENTS[event]
      return [`on${evN}`, `onNode${evN}`, `onEdge${evN}`, `onGroup${evN}`, `onGuide${evN}`, `onAnchor${evN}`]
    }).flat(),
    ...GRAPH_OTHER_EVENTS.map(event => GRAPH_OTHER_REACT_EVENTS[event]),
    ...PAGE_EVENTS.map(event => PAGE_REACT_EVENTS[event])
  ],

  watch: {
    data: {
      deep: true,
      handler (value) {
        this.$nextTick(() => {
          this.page.read(value)
        })
      }
    }
  },

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
