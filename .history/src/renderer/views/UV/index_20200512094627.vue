<template>
  <div class="uv-container">
    <div class='fr'>
      <svg-icon icon-class="question" class="icon-btn"/>
      <svg-icon icon-class="tick" class="icon-btn"/>
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
    .icon-btn{
      margin-right: 5px;
    }
  }
  .left-icon {
    width: 2rem !important;
    height: 2rem !important;
  }
}
</style>