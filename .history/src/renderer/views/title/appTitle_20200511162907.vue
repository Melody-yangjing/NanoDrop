<template>
  <div id="mytitle" style="-webkit-app-region: drag;-webkit-user-select: none;">
    <span class="app-title">NanoDrop QC</span>
    <div class="min_max_close" style="-webkit-app-region: no-drag;">
      <svg-icon class="icon-btn" icon-class="min"></svg-icon>
      <svg-icon class="icon-btn" icon-class="max"></svg-icon>
      <svg-icon class="icon-btn" icon-class="close"></svg-icon>
    </div>
  </div>
</template>

<script>
export default {};
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
  .app-title{
      margin-left: 5px;
      font-size: 16px;
      font-weight: 700;
  }
  .min_max_close {
      .icon-btn{
          margin: 5px;
      }
  }
}
</style>