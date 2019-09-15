import BaseRegister from "./BaseRegister";
export default {
  mixins: [BaseRegister],
  name: 'RegisterGuide',
  created: function created() {
    this.type = 'guide';
    this.bindEvent();
  }
};