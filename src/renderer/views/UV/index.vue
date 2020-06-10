<template>
  <div class="uv-container">
    <mainTitle title='UV-Vis'></mainTitle>
    <div class="input-box">
      <el-input v-model="dataZoomStart" class="inp Start" placeholder="请输入：λ Start" @change="handleChangeStart"
        style="width: 130px;"></el-input>
      <el-input v-model="dataZoomEnd" class="inp End" placeholder="请输入：λ End" @change="handleChangeEnd"
        style="width: 130px;"></el-input>
      <el-input v-model="Abs" class="inp Abs" placeholder="请输入：λ Abs" @change="handleChangeAbs" style="width: 130px;">
      </el-input>
    </div>

    <info-line :id="'timeLine'" :loading="timeLoading" :optRenderer="'canvas'" :option="timeLineOption"
      style="height: 400px" @markLineChange="markLineChange" @showLengend='showLengend' :position="position"
      :draggable='draggable' />
    <div class="switch-box">
      <el-switch v-model="Pathlength" active-color="#0080ff" active-text="Automated Pathlength" inactive-color="#ccc">
      </el-switch>
      <el-switch v-model="Wavelength" active-color="#0080ff" active-text="Analytical Wavelength(nm) "
        inactive-color="#ccc"></el-switch>
      <el-switch v-model="Correction" active-color="#0080ff" active-text="Baseline Correction(nm) "
        inactive-color="#ccc"></el-switch>
    </div>


    <div style="padding: 20px;">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="Date" label="Date" width="180">
        </el-table-column>
        <el-table-column prop="SampleName" label="SampleName" width="180">
        </el-table-column>
        <el-table-column prop="Location" label="Location">
        </el-table-column>
        <el-table-column prop="Pathlength" label="Pathlength Used">
        </el-table-column>
        <el-table-column prop="Baseline" label="Baseline">
        </el-table-column>
      </el-table>
    </div>


    <el-dialog title="Instrument Self-Test" :visible.sync="dialogVisible1" width="30%" center>
      <p style="text-align: center;">Initializing,please DO NOT lift the arm</p>
    </el-dialog>
  </div>
</template>



<script>
  import infoLine from "@/views/echarts/line.vue";
  import lineList from "../../data/lindData.json";
  import lineData2 from '../../data/lineData2';
  import mainTitle from '@/components/mainTitle'
  export default {
    name: "dataInfo",
    components: {
      infoLine,
      mainTitle
    },
    data() {
      return {
        draggable: true,
        lengendFlag: false,
        dataZoomStart: null,
        dataZoomEnd: null,
        Abs: null,
        dialogVisible1: true,
        timeLineOption: {},
        timeLoading: false,
        lineList,
        lengendData: ['line1'],
        lineData2,
        Pathlength: "",
        Wavelength: "",
        Correction: "",
        position: 110,
        tableData: [
          {
            Date: "2018-09-09",
            SampleName: "Blank",
            Location: "Pedestal",
            "Pathlength Used": "1mm",
            Baseline: "",
            Width: "0.2",
            Length: "0.1",
            Height: "0.3"
          }
        ],

      };
    },
    mounted() {
      this.setLineOption();
    },
    methods: {
      handleChangeEnd(v) {
        this.dataZoomEnd = v;
        this.setLineOption();
      },
      handleChangeAbs(v) {
        this.Abs = v;
        this.setLineOption();
      },
      handleChangeStart(v) {
        this.dataZoomStart = v;
        this.setLineOption();
      },

      setLineOption(p) {
        console.log(this.dataZoomStart);
        this.timeLineOption = {
          xAxis: {
            name: "Wavelength (nm)",
            nameLocation: "middle",
            nameGap: 30,
            type: "category",
            minorTick: {
              show:true
            },

            axisTick: {
              alignWithLabel: true,
              length: 5
            },
            data: this.lineList.map(item => {
              return item[0];
            })
          },
          yAxis: {
            id: "2",
            name: "10mm Absorbance",
            type: "value",
            position: "left",
            nameLocation: "middle",
            nameGap: 40,
            nameRotate: 90,
            splitLine: false,
          },
          legend: {
            show: this.lengendFlag,
            data: ["line1"],
            left: "left",
            top: 0
          },
          series: [
            {
              name: "line1",
              data: this.lineList.map(item => {
                return item[1];
              }),
              type: "line",
              smooth: true,
              lineStyle: {
                color: "#0080ff"
              },
              markLine: {
                data: [
                  {
                    yAxis: this.Abs || 110,
                    lineStyle: {
                      color: "deeppink"
                    }
                  },
                  {
                    xAxis: this.dataZoomStart || 33,
                    lineStyle: {
                      color: "green"
                    }
                  },
                  {
                    xAxis: this.dataZoomEnd || 40,
                    lineStyle: {
                      color: "blue"
                    }
                  }
                ]
              }
            }
          ],
          tooltip: {
            trigger: "axis",
            show: true
          },
          grid: {
            top: "5%",
            bottom: "90px",
            width: "auto" //图例宽度
          },
          dataZoom: [
            {
              show: true,
              type: "slider",
              start: 0,
              end: 100
            },
            {
              type: 'slider',
              show: true,
              yAxisIndex: [0],
              left: '93%',
              start: 0,
              end: 100
            },
          ]
        };
      },
      markLineChange(param) {
        this.Abs = param;
      },
      showLengend(param) {
        if (param) {
          this.lengendFlag = true
          this.setLineOption()
        }
      }
    },
    watch: {
      Abs(a, b) {
      }
    }
  };
</script>

<style lang="scss">
  .el-progress {
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

    .switch-box {
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .input-box {
      margin: 0 auto;
      width: 420px;
      display: flex;
      justify-content: space-around;

      .inp {
        margin: 10px 0;
      }
    }
  }

  .Start {
    .el-input__inner {
      border: 1px green solid;
    }
  }

  .End {
    .el-input__inner {
      border: 1px solid blue;
    }
  }

  .Abs {
    .el-input__inner {
      border: 1px deeppink solid;
    }
  }
</style>