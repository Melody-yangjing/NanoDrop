<template>
  <div id="mytitle" style="-webkit-app-region: drag;-webkit-user-select: none;">
    <span>hahah</span>
    <div class="min_max_close fr" style="-webkit-app-region: no-drag;">
      <svg-icon icon-class="min"></svg-icon>
      <svg-icon icon-class="max"></svg-icon>
      <svg-icon icon-class="close"></svg-icon>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#mytitle {
  width: 100%;
  height: 52px;
  background-color: paleturquoise;
  -webkit-app-region: drag;
}
</style>