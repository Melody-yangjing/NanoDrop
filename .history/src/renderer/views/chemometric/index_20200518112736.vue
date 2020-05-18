<template>
  <div class="chemometric-container">
    <headTitle title="Chemometric Methods"></headTitle>
    <el-container>
      <el-aside width="300px">
        <div class="top">
          <i class="el-icon-search" style="color:#0080ff"></i>
          <span
            style="width:130px;border-bottom:1px solid #0080ff;display:inline-block;height:40px"
          ></span>
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
        <div class="bottom">
          <el-button type="primary">+ Method</el-button>
        </div>
      </el-aside>
      <el-main>
        <div class="head">
          <el-button type="info" plain icon="el-icon-caret-right" style="margin-right:20px">Run</el-button>
          <svg-icon icon-class="more"></svg-icon>
        </div>
        <div class="center">
          <span>Mesurement range</span>
          <el-switch
            style="margin-left:300px"
            v-model="Automated"
            active-color="#0080ff"
            active-text="Automated Pathlength"
            inactive-color="#ccc"
          ></el-switch>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="Date" label="Date" width="180"></el-table-column>
            <el-table-column prop="name" label="name" width="180"></el-table-column>
            <el-table-column prop="Application" label="Application"></el-table-column>
            <el-table-column prop="sampler" label="sampler"></el-table-column>
          </el-table>
      </el-main>
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
      Automated: "",
      value: "",
      options: [{}]
    };
  }
};
</script>

<style lang='scss'>
$mainClor: #0080ff;
.chemometric-container {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .el-select {
    .el-input__inner {
      outline: none;
      border: none;
      border-bottom: 1px solid $mainClor;
      background-color: transparent;
      border-radius: 0;
    }
  }
  .bottom {
    position: relative;
    height: 100px;
    margin-top: 400px;
    .el-button {
      position: absolute;
      left: 50%;
      transform: translate3d(-50%, -0, 0);
    }
  }
  .head {
    text-align: right;
    .el-button {
      border-radius: 16px;
      height: 36px;
    }
  }
  .center {
    margin-top: 40px;
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
}
</style>