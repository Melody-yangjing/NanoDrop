<template>
  <div id="mytitle" style="-webkit-app-region: drag;-webkit-user-select: none;">
    <span class="app-title">NanoDrop QC</span>
    <div class="min_max_close" style="-webkit-app-region: no-drag;">
        <button @click.native="minClick">test</button>
      <svg-icon class="icon-btn" id="min" icon-class="min" @click.native="minClick"></svg-icon>
      <svg-icon class="icon-btn" id="max" icon-class="max" @click.native="maxClick"></svg-icon>
      <svg-icon class="icon-btn" id="close" icon-class="close" @click.native="closeClick"></svg-icon>
    </div>
  </div>
</template>

<script>
const {ipcRenderer: ipc} = require('electron');
export default {
  methods: {
    minClick() {
        console.log('hh');
        ipc.send(min)
    },
    maxClick() {
        console.log('hh');
        ipc.send(max)
    },
    closeClick() {
        console.log('hh');
        ipc.send(close)
    }
  }
};
</script>

<style lang='scss'>
#mytitle {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  background-color: paleturquoise;
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