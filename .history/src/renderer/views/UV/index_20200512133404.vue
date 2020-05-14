<template>
  <div class="uv-container">
    <div class="fr">
      <svg-icon icon-class="question" class="icon-btn" />
      <svg-icon icon-class="tick" class="icon-btn" />
    </div>
    <div class="header-container">
      <div class="left">
        <svg-icon icon-class="left" class="left-icon" />
        <div class="center">
          <span class="title">UV-Vis Mesurement</span>
          <div>
            <svg-icon icon-class="End-Experiment" class="icon-btn" />
            <span style="width:100px;padding-left:10px;border-left:1px solid #bbb;">sample</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="pic">
          <img src="@/assets/End-Experiment-1.png" class="pic-icon" />
          <img src="@/assets/End-Experiment-2.png" class="pic-icon" />
          <img src="@/assets/End-Experiment-3.png" class="pic-icon" />
        </div>
        <svg-icon icon-class="more" class="more-icon" />
      </div>
    </div>

    <info-line :id="'timeLine'" :loading="timeLoading" :optRenderer="'canvas'" :option="timeLineOption">
    </info-line>
  </div>
</template>

<script>
  import infoLine from '@/views/echarts/line.vue'
  import lineList from '../../data/lindData.json'

  export default {
    name: 'dataInfo',
    components: {
      infoLine,
    },
    data() {
      return {
        timeLineOption: {},
        timeLoading: false,
        lineList

      }
    },
    mounted() {
      this.setLineOption()
    },
    methods: {
      setLineOption() {
        this.timeLineOption = {
          xAxis: {
            type: 'category',
            data: this.lineList.map(item => {
              return item[0]
            })
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: this.lineList.map(item => {
              return item[1]
            }),
            type: 'line'
          }],
          dataZoom: [ {
            type: 'inside'
        }],
        }
      },
    }
  }

</script>

<style lang="scss">
  .uv-container {
    overflow: auto;

    .fr {
      height: 30px;
      line-height: 30px;
      text-align: right;

      .icon-btn {
        margin-right: 20px;
      }
    }

    .left-icon {
      width: 2rem !important;
      height: 2rem !important;
    }

    .header-container {
      border-bottom: 1px solid #ccc;
      padding: 20px 0;
      display: flex;
      justify-content: space-between;

      .left {
        display: flex;
        align-items: center;

        .center {
          margin-left: 10px;
          display: flex;
          flex-direction: column;

          .title {
            color: #0080ff;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
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
        height: 40px;
        margin: 0 10px;
      }
    }
  }
</style>