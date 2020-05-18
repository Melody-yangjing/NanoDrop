<template>
  <div class="history-container">
    <div class="header-container">
      <svg-icon icon-class="left" class="left-icon" @click.native="$router.back()" />
      <span class="title">UV-Vis Mesurement</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.header-container {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  .left-icon {
    width: 2rem !important;
    height: 2rem !important;
    cursor: pointer;

    &:hover {
      color: #0080ff;
    }
  }
  .title {
    color: #0080ff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
}
</style>