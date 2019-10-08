import BaseRegister from "./BaseRegister";
export default {
  mixins: [BaseRegister],
  name: 'RegisterNode',
  created: function created() {
    this.type = 'node';
    this.bindEvent();
  }
};