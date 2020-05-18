<template>
  <div class="history-container">
    <div class="header-container">
      <div class="lrft">
        <svg-icon icon-class="left" class="left-icon" @click.native="$router.back()" />
        <span class="title">History</span>
      </div>
      <svg-icon icon-class="tick" class="icon-btn" />
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
  display: flex;
  align-items: center;
  .left-icon {
    width: 2rem !important;
    height: 2rem !important;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
      color: #0080ff;
    }
  }
  .title {
    color: #0080ff;
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
  }
}
</style>