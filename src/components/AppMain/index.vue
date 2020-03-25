<template>
  <div class="main">
    <!-- 注意不要把组件取名<link>因为是内置标签 -->
    <AppLink></AppLink>
    <router-view></router-view>
  </div>
</template>

<script>
import AppLink from "./link";
export default {
  data() {
    return {};
  },

  components: { AppLink },

  methods: {}
};
</script>
