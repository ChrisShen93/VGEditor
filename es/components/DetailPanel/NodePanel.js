import BasePanel from "./BasePanel";
export default {
  mixins: [BasePanel],
  name: 'NodePanel',
  created: function created() {
    this.type = 'node';
  }
};