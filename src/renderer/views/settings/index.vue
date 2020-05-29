<template>
  <div class="settings-container">
    <headTitle title="settings"></headTitle>
    <div class="mainContain">
      <el-row :gutter="20">
        <el-col :span="14">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
            </div>
            <el-row>
              slot 方式：
              <el-select v-model="value" placeholder="请选择" style="width:60%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-row>
            <el-row style="margin:20px 0">
              slot 方式：
              <el-input v-model="input" placeholder="请输入内容" style="width:60%"></el-input>
            </el-row>
            <el-row type="flex" justify='center'>
              <el-button type="success" style="width:30%">save</el-button>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
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
      options: []
    };
  }
};
</script>

<style>
.mainContain {
  padding: 20px 60px;
}
</style>