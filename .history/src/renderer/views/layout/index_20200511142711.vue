<template>
  <div class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <header class="logo">
      <img src="@/assets/logo.png" alt />
    </header>

    <!-- 内容 -->
    <div class="content">
      <div v-for="item in MainDataList" :key="item.title">
        <img :src="item.url" />
        <p>{{item.title}}</p>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <span class='hover-style' @click="">
        <svg-icon icon-class="history"></svg-icon><span>History</span>
      </span>
      <span class='hover-style' @click="">
        <svg-icon icon-class="brightness_high"></svg-icon><span>Performance</span>
      </span>
      <span class='hover-style' @click="">
        <svg-icon icon-class="command"></svg-icon><span>Pedestal Image</span>
      </span>
      <span class='hover-style' @click="">
        <svg-icon icon-class="setting"></svg-icon><span>Settings</span>
      </span>
      <span class='hover-style' @click="">
        <svg-icon icon-class="help"></svg-icon><span>Help</span>
      </span>
    </div>
  </div>
</template>

<script>
import ResizeMixin from "./mixin/ResizeHandler";
import MainDataList from "../../data/mainData"
export default {
  name: "Layout",
  mixins: [ResizeMixin],
  data () {
    return {
     MainDataList 
    }
  },
  computed: {
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
  .logo {
    height: 116px;
    display: flex;
    align-items: center;
  }
  .content {
    display: flex;
    height: 500px;
    align-items: center;
    justify-content: center;
    text-align: center;
    div {
      margin: 40px;
    }
  }
  .bottom{
    display: flex;
    justify-content: center;
    span{
      margin: 20px;
    }
  }
  .hover-style{ @click=""
    cursor: pointer;
    &:hover{
      color: rgb(64, 144, 250);
    }
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.mobile .fixed-header {
  width: 100%;
}
</style>
