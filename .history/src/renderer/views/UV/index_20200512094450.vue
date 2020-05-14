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
    height: 50px;
    float: right;
    svg-icon{
      margin-right: 5px;
    }
  }
  .left-icon {
    width: 2rem !important;
    height: 2rem !important;
  }
}
</style>