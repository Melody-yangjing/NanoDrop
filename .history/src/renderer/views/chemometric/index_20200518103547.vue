<template>
  <div class="chemometric-container">
    <headTitle title="Chemometric Methods"></headTitle>
    <el-container>
      <el-aside width="300px">
        <div class="top">
          <i class="el-icon-search" style="color:#0080ff"></i>
          <span style="width:130px;border-bottom:1px solid #0080ff;display:inline-block"></span>
          <el-select v-model="value" placeholder="请选择" style="display:inline-block;width:110px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
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
  },
  data() {
    return {
      value: "",
      options: [{}]
    };
  }
};
</script>

<style lang='scss'>
$mainClor:#0080ff
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
  .el-select {
    .el-input__inner {
      outline: none;
      border: none;
      border-bottom: 1px solid $$mainClor;
      background-color: transparent;
      border-radius: 0;
    }
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