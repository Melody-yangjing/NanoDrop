<template>
  <div class="chemometric-container">
    <headTitle title="Chemometric Methods"></headTitle>
    <el-container>
      <el-aside width="300px">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <span style="width:260px;border-bottom:1px solid #0080ff;display:inline-block">niao </span>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
import headTitle from "@/components/head/index";
export default {
  components: {
    headTitle
  }
};
</script>

<style lang='scss'>
.chemometric-container{
    height: 100%;
    .el-container{
        height: 100%;
    }

}
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>