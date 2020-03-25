<template>
  <div class="containerBox">
    <h1>欢迎来到一万小时</h1>
    <div class="block">
      <!-- <span class="demonstration">欢迎来到一万小时</span> -->
      <el-carousel trigger="click" height="500px" :interval="4000">
        <el-carousel-item v-for="item in imglist" :key="item.name">
          <div :style="{ backgroundImage: `url(${item.uri})` }" class="bglist"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imglist: [
        {
          name: "one",
          uri:
            "https://ae01.alicdn.com/kf/Hb1289bf5edb84d7e842659916f03aeaei.jpg"
        },
        {
          name: "two",
          uri:
            "https://ae01.alicdn.com/kf/H2772550cf1594fea8bfc31e100f21ee1S.jpg"
        },
        {
          name: "three",
          uri:
            "https://ae01.alicdn.com/kf/H16a20b0684f64483a73dfba19e0ea08aQ.jpg"
        },
        {
          name: "four",
          uri:
            "https://ae01.alicdn.com/kf/He51dddcdca074781a4958a95280edfadn.jpg"
        }
      ]
    };
  },

  components: {},

  methods: {}
};
</script>

<style scoped lang="less">
.containerBox {
  h1 {
    text-align: center;
  }
  .el-carousel {
    margin: 0 auto;
    width: 85%;
    // 轮播图样式
    .bglist {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center;
    }
  }
}
</style>
