<template>
  <div id="app">
    <MyTitle></MyTitle>
    <router-view></router-view>
  </div>
</template>

<script>
import MyTitle from '@/views/title/appTitle'
export default {
  name: 'App',
}
</script>
<style lang="scss">
  @import './styles/index.scss'; // 全局自定义的css样式
  #app{
    background-color: #efefef;
  }
</style>
