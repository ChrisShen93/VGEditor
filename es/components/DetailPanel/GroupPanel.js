import BasePanel from "./BasePanel";
export default {
  mixins: [BasePanel],
  name: 'GroupPanel',
  created: function created() {
    this.type = 'group';
  }
};