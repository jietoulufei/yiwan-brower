//存放侧边栏的共享属性
const moduleCollapse = {
  // 存放共享属性
  state: {
    isCollapse: true
  },
  // 通过this.$store.commit('mutationsname') 触发状态值的改变
  // 建议在actions里使用commit
  mutations: {
    changeCollapse(state) {
      //state.isCollapse++;
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {
    // 通过this.$store.dispatch('mutationsname')
    // 改变侧边栏是否收缩
    changeCollapseActions(context) {
      //console.log("context",context); //state dispatch commit getters
      context.commit("changeCollapse");
    }
  },
  // 通过 this.$store.getters.test使用
  getters: {
    test(state) {
      //专门处理state
      return;
    }
  }
};

export default moduleCollapse;
