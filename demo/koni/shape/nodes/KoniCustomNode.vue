<script>
import { RegisterNode } from 'vg-editor'

export default {
  name: 'KoniCustomNode',

  render () {
    const config = {
      draw (item) {
        const keyShape = this.drawKeyShape(item)

        this.drawLabel(item)

        const group = item.getGraphicGroup()
        const model = item.getModel()

        group.addShape('image', {
          attrs: {
            x: -7,
            y: -7,
            img: model.icon
          }
        })

        return keyShape
      }
    }

    return <register-node name='koni-custom-node' config={config}/>
  },

  components: { RegisterNode }
}
</script>
