<template>
  <div class="app-wrapper">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->
    <MyTitle></MyTitle>


    <router-view></router-view>
  </div>
</template>

<script>
import MyTitle from '@/views/title/appTitle'
export default {
  name: "Layout",
  mixins: [ResizeMixin],
  data() {
    return {
      MainDataList
    };
  },
  components: {
    MyTitle
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
    handleClick(path){
      this.$router.push({path})
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
  .bottom {
    display: flex;
    justify-content: center;
    span {
      margin: 20px;
    }
  }
  .hover-style {
    @click= ""
    cursor: pointer;
    &:hover {
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
