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

    <info-line :id="'timeLine'" :loading="timeLoading" :optRenderer="'canvas'" :option="timeLineOption"
      style="height: 400px" />
    <div class="switch-box">
      <el-switch v-model="Pathlength" active-color="#0080ff" active-text='Automated Pathlength' inactive-color="#ccc">
      </el-switch>
      <el-switch v-model="Wavelength" active-color="#0080ff" active-text='Analytical Wavelength(nm) '
        inactive-color="#ccc">
      </el-switch>
      <el-switch v-model="Correction" active-color="#0080ff" active-text='Baseline Correction(nm) '
        inactive-color="#ccc">
      </el-switch>
    </div>


    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
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
        lineList,
        Pathlength: '',
        Wavelength: '',
        Correction: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    mounted() {
      this.setLineOption()
    },
    methods: {
      setLineOption() {
        this.timeLineOption = {
          xAxis: {
            name: 'Wavelength (nm)',
            nameLocation: 'middle',
            nameGap: 30,
            type: 'category',
            data: this.lineList.map(item => {
              return item[0]
            })
          },
          yAxis: {
            name: '10mm Absorbance',
            type: 'value',
            position: 'left',
            nameLocation: 'middle',
            nameGap: 40,
            nameRotate: 90,

          },
          series: [{
            data: this.lineList.map(item => {
              return item[1]
            }),
            type: 'line'
          }],
          tooltip: {
            trigger: 'axis',
            show: true
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: true },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true },
              dataZoom: { show: true }
            }
          },
          grid: {
            bottom: '90px',
            width: "auto", //图例宽度
          },
          dataZoom: [
            {
              type: "slider",
              start: 0,
              end: 20
            }
          ],
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

    .switch-box {
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid #ccc;
    }
  }
</style>