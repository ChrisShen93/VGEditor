import BaseMenu from "./BaseMenu";
export default {
  mixins: [BaseMenu],
  name: 'EdgeMenu',
  created: function created() {
    this.type = 'edge';
  }
};