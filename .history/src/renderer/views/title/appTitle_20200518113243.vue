<template>
  <div id="mytitle" style="-webkit-app-region: drag;-webkit-user-select: none;">
    <span class="app-title">NanoDrop QC</span>
    <div class="min_max_close" style="-webkit-app-region: no-drag;">
      <svg-icon class="icon-btn" id="min" icon-class="min" @click.native="winControl('minimize')"></svg-icon>
      <svg-icon class="icon-btn" id="max" icon-class="max" @click.native="winControl('maximize')"></svg-icon>
      <svg-icon class="icon-btn" id="close" icon-class="close" @click.native="winControl('close')"></svg-icon>
    </div>
  </div>
</template>

<script>
const { remote } = require("electron");
export default {
  methods: {
    winControl(action) {
      const browserWindow = remote.getCurrentWindow();
      switch (action) {
        case "minimize":
          browserWindow.minimize();
          break;
        case "maximize":
          //   if (this.isMaximized) {
          if (browserWindow.isMaximized()) {
            browserWindow.unmaximize();
          } else {
            browserWindow.maximize();
          }
          // this.isMaximized = browserWindow.isMaximized()
          this.isMaximized = !this.isMaximized;
          break;
        case "close":
          browserWindow.close();
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang='scss'>
#mytitle {
  position: fixed;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  background-color:#ececec;
  -webkit-app-region: drag;
  .app-title {
    margin-left: 5px;
    font-size: 16px;
    font-weight: 700;
  }
  .min_max_close {
    .icon-btn {
      margin: 5px;
    }
  }
}
</style>