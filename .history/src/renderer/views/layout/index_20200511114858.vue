<template>
  <div class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <header class="logo">
      <img src="@/assets/logo.png" alt />
    </header>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <div class="grid-content bg-purple">hah</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">ddddd</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">dascs</div>
      </el-col>
    </el-row>
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
    },
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
  .logo{
    height: 116px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
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
