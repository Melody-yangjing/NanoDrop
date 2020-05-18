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
      <el-input placeholder="请输入内容" v-model="searchVal" style="width:200px">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <div class="right">
        <el-select v-model="value1" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVal: "",
      value1: "",
      value2: "",
      options1: [
        {
          value: "test",
          label: "test"
        }
      ],
      options2: [
        {
          value: "test",
          label: "test"
        }
      ]
    };
  }
};
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
.content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
</style>