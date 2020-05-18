<template>
  <div class="history-container">
    <div class="header-container">
      <div class="left">
        <svg-icon icon-class="left" class="left-icon" @click.native="$router.back()" />
        <span class="title">History</span>
      </div>
      <svg-icon icon-class="tick" class="icon-btn" />
    </div>
    <div class="content">
      <el-input placeholder="请输入内容" v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scope>
.header-container {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    float: left;
    display: flex;
    align-items: center;
    .left-icon {
      width: 2rem !important;
      height: 2rem !important;
      cursor: pointer;
      margin-left: 10px;
      color: #bbb;
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
  .icon-btn {
    margin-right: 20px;
    color: #1ce389;
  }
}
</style>