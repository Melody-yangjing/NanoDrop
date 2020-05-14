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
        <svg-icon icon-class="End-Experiment" class="icon-btn" />
        <el-input v-model="input" placeholder="请输入内容" style="width:100px"></el-input>
      </div>
      <div class="right">
        <div class="pic">
          <img src="@/assets/End-Experiment-1.png" alt="">
        </div>
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