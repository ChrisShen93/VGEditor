import GGEditorCore from 'gg-editor-core'
import { uniqueId } from '@utils'

export default class Editor extends GGEditorCore {
  constructor (opt) {
    super(opt)

    this.id = uniqueId()
  }
}
