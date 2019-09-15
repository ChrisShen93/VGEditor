import BaseMenu from "./BaseMenu";
export default {
  mixins: [BaseMenu],
  name: 'GroupMenu',
  created: function created() {
    this.type = 'group';
  }
};