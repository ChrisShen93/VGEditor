import Editor from '@components/Base/Editor'
import {
  KONI_CONTAINER,
  KONI_CLASS_NAME,
  EVENT_BEFORE_ADD_PAGE,
  EVENT_AFTER_ADD_PAGE
} from '@common/constants'
import Page from '../Page'

export default {
  mixins: [Page],

  name: 'Koni',

  methods: {
    initPage () {
      const editor = this.root.editor

      editor.emit(EVENT_BEFORE_ADD_PAGE, { className: KONI_CLASS_NAME })

      this.page = new Editor.Koni(this.config)

      editor.add(this.page)

      editor.emit(EVENT_AFTER_ADD_PAGE, { page: this.page })
    },

    getPageId () {
      return `${KONI_CONTAINER}_${this.root.editor.id}`
    }
  },

  props: {
    data: { default: () => ({ nodes: [], edges: [] }) }
  }
}
