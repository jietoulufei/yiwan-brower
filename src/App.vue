<template>
  <div id="app" @click="isOverTime">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      overTime: new Date().getTime(), // 最后一次点击的时间
      currentTime: new Date().getTime(), //当前时间
      tOut: 10 * 60 * 1000 //超时时间10min
    };
  },
  created: function() {
    //当vue实例创建时，去除首屏loading
    document.body.removeChild(document.getElementById("loader-wrapper"));
  },
  mounted() {
    console.log("moted");
    window.setInterval(this.tTime, 10000);
  },
  methods: {
    isOverTime() {
      console.log("当界面被点击更新点击时间");
      this.overTime = new Date().getTime(); //当界面被点击更新点击时间
    },
    tTime() {
      this.currentTime = new Date().getTime();
      if (this.currentTime - this.overTime > this.tOut) {
        console.log("登录超时了？");
        if (this.$route.path !== "/login") {
          localStorage.removeItem("yiwan-pc-token");
          localStorage.removeItem("yiwan-pc-userinfo");
          this.$message({
            showClose: true,
            message: "登录超时",
            type: "warning",
            duration: 0 //设置0秒为手动关闭
          });
          this.$router.push("/login");
        }
      }
    }
  }
};
</script>

<style lang="less">
body {
  font-family: "微软雅黑";
  margin: 0 auto;
}
</style>
