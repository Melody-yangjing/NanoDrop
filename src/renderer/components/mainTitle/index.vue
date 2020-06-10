<template>
  <div>
    <div class="fr">
      <svg-icon icon-class="question" class="icon-btn" v-if='showCenterBottom'/>
      <svg-icon icon-class="tick" class="icon-btn"  />
    </div>
    <div class="main-title-container">
      <div class="left">
        <svg-icon icon-class="left" class="left-icon" @click.native="$router.back()" />
        <div class="main-title-center">
          <span class="title">{{title}}</span>
          <div class="center-bottom" v-if='showCenterBottom'>
            <svg-icon icon-class="End-Experiment" class="icon-btn" style="margin-right:10px" />
            <span style="width:100px;padding-left:10px;border-left:1px solid #bbb;">sample</span>
          </div>
        </div>
      </div>
      <div class="right" v-if='showCenterBottom'>
        <div class="pic">
          <img src="@/assets/End-Experiment-1.png" class="pic-icon" @click="handleClick" />
          <img src="@/assets/End-Experiment-2.png" class="pic-icon" @click="handleClick" />
          <img src="@/assets/End-Experiment-3.png" class="pic-icon" @click="handleClick" />
        </div>
        <el-popover
          ref="popover"
          trigger="click"
        >
          <span class="pop-item"><svg-icon icon-class="checked" class="icon" /><span>Export</span></span>
          <span class="pop-item"><svg-icon icon-class="checked" class="icon" /><span>Print</span></span>
          <span class="pop-item"><svg-icon icon-class="checked" class="icon" /><span>Auto naming</span></span>
        </el-popover>
        <svg-icon v-popover:popover icon-class="more" class="more-icon" />
      </div>
    </div>
    <el-dialog
      title="Blanking"
      :visible.sync="dialogVisible"
      width="30%"
      center
      @close="closeDailog"
    >
      <el-progress :show-text="false" :stroke-width="20" :percentage="percentage"></el-progress>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dialogVisible: false,
      percentage: 2,
      showCenterBottom:true,
    };
  },
  created() {
    const arr = ['Custom Method','History','Performance Verification','pedestal','settings','help']
    if (arr.lastIndexOf(this.title)!= -1) {
        this.showCenterBottom = false
    }

  },
  mounted() {},
  methods: {
    handleClick() {
      this.dialogVisible = true;
      const timeId = setInterval(() => {
        this.percentage += 2;
        if (this.percentage === 100) {
          clearInterval(timeId);
          this.dialogVisible = false;
        }
      }, 100);
      this.percentage = 0;
    },
    closeDailog() {
      this.percentage = 0;
    }
  }
};
</script>

<style lang='scss' scoped>
.fr {
  height: 30px;
  line-height: 30px;
  text-align: right;
  margin-right: 10px;
  .icon-btn {
    margin-right: 20px;
  }
}

.main-title-container {
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;

    .main-title-center {
      margin-left: 20px;
      display: flex;
      flex-direction: column;

      .title {
        color: #0080ff;
        font-size: 20px;
        font-weight: 700;
      }
      .center-bottom{
        margin-top: 10px;

      }
      .center-content {
        padding-left: 5px;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .pic {
      margin-right: 40px;
    }

    .more-icon {
      margin-right: 20px;
    }
  }

  .pic-icon {
    cursor: pointer;
    height: 40px;
    margin: 0 10px;
  }
}
.pop-item{
  display: block;
  padding: 10px 0;
  span{
    margin-left: 5px;
  }
}
</style>