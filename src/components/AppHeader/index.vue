<template>
  <div class="header">
    <router-link to="/" @click.native="goIndex">
      <img class="logo" src="@/assets/wan.png" alt width="25px" />
      <span class="logoText">壹萬小時</span>
    </router-link>
    <span class="collapseIcon" @click="isCollapse">
      <i v-show="!$store.state.moduleCollapse.isCollapse" class="el-icon-s-fold"></i>
      <i v-show="$store.state.moduleCollapse.isCollapse" class="el-icon-s-unfold"></i>
    </span>
    <!-- <el-button type="primary" style="margin-left:10px" @click="isCollapse">展开</el-button> -->
    <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-setting" command="edit">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" command="close">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { sendFn } from "@/utils/commonFn";
import { logout } from "@/api/login";

export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    handleCommand(command) {
      switch (command) {
        case "edit":
          this.$message({
            message: "修改密码",
            type: "info",
            duration: 1000
          });
          break;
        case "close":
          var token = localStorage.getItem("yiwan-token");
          logout(token).then(response => {
            const { data } = response;
            if (data.flag) {
              //退出成功，清除localStorage
              localStorage.removeItem("yiwan-token");
              localStorage.removeItem("yiwan-userinfo");
              this.$router.push("/login");
            } else {
              this.$message({
                message: "退出失败",
                type: "warning",
                duration: 1000
              });
            }
          });
          break;
        default:
          break;
      }
    },
    goIndex() {
      //发布
      sendFn("initNavBar", true);
    },
    isCollapse() {
      this.$store.dispatch("changeCollapseActions");
    }
  }
};
</script>

<style scoped lang="less">
@logoTextColor: #fff;
//收缩图标样式
.commonIcon() {
  font-size: 20px;
  vertical-align: text-bottom;
}

.header {
  .logo {
    vertical-align: middle;
    padding: 0px 10px 0px 40px;
  }
  a {
    text-decoration: none;
  }

  .logoText {
    position: relative;
    color: @logoTextColor;
  }

  .el-dropdown {
    float: right;
    margin-right: 40px;
  }

  .el-dropdown-link {
    color: @logoTextColor;
    cursor: pointer;
  }

  .collapseIcon {
    padding-left: 10px;
    cursor: pointer;
    i {
      .commonIcon();
    }
  }
}
</style>
