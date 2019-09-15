import BaseMenu from "./BaseMenu";
export default {
  mixins: [BaseMenu],
  name: 'CanvasMenu',
  created: function created() {
    this.type = 'canvas';
  }
};