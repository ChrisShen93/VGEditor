import BaseMenu from "./BaseMenu";
export default {
  mixins: [BaseMenu],
  name: 'MultiMenu',
  created: function created() {
    this.type = 'multi';
  }
};