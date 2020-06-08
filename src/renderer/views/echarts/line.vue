<template>
  <div class="module-container" :style="{width:width}">
    <div :id="lineId" class="module-body bg" :style="{height:height,width:width}" @contextmenu="contextmenu"
      @click='showModel=false'></div>
    <div v-if="showModel" :style="{left: left, top: top}" class="model">
      <span  @click='handleClick' class="parent"><svg-icon icon-class="checked" class="icon" v-show='showMode' /><span style="margin-left: 18px;">Overlay Mode</span></span>
      <span  @click='handleClick' class="parent"><svg-icon icon-class="checked" class="icon" v-show='showMode' /><span style="margin-left: 18px;">Show CrossHairs</span></span>
      <span  @click='handleClick' class="parent"><svg-icon icon-class="checked" class="icon" v-show='showMode' /><span style="margin-left: 18px;">Show Legend</span></span>
      <span  @click='handleClick' class="parent"><svg-icon icon-class="checked" class="icon" v-show='showMode' /><span style="margin-left: 18px;">Find Peaks</span></span>
      <span  @click='handleClick' class="parent"><svg-icon icon-class="checked" class="icon" v-show='showMode' /><span style="margin-left: 18px;">Autoscale</span></span>
      <span  @click='handleClick' class="parent"><svg-icon icon-class="checked" class="icon" v-show='showMode' /><span style="margin-left: 18px;">Format X-axis</span></span>
      <span  @click='handleClick' class="parent"><svg-icon icon-class="checked" class="icon" v-show='showMode' /><span style="margin-left: 18px;">Format Y-axis</span></span>
    </div>
  </div>
</template>
<script>
  // 按照使用到的功能添加组件导入，
  import "echarts/lib/chart/line"; // 按需导入折线组件
  import "echarts/lib/chart/effectScatter"; // 拐点出闪烁，高亮
  import "echarts/lib/component/tooltip"; // 提示组件
  import "echarts/lib/component/legend"; // 图例组件
  import "echarts/lib/component/markPoint"; // 标注组件
  import "echarts/lib/component/markLine";
  import "echarts/lib/component/dataZoom";
  import "echarts/lib/component/graphic";
  import "zrender/lib/svg/svg"; // svg模式

  export default {
    name: "info-Line",
    props: {
      draggable: {
        type: Boolean,
        default: true
      },
      lineId: {
        // 折线图图表id
        type: String,
        default() {
          return "line";
        }
      },
      position: {
        type: Number,
        default: 110
      },
      height: {
        // 折线图高
        type: String,
        default() {
          return "100%";
        }
      },
      width: {
        // 折线图宽
        type: String,
        default() {
          return "100%";
        }
      },
      option: {
        // 折线图配置
        type: Object,
        importd: true // 数据
      },
      loading: {
        // 图形加载
        type: Boolean,
        default() {
          return false;
        }
      },
      enabledClick: {
        // 折线图是否配置点击事件
        type: Boolean,
        default: false
      },
      optRenderer: {
        // 渲染模式：canvas，svg
        type: String,
        default() {
          return "svg";
        }
      }
    },
    data() {
      return {
        showMode:false,
        showModel: false,
        line: null,
        empty: false,
        left: 0,
        top: 0,
      };
    },
    computed: {
      lineOption() {
        return this.option.series;
      },
      pieToolInfoStatus() {
        let arr = Object.keys(this.toolInfo);
        if (arr.length > 0) {
          return true;
        }
        return false;
      },
      opts() {
        return {
          renderer: this.optRenderer
        };
      }
    },
    watch: {
      lineOption() {
        this.option.series.length === 0
          ? (this.empty = true)
          : this.option.series[0].data.length === 0
            ? (this.empty = true)
            : (this.empty = false);
        if (this.empty) {
          this.line.clear();
          this.option.yAxis.data = [];
          this.option.xAxis.data = [];
          this.line.setOption(this.option);
        } else {
          this.drawLine();
        }
      },
    },
    mounted() {
      if (this.line === null) {
        this.line = this.$echarts.init(
          document.getElementById(this.lineId),
          null,
          this.opts
        );

        this.$chartResize([this.line]); //调用前文封装的chartResize函数，传入了一个长度为3的数组；
      }
    },
    beforeDestroy() {
      if (
        this.line !== null &&
        this.line !== "" &&
        !(typeof this.line === "undefined")
      ) {
        this.line.clear();
      }
    },
    methods: {
      handleClick(){
        this.showMode = !this.showMode
      },
      // 右击事件
      contextmenu(e) {
        this.left = (e.pageX + 30) + 'px'
        this.top = (e.pageY - 30) + 'px'
        this.showModel = true
      },
      /**
       * 折线图
       */
      drawLine() {
        const _this = this;
        if (
          this.line === null &&
          this.line !== "" &&
          !(typeof this.line === "undefined")
        ) {
          this.line = this.$echarts.init(
            document.getElementById(this.lineId),
            null,
            this.opts
          );
        }
        this.line.setOption(this.option);
        this.line.setOption({
          graphic: {
            type: "rect",
            z: 100,
            shape: {
              width: 4000,
              height: 0
              // r: 10
            },
            position: [
              0,
              _this.line.convertToPixel({ yAxisId: "2" }, _this.position)
            ],
            draggable: _this.draggable,
            style: {
              fill: "rgba(0,0,0,0.1)",
              stroke: "rgba(0,0,0,0.0)",
              lineWidth: 10
            },
            bouding: "all",
            cursor: "move",
            ondrag: function () {
              const threshold1 = _this.line.convertFromPixel(
                { yAxisId: "2" },
                this.position[1]
              );
              console.log(threshold1);
              _this.line.setOption({
                series: [
                  {
                    markLine: {
                      data: [{ yAxis: threshold1 }]
                    }
                  }
                ]
              });
              _this.$emit("markLineChange", threshold1);
            }
          }
        });
      }
    }
  };
</script>
<style lang="scss">
  .parent{
    position: relative;
    .icon{
      position: absolute;
      top:50%;
      transform: translate3d(0,-50%,0);
    }
  }
  .model {
    position: absolute;
    background-color: #ffffff;
    padding: 4px;
    box-shadow: 0 0 10px #8c939d;
    z-index: 1;
    border-radius: 10px;

    .parent {
      display: block;
      padding: 10px 0;
      cursor: pointer;

      &:hover {
        background-color: #ccc;
      }
    }
  }
</style>