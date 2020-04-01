<template>
  <div class="main">
    <!-- 注意不要把组件取名<link>因为是内置标签 -->
    <!-- 可以通过 appear attribute 设置节点在初始渲染的过渡 -->
    <AppLink></AppLink>
    <transition :name="transitionName" appear>
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
import AppLink from "./link";
export default {
  data() {
    return {
      transitionName: "fade"
    };
  },

  components: { AppLink },

  methods: {}
};
</script>

<style lang="less">
.Router {
  position: absolute; //正常情况下过度动画会占位，隐藏的老页面会占位，新页面进来会往上移，所以需absolute
  left: 0;
  right: 0;
}
//老页面移除隐藏过渡
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

//新页面移入显示过渡
.fade-enter-active {
  transition: all 1.5s;
}
.fade-enter {
  opacity: 0;
  transform: translateX(-200%);
}
</style>
