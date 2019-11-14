import Editor from '@components/Base/Editor'
import {
  MIND_CONTAINER,
  MIND_CLASS_NAME,
  EVENT_BEFORE_ADD_PAGE,
  EVENT_AFTER_ADD_PAGE
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
      Page.methods.bindEvent.call(this)
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
    data: { default: () => ({ roots: [] }) },
    graph: Object,
    shortcut: Object
  }
}
