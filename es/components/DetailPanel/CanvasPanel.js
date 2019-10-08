import BasePanel from "./BasePanel";
export default {
  mixins: [BasePanel],
  name: 'CanvasPanel',
  created: function created() {
    this.type = 'canvas';
  }
};