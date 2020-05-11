<template>
  <div>
    <!-- 内容 -->
    <div class="content">
      <div
        v-for="item in MainDataList"
        :key="item.title"
        class="hover-style"
        @click="handleClick(item.path)"
      >
        <img :src="item.url" />
        <p>{{item.title}}</p>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <span class="hover-style" @click>
        <svg-icon icon-class="history"></svg-icon>
        <span>History</span>
      </span>
      <span class="hover-style" @click>
        <svg-icon icon-class="brightness_high"></svg-icon>
        <span>Performance</span>
      </span>
      <span class="hover-style" @click>
        <svg-icon icon-class="command"></svg-icon>
        <span>Pedestal Image</span>
      </span>
      <span class="hover-style" @click>
        <svg-icon icon-class="setting"></svg-icon>
        <span>Settings</span>
      </span>
      <span class="hover-style" @click>
        <svg-icon icon-class="help"></svg-icon>
        <span>Help</span>
      </span>
    </div>
  </div>
</template>
<script>
  import MainDataList from "@/data/mainData.json";
  export default {
    data () {
      return {
        MainDataList
      }
    }
  }
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.dashboard {
  &-container {
    padding: 15px;
    background-color: #f0f2f5;
  }
  &-text {
    font-size: 14px;
    line-height: 22px;
    padding-bottom: 15px;
  }
}
.echarts {
  width: 100%;
  height: 100%;
}
.box-card {
  height: 108px;
}
.chart {
  height: 350px;
}
.section {
  padding: 20px;
  background-color: white;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.box-card > div > div > .svg-icon {
  width: 4em;
  height: 4em;
  color: #34bfa3;
}
.card-panel-text {
  padding-top: 10px;
  font-size: 16px;
  color: gray;
}
.card-panel-num {
  padding-top: 10px;
  font-size: 20px;
  font-weight: bold;
}
</style>
