<template>
  <div class="uv-container">
    <div class='fr'>
      <svg-icon icon-class="question" />
      <svg-icon icon-class="tick" />
    </div>
    <svg-icon icon-class="left" class="left-icon" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.uv-container {
  .fr{
    float: right;
  }
  .left-icon {
    width: 2rem !important;
    height: 2rem !important;
  }
}
</style>