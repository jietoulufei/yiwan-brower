<template>
  <div>
    <el-breadcrumb separator="/" :class="{ hide_breadcrumb: isShowSeparator }">
      <el-breadcrumb-item class="line">{{
        $route.meta.father
      }}</el-breadcrumb-item>
      <el-breadcrumb-item v-show="$route.meta.title !== $route.meta.father">
        {{ $route.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowSeparator: true // 面包屑的“/” 是否显示
    };
  },

  components: {},

  methods: {},
  watch: {
    // 路由监听：监听路由的变化，从而做出相应操作
    $route: {
      immediate: true, // 一旦监听到路由的变化立即执行
      handler(to) {
        // 回调函数，两个参数，to：当前的组件，from：上一个组件
        let { title, father } = to.meta;
        title !== father
          ? (this.isShowSeparator = false)
          : (this.isShowSeparator = true);
      }
    }
  }
};
</script>

<style lang="less">
@navbarBgColor: #409eff;
// 隐藏面包屑的“/”
.hide_breadcrumb {
  .el-breadcrumb__item .el-breadcrumb__separator {
    display: none;
  }
}

.el-breadcrumb {
  height: 10px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); //浅色投影
  .line {
    border-left: 3px solid @navbarBgColor;
    padding-left: 10px;
  }
}
</style>
