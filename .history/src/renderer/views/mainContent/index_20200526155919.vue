<template>
  <div>
    <!-- 内容 -->
    <div>
      <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="NUCLEC ACIDS" name="NUCLEC">
          <NUCLEC />
        </el-tab-pane>
        <el-tab-pane label="PROTEINS" name="PROTEINS">
          <PROTEINS />
        </el-tab-pane>
        <el-tab-pane label="OD600" name="OD600">
          <OD600 />
        </el-tab-pane>
        <el-tab-pane label="CUSTOM" name="CUSTOM">
          <CUSTOM />
        </el-tab-pane>
        <el-tab-pane label="KINETICS" name="KINETICS">
          <KINETICS />
        </el-tab-pane>
      </el-tabs> -->
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
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
  components: {
    NUCLEC,
    PROTEINS,
    OD600,
    CUSTOM,
    KINETICS
  },
  data() {
    return {
      MainDataList,
      activeName: "NUCLEC"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
.bottom {
  display: flex;
  justify-content: center;

  span {
    margin: 20px;
  }
}

.hover-style {
  cursor: pointer;

  &:hover {
    color: rgb(64, 144, 250);
  }
}
</style>