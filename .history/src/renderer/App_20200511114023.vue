<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  @import './styles/index.scss'; // 全局自定义的css样式
  #app{
    background-color: rgb(6, 9, 44);
  }
</style>
