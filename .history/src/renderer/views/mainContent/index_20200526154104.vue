<template>
  <div>
    <!-- 内容 -->
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="NUCLEC ACIDS" name="NUCLEC">
          <NUCLEC></NUCLEC>
        </el-tab-pane>
        <el-tab-pane label="PROTEINS" name="PROTEINS">
          <PROTEINS></PROTEINS>
        </el-tab-pane>
        <el-tab-pane label="OD66" name="OD66">
          <OD66></OD66>
        </el-tab-pane>
        <el-tab-pane label="CUSTOM" name="CUSTOM">
          <CUSTOM></CUSTOM>
        </el-tab-pane>
        <el-tab-pane label="KINETICS" name="KINETICS">
          <KINETICS></KINETICS>
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

import NUCLEC from "nuclecAcids";
import PROTEINS from "proteins";
import OD66 from "od66";
import CUSTOM from "custom";
import KINETICS from "kinetics";
export default {
  components: {
    NUCLEC,
    PROTEINS,
    OD66,
    CUSTOM,
    KINETICS
  },
  data() {
    return {
      MainDataList,
      activeName: "first"
    };
  },
  methods: {
    handleClick() {},
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