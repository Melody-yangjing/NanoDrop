<template>
  <div class="history-container">
    <div class="header-container">
      <div class="left">
        <svg-icon icon-class="left" class="left-icon" @click.native="$router.back()" />
        <span class="title">UV-Vis Mesurement</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header-container {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    .title {
      color: #0080ff;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }

  }

}
</style>