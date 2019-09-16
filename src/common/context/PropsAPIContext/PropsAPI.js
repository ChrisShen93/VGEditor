export default class PropsAPI {
  editor = null

  constructor (editor, emitEventFn) {
    this.editor = editor;

    ['executeCommand'].forEach(key => {
      this[key] = (...params) => this.editor[key](...params)
    });

    ['read', 'save', 'add', 'find', 'update', 'remove', 'getSelected'].forEach(key => {
      this[key] = (...params) => {
        const ret = this.currentPage[key](...params)
        emitEventFn(key, ret)
        return ret
      }
    })
  }

  get currentPage () {
    return this.editor.getCurrentPage()
  }
}
