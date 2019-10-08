import BasePanel from "./BasePanel";
export default {
  mixins: [BasePanel],
  name: 'EdgePanel',
  created: function created() {
    this.type = 'edge';
  }
};