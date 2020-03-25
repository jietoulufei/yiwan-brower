<template>
  <div class="navbar">
    <!-- :router="true"是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
    <!-- :default-active="$route.path"(强烈建议这样写，因为重定向的问题<el-menu-item index="/xu">必须与redirect的路径一致)
      否则当点击logo的时候无法准确高亮
    -->
    <el-menu
      :router="true"
      :default-active="$route.path"
      :default-openeds="arrNarBarOPEN"
      class="el-menu-vertical-demo"
      background-color="#409eff"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="$store.state.moduleCollapse.isCollapse"
    >
      <!-- 此处有坑！需要以实际重定向的路径为准！不要写"/" -->
      <el-menu-item index="/xu">
        <i class="el-icon-s-home"></i>
        <span>序言</span>
      </el-menu-item>
      <el-submenu index="code">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>编程技术</span>
        </template>
        <el-menu-item index="/zonglan">
          <i class="el-icon-s-grid collapseI"></i>
          <span slot="title">总览</span>
        </el-menu-item>
        <el-menu-item index="/qianduan">
          <i class="el-icon-s-unfold collapseI"></i>
          <span slot="title">前端</span>
        </el-menu-item>
        <el-menu-item index="/houduan">
          <i class="el-icon-s-fold collapseI"></i>
          <span>后端</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item>
        <i class="el-icon-edit"></i>
        <span>编辑</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { getFn } from "@/utils/commonFn.js";

export default {
  data() {
    return {
      default_active: "/",
      arrNarBarOPEN: [],
      subscribe: null,
      subscribe2: null,
      isCollapse: true,
      isZero: "64px"
    };
  },

  components: {},

  methods: {},
  created() {
    console.log("created");
    //订阅
    //每次 发布pubsub会重新触发created
    this.subscribe = getFn().subscribe("initNavBar", (pubsubID, data) => {
      //每次点击logo初始化侧边栏
      if (data) this.arrNarBarOPEN = [];
    });
  },
  updated() {
    //只有定义在template模板里才会触发
    console.log("updated-store", this.$store.state.moduleCollapse.isCollapse);
    this.$store.state.moduleCollapse.isCollapse
      ? (this.isZero = "64px")
      : (this.isZero = "230px");
  },
  beforeDestroy() {
    //vscode热更新可以实时触发该钩子
    console.log("beforeDestroy-subscribe", this.subscribe);
    getFn().unsubscribe(this.subscribe);
  }
};
</script>

<style lang="less">
// 图标字体颜色
@iconColor: #fff;
//侧边收缩栏样式，不可缺少，不然收缩时候字体会卡顿
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}

.el-menu-vertical-demo {
  border-right: none;
  i {
    color: @iconColor;
  }
  .el-icon-arrow-down:before {
    color: @iconColor;
  }
}
</style>
