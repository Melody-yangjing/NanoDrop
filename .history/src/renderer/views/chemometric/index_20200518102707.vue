<template>
  <div class="chemometric-container">
    <headTitle title="Chemometric Methods"></headTitle>
    <el-container>
      <el-aside width="300px">
        <div class="top">
          <i class="el-icon-search" style="color:#0080ff"></i>
          <span style="width:130px;border-bottom:1px solid #0080ff;display:inline-block"></span>
          <select name="my-sel" >
              <option value="hhah">jaja</option>
          </select>
        </div>
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
.chemometric-container {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .top {
    margin-top: 20px;
    // display: flex;
    // justify-content: space-between;
  }
  select {
      width: 110px;
    border: none;
    border-bottom: 1px solid #0080ff;
    outline: none;
    background-color: #d3dce6; 
  }
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  padding: 10px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>