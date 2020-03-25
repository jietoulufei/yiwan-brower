import Vue from "vue";
import Vuex from "vuex";
import moduleCollapse from "./moduleCollapse";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { moduleCollapse }
  //this.$store.state.moduleCollapse 只针对state需要指定模块名
});
