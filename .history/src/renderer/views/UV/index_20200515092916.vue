<template>
  <div class="uv-container">
    <div class="fr">
      <svg-icon icon-class="question" class="icon-btn" />
      <svg-icon icon-class="tick" class="icon-btn" />
    </div>
    <div class="header-container">
      <div class="left">
        <svg-icon icon-class="left" class="left-icon" @click.native='$router.back()' />
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
          <img src="@/assets/End-Experiment-1.png" class="pic-icon" @click='handleClick' />
          <img src="@/assets/End-Experiment-2.png" class="pic-icon" @click='handleClick' />
          <img src="@/assets/End-Experiment-3.png" class="pic-icon" @click='handleClick' />
        </div>
        <svg-icon icon-class="more" class="more-icon" />
      </div>

    </div>
      <el-input v-model="dataZoomStart" placeholder="请输入内容" @change='handleChange'></el-input>

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
      <el-table-column prop="Date" label="Date" width="180">
      </el-table-column>
      <el-table-column prop="SampleName" label="SampleName" width="180">
      </el-table-column>
      <el-table-column prop="Location" label="Location" width="180">
      </el-table-column>
      <el-table-column prop="Pathlength Used" label="Pathlength Used" width="180">
      </el-table-column>
      <el-table-column prop="Baseline" label="Baseline" width="180">
      </el-table-column>
      <el-table-column prop="Width" label="Width" width="180">
      </el-table-column>
      <el-table-column prop="Length" label="Length" width="180">
      </el-table-column>
      <el-table-column prop="Height" label="Height" width="180">
      </el-table-column>
    </el-table>


    <el-dialog title="Blanking" :visible.sync="dialogVisible" width="30%" center >
      <el-progress :show-text="false" :stroke-width="20" :percentage="percentage" ></el-progress>
    </el-dialog>


    <el-dialog title="提示" :visible.sync="dialogVisible1" width="30%" center >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
      </span>
    </el-dialog>

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
        dataZoomStart:10,
        percentage:2,
        dialogVisible1:true,
        dialogVisible: false,
        timeLineOption: {},
        timeLoading: false,
        lineList,
        Pathlength: '',
        Wavelength: '',
        Correction: '',
        tableData: [{
          Date: '2018-09-09',
          SampleName: 'Blank',
          Location: 'Pedestal',
          "Pathlength Used": '1mm',
          Baseline: '',
          Width: '0.2',
          Length: '0.1',
          Height: '0.3',
        },]
      }
    },
    mounted() {
      this.setLineOption()
    },
    methods: {
      handleChange(value){
        this.dataZoomStart = value
        this.setLineOption()
      },
      handleClick() {
        this.dialogVisible = true
        const timeId = setInterval(()=>{
          this.percentage+=2
          if (this.percentage === 100) {
            clearInterval(timeId)
            this.dialogVisible = false
            
          }
        },100)
        this.percentage = 0
      },
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
            axisLine:false,

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
            top: '10%',
            bottom: '90px',
            width: "auto", //图例宽度
          },
          dataZoom: [
            {
              type: "slider",
              start: this.dataZoomStart,
              end: 20
            }
          ],
          markLine:{
            data:[{
                yAxis: 420
            }, {
                yAxis: 110
            }],
            label:{},
            lineStyle: {
                normal: {
                    color: '#2ea9fb'
                }
            }
          }
        }
      },
    }
  }

</script>

<style lang="scss">
  .el-progress{
    line-height: 4;
  }
  .el-dialog {
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }

  .el-dialog .el-dialog__body {
    flex: 1;
    overflow: auto;
  }

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
      cursor: pointer;

      &:hover {
        color: #0080ff;
      }
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
        cursor: pointer;
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