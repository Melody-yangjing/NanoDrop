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
          <img src="@/assets/End-Experiment-1.png" class="pic-icon" />
          <img src="@/assets/End-Experiment-2.png" class="pic-icon" />
          <img src="@/assets/End-Experiment-3.png" class="pic-icon" />
        </div>
        <svg-icon icon-class="more" />
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

  .header-container{
    display: flex;
    .center{
      display: flex;
      flex-direction: column;
    }
    .pic-icon{
      width: 40px;
      height: 40px;
    }
  }
}
</style>