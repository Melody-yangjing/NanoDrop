<template>
  <div class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <header class="logo">
      <img src="@/assets/logo.png" alt />
    </header>

    <!-- 内容 -->
    <div class="content">
      <div>
        <img src="../../assets/UV-VIs.png" />
        <p>UV-VIS</p>
      </div>
      <div>
        <img src="../../assets/Chemometric.png" />
        <p>UV-VIS</p>
      </div>
      <div>
        <img src="../../assets/Custom-Metho.png" />
        <p>UV-VIS</p>
      </div>
    </div>
  </div>
</template>

<script>
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  mixins: [ResizeMixin],
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
    justify-content: center;
    
    color: #fff;
    text-align: center;
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
