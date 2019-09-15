import G6 from '@antv/g6'
require('@antv/g6/build/plugin.tool.minimap')
import { MINIMAP_CONTAINER } from '@common/constants'

export default {
  name: 'Minimap',

  created () {
    this.bindEvent()
  },

  mounted () {
    this.init().then(this.bindPage)
  },

  beforeDestroy () {
    this.minimap && this.minimap.destroy()
  },

  methods: {
    bindEvent () {
      this.root.handleAfterAddPage(this.bindPage)
    },

    init () {
      return new Promise(resolve => {
        this.containerId = `${MINIMAP_CONTAINER}_${this.root.editor.id}`
        const container = this.container || this.containerId

        const { width, height, viewportWindowStyle, viewportBackStyle } = this

        this.$nextTick(() => {
          const { clientWidth, clientHeight } = document.getElementById(container)

          this.minimap = new G6.Components.Minimap({
            container,
            width: width || clientWidth,
            height: height || clientHeight,
            viewportWindowStyle,
            viewportBackStyle
          })

          const currentPage = this.getCurrentPage()
          this.minimap.getGraph = () => currentPage.getGraph()

          resolve()
        })
      })
    },

    bindPage () {
      const currentPage = this.getCurrentPage()

      if (!this.minimap || !currentPage) {
        return
      }

      const graph = currentPage.getGraph()

      this.minimap.bindGraph(graph)
      this.minimap.debounceRender()
    },

    getCurrentPage () {
      const currentPage = this.root.editor.getCurrentPage()
      return currentPage
    }
  },

  inject: ['root'],

  props: {
    container: String,
    width: Number,
    height: Number,
    viewportWindowStyle: Object,
    viewportBackStyle: Object
  },

  data () {
    return {
      containerId: '',
      minimap: null
    }
  },

  render () {
    return (
      <div id={this.containerId}/>
    )
  }
}
