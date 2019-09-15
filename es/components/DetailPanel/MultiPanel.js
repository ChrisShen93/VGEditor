import BasePanel from "./BasePanel";
export default {
  mixins: [BasePanel],
  name: 'MultiPanel',
  created: function created() {
    this.type = 'multi';
  }
};