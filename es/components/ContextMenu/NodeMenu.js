import BaseMenu from "./BaseMenu";
export default {
  mixins: [BaseMenu],
  name: 'NodeMenu',
  created: function created() {
    this.type = 'node';
  }
};