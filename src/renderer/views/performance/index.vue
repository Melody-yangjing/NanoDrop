<template>
  <div class="performance-container">
    <mainTitle title='Performance Verification'></mainTitle>  
    <div class="content">
      <el-row :gutter="20" style="text-align:right">
        <el-button size="mini" type="primary">Run</el-button>
      </el-row>

      <div class="mainContain">
        <el-row :gutter="20">
          <p>PV1 Performance Verification Solution</p>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="14" style="margin-right:10%">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Target#1 Abs" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="Target#2 Abs" name="2">
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
            </el-collapse>
          </el-col>
          <el-col :span="5">
            <el-steps direction="vertical" finish-status="success" space="80px">
              <el-step title="Enter target 1"></el-step>
              <el-step title="Enter target 2"></el-step>
              <el-step title="Enter target 3"></el-step>
            </el-steps>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import mainTitle from "@/components/mainTitle/index";
export default {
  components: {
    mainTitle
  },
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang='scss'>
.performance-container {
  .content {
    padding: 20px;
  }
}
.mainContain {
  padding: 0 60px;
}


</style>