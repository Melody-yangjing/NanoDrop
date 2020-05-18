<template>
  <div class="history-container">
    <head title="History"></head>
    <div class="header-container">
      <div class="left">
        <svg-icon icon-class="left" class="left-icon" @click.native="$router.back()" />
        <span class="title">History</span>
      </div>
      <svg-icon icon-class="tick" class="icon-btn" />
    </div>
    <div class="history-content">
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

   <div style="padding:20px">
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="Date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Application"
        label="Application">
      </el-table-column>
      <el-table-column
        prop="sampler"
        label="sampler">
      </el-table-column>
    </el-table>
   </div>
  </div>
</template>

<script>
import head from '@/components/head/index';
export default {
  components: {
    head
  },
  data() {
    return {
      searchVal: "",
      value1: "",
      value2: "",
      tableData:[
        {
          Date:'',
          name:'',
          Application:'',
          sampler:''
        }
      ],
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

.history-content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
</style>