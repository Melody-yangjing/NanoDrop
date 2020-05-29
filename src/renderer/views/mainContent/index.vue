<template>
  <div>
    <img src="/src/renderer/assets/logo.png" style="margin-top:20px">
    <!-- 内容 -->
    <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleTabsChange" >
        <el-tab-pane
          v-for="(item,index) in DataList"
          :key="index"
          :label="item.label"
          :name="item.name"
          style="height:500px"
        >
          <component :is="item.content"></component>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <span class="hover-style" @click="bottomClick('history')">
        <svg-icon icon-class="history"></svg-icon>
        <span>History</span>
      </span>
      <span class="hover-style" @click="bottomClick('Performance')">
        <svg-icon icon-class="brightness_high"></svg-icon>
        <span>Performance</span>
      </span>
      <span class="hover-style" @click="bottomClick('Pedestal')">
        <svg-icon icon-class="command"></svg-icon>
        <span>Pedestal Image</span>
      </span>
      <span class="hover-style" @click="bottomClick('Settings')">
        <svg-icon icon-class="setting"></svg-icon>
        <span>Settings</span>
      </span>
      <span class="hover-style" @click="bottomClick('Help')">
        <svg-icon icon-class="help"></svg-icon>
        <span>Help</span>
      </span>
    </div>
  </div>
</template>
<script>
import MainDataList from "@/data/mainData.json";

import NUCLEC from "@/views/nuclecAcids";
import PROTEINS from "@/views/proteins";
import OD600 from "@/views/od600";
import CUSTOM from "@/views/custom";
import KINETICS from "@/views/kinetics";
export default {
  data() {
    return {
      MainDataList,
      activeName: "Nuclec",
      DataList: [
        {
          label: "NUCLEC ACIDS",
          name: "Nuclec",
          content: NUCLEC
        },
        {
          label: "PROTEINS",
          name: "Proteins",
          content: PROTEINS
        },
        {
          label: "OD600",
          name: "Od600",
          content: OD600
        },
        {
          label: "CUSTOM",
          name: "Custom",
          content: CUSTOM
        },
        {
          label: "KINETICS",
          name: "Kinetics",
          content: KINETICS
        }
      ]
    };
  },
  created(){
    if(localStorage.getItem('activeName')){
      this.activeName = localStorage.getItem('activeName')
    }else{
      localStorage.setItem('activeName',this.activeName)
    }
  },
  methods: {
    handleTabsChange(tab, event) {
      localStorage.setItem('activeName',tab.name)
    },
    bottomClick(type) {
      switch (type) {
        case "history":
          this.$router.push({ path: "history" });
          break;
        case "Performance":
          this.$router.push({ path: "performance" });
          break;
        case "Pedestal":
          this.$router.push({ path: "pedestal" });
          break;
        case "Settings":
          this.$router.push({ path: "settings" });
          break;
        case "Help":
          this.$router.push({ path: "help" });
          break;

        default:
          break;
      }
    },
    handleClick(path) {
      this.$router.push({ path });
    }
  }
};
</script>


<style lang="scss">
.el-tabs__header{
  margin: 0 32px 15px;
}
.el-tabs__item{
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  padding: 0 60px;
  box-sizing: content-box;
}
.el-tabs__nav-wrap::after{
  background-color:transparent;
}
.content{
  padding: 20px;
}
.bottom {
  display: flex;
  justify-content: center;
  color: #666;
  .hover-style {
    margin: 0 60px;
    span{
      margin: 0 20px;
    }
  }
}

.hover-style {
  cursor: pointer;
  &:hover {
    color: rgb(64, 144, 250);
  }
}
</style>