<template>
  <div class="tabContent-container">
    <div v-for="item in dataList" class="box">
      <div @click="handleClick(item)" class="box-item">
        <img :src="item.url" style="width:80px;margin-bottom:20px" />
        <span>{{item.title}}</span>
      </div>
    </div>
    <el-dialog
      title="Comming Soon"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
      :show-close="false"
    >
      <p style="text-align: center;">This application will be available soon.</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: false
    };
  },
  props: {
    dataList: {
      type: Array,
      default: []
    }
  },
  methods: {
    handleClick(item) {
      if (
        item.title === "Microarray" ||
        item.title === "Oligo DNA" ||
        item.title === "Oligo RNA"
      ) {
        this.centerDialogVisible = true;
      }
      console.log(item);
      this.$router.push({ path: item.path });
    }
  }
};
</script>

<style lang='scss'>
.el-dialog {
  margin-top: 0 !important;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  border-radius: 20px;
}
.tabContent-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  .box {
    width: 25%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .box-item {
      width: 50%;
      height: 50%;
      position: absolute;
      // top: 50%;
      left: 0;
      // transform: translate3d(0,-50%,0);
      cursor: pointer;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>