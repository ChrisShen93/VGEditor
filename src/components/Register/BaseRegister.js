import Editor from '@components/Base/Editor'
import { upperFirst } from '@utils'

export default {
  methods: {
    bindEvent () {
      const { type } = this
      const { handleBeforeAddPage } = this.root

      handleBeforeAddPage(({ className }) => {
        let host = Editor[className]
        let keys = ['name', 'config', 'extend']

        if (type === 'command') {
          host = Editor
        }

        if (type === 'behaviour') {
          keys = ['name', 'behaviour', 'dependences']
        }

        const args = keys.map(key => this.$attrs[key])

        host[`register${upperFirst(type)}`](...args)
      })
    }
  },

  inject: ['root'],

  render () {
    return null
  }
}
