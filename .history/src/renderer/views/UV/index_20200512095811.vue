<template>
  <div class="uv-container">
    <div class="fr">
      <svg-icon icon-class="question" class="icon-btn" />
      <svg-icon icon-class="tick" class="icon-btn" />
    </div>
    <div class="header-container">
      <svg-icon icon-class="left" class="left-icon" />
      <div class="center">
        <span class="title">UV-Vis Mesurement</span>
        <svg-icon icon-class="tick" class="icon-btn" />
        <el-input v-model="input" placeholder="请输入内容" size="mini"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.uv-container {
  overflow: auto;
  .fr {
    height: 30px;
    line-height: 30px;
    text-align: right;
    .icon-btn {
      margin-right: 10px;
    }
  }
  .left-icon {
    width: 2rem !important;
    height: 2rem !important;
  }
}
</style>