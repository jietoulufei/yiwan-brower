<template>
  <div>
    <AppHeader></AppHeader>
    <AppNavbar></AppNavbar>
    <AppMain
      :class="{
        left64: $store.state.moduleCollapse.isCollapse,
        left230: !$store.state.moduleCollapse.isCollapse
      }"
    ></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";

export default {
  data() {
    return {};
  },

  components: { AppHeader, AppMain, AppNavbar, AppFooter },

  methods: {}
};
</script>

<style scoped lang="less">
@headerBgColor: #1369c0;
@navbarBgColor: #409eff;
@mainBgColor: #ebf0f4;

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

/* 头部区域 */
.header {
  position: absolute;
  height: 50px;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: @headerBgColor;
}
/* 左边区域 */
.navbar {
  position: absolute;
  // width: 230px;
  top: 50px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto;
  background-color: @navbarBgColor;
}
.left64 {
  left: 64px;
  transition: left 0.3s;
}

.left230 {
  left: 230px;
  transition: left 0.5s;
}

/* 主体区域 */
.main {
  position: absolute;
  top: 50px;
  right: 0px;
  bottom: 26px;
  padding: 10px;
  overflow-y: auto;
  background-color: @mainBgColor;
}
/* 底部区域 */
.footer {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 5px;
  font-size: 12px;
  background-color: @headerBgColor;
  text-align: center;
  color: #fff;
}
</style>
