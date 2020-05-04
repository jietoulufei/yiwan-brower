//存放侧边栏的共享属性
const moduleCollapse = {
  // 存放共享属性
  state: {
    isCollapse: true
  },
  // 方法一.通过this.$store.state.isCollapse获取
  // 方法二.通过mapState函数映射在computed里使用
  mutations: {
    // mutations属性用于变更state中的数据===========================
    // 方法一.通过this.$store.commit('mutationsname') 触发状态值的改变
    // 建议在actions里使用commit
    // 方法二.通过mapMutations函数映射在methods里使用
    // 注意在muations属性里不要写异步代码，定时器，数据会更新不准确(vue插件调试器也无法及时获取更新)
    changeCollapse(state) {
      //state.isCollapse++;
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {
    // actions属于用于执行异步操作(在action中还是要触发mutations来操控state)===========================
    // 方法一.通过this.$store.dispatch('actionsname')
    // 方法二.通过mapactions函数映射在methods里使用
    // 改变侧边栏是否收缩
    changeCollapseActions(context) {
      //console.log("context",context); //state dispatch commit getters
      context.commit("changeCollapse");
    }
  },
  getters: {
    // 用于对store.state的数据进行加工处理，形成新的数据（不会修改原state数据！）
    // 方法一.通过 this.$store.getters.test使用
    // 方法二.通过mapgetters函数映射在computed里使用
    test(state) {
      //专门处理state
      return;
    }
  }
};

export default moduleCollapse;
