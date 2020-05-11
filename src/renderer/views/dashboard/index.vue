<template>
  <div class="dashboard-container" id="dashboard">
    <div class="dashboard-text">欢迎光临:{{name}} </div>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card">
          <el-col :span="12">
            <svg-icon  icon-class="documentation" ></svg-icon>
          </el-col>
          <el-col :span="12" >
            <div class="card-panel-text">{{ $t('dashboard.document') }}</div>
            <div class="card-panel-num">
              <a href="http://enilu.gitee.io/web-flash" target="_blank">Document</a>
            </div>
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <el-col :span="12">
            <svg-icon  icon-class="user" ></svg-icon>
          </el-col>
          <el-col :span="12" >
            <div class="card-panel-text">{{ $t('dashboard.newUser') }}</div>
            <div class="card-panel-num">102,400</div>
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <el-col :span="12">
            <svg-icon  icon-class="message" ></svg-icon>
          </el-col>
          <el-col :span="12" >
            <div class="card-panel-text">{{ $t('dashboard.message') }}</div>
            <div class="card-panel-num">5</div>
          </el-col>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <el-col :span="12">
            <svg-icon  icon-class="money" ></svg-icon>
          </el-col>
          <el-col :span="12" >
            <div class="card-panel-text">{{ $t('dashboard.income') }}</div>
            <div class="card-panel-num">10000</div>
          </el-col>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="chart section">
        <v-chart :options="lineData" ref="lineChart"/>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" >
      <el-col :span="12">
        <el-collapse   class="section">
          <el-collapse-item title="2019双11All in cloud低至一折" name="1">
            <div><a href="https://www.aliyun.com/1111/2019/home?userCode=alts44ap" target="_blank">点击查看详情</a></div>
          </el-collapse-item>
          <el-collapse-item title="主机爆款限时优惠" name="2">
            <div><a href="https://www.aliyun.com/acts/hotsale?userCode=alts44ap" target="_blank">点击查看详情</a> </div>
          </el-collapse-item>
          <el-collapse-item title="企业级云服务器五折优惠" name="3">
            <div><a href="https://promotion.aliyun.com/ntms/act/enterprise-discount.html?userCode=alts44ap" target="_blank">点击查看详情</a> </div>
          </el-collapse-item>
          <el-collapse-item title="全民云计算云主机低至4折" name="4">
            <div><a href="https://promotion.aliyun.com/ntms/act/qwbk.html?userCode=alts44ap" target="_blank">点击查看详情</a> </div>
          </el-collapse-item>
          <el-collapse-item title="商标注册服务低至8折" name="5">
            <div><a href="https://tm.aliyun.com/?userCode=alts44ap" target="_blank">点击查看详情</a> </div>
          </el-collapse-item>
          <el-collapse-item title="云短信产品低至8折" name="6">
            <div><a href="https://www.aliyun.com/acts/alicomcloud/new-discount?userCode=alts44ap" target="_blank">点击查看详情</a> </div>
          </el-collapse-item>



        </el-collapse>
      </el-col>

      <el-col :span="12">
        <v-chart :options="barData" class="chart section" ref="barChart"/>
      </el-col>
    </el-row>

    <el-row :gutter="20" >
      <el-col :span="12">
        <v-chart :options="pieData" class="chart section" ref="pieChart"/>
      </el-col>
      <el-col :span="12">
        <el-table :data="tableData" class="section">
          <el-table-column
            prop="date"
            :label="$t('dashboard.date')"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            :label="$t('dashboard.name')"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            :label="$t('dashboard.addr')">
          </el-table-column>
        </el-table>

      </el-col>

    </el-row>
  </div>
</template>
<script>
    import { getList } from '@/api/system/notice'
    import { mapGetters } from 'vuex'
    import ECharts from 'vue-echarts/components/ECharts'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/chart/pie'
    import 'echarts/lib/chart/map'
    import 'echarts/lib/chart/radar'
    import 'echarts/lib/chart/scatter'
    import 'echarts/lib/chart/effectScatter'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/polar'
    import 'echarts/lib/component/geo'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    import 'echarts/lib/component/visualMap'
    import 'echarts/lib/component/dataset'
    import 'echarts/map/js/world'
    import 'zrender/lib/svg/svg'
    import elementResizeDetectorMaker from "element-resize-detector"

    export default {

  name: 'dashboard',
  components: {
    chart: ECharts
  },
  data() {
    const data = []
    for (let i = 0; i <= 360; i++) {
      const t = i / 180 * Math.PI
      const r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    return {
      notice: [],
      lineData: {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [this.$t('dashboard.email'), this.$t('dashboard.ad'), this.$t('dashboard.vedio'), this.$t('dashboard.direct'), this.$t('dashboard.searchEngine')]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [this.$t('common.week.mon'), this.$t('common.week.tue'), this.$t('common.week.wed'), this.$t('common.week.thu'), this.$t('common.week.fri'), this.$t('common.week.sat'), this.$t('common.week.sun')]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: this.$t('dashboard.email'),
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: this.$t('dashboard.ad'),
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: this.$t('dashboard.vedio'),
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: this.$t('dashboard.direct'),
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: this.$t('dashboard.searchEngine'),
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      barData: {
        xAxis: {
          type: 'category',
          data: [this.$t('common.week.mon'), this.$t('common.week.tue'), this.$t('common.week.wed'), this.$t('common.week.thu'), this.$t('common.week.fri'), this.$t('common.week.sat'), this.$t('common.week.sun')]
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      },
      pieData: {
        title: {
          text: this.$t('dashboard.userFrom'),
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: [this.$t('dashboard.email'), this.$t('dashboard.ad'), this.$t('dashboard.vedio'), this.$t('dashboard.direct'), this.$t('dashboard.searchEngine')]
        },
        series: [
          {
            name: 'from',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: this.$t('dashboard.direct') },
              { value: 310, name: this.$t('dashboard.email') },
              { value: 234, name: this.$t('dashboard.ad') },
              { value: 135, name: this.$t('dashboard.vedio') },
              { value: 1548, name: this.$t('dashboard.searchEngine') }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
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
  computed: {
    ...mapGetters([
      'name'

    ])
  },
  created() {
    this.fetchData()
  },
  mounted(){
    //绑定echart图表跟随窗口大小自动缩放
    let that = this
    let erd = elementResizeDetectorMaker()
    erd.listenTo(document.getElementById("dashboard"),(element)=>{
      that.$nextTick(()=>{
        that.$refs.lineChart.resize()
        that.$refs.barChart.resize()
        that.$refs.pieChart.resize()
      })
    })
  },
  methods: {
    fetchData() {
      this.listLoading = true
      const self = this
      getList(self.listQuery).then(response => {
        for (var i = 0; i < response.data.length; i++) {
          var notice = response.data[i]
          self.$notify({
            title: notice.title,
            message: notice.content,
            duration: 3000
          })
        }
        self.listLoading = false
      })
    }
  }
}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
  .el-row{
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
    padding-bottom:15px;
  }
}
.echarts{
  width: 100%;
  height: 100%;
}
.box-card{
  height:108px;
}
  .chart{
    height: 350px;
  }
  .section{
    padding:20px;
    background-color: white;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }

  .box-card > div >div > .svg-icon {
    width: 4em;
    height: 4em;
    color:#34bfa3;
  }
  .card-panel-text{
    padding-top:10px;
    font-size:16px;
    color:gray;
  }
  .card-panel-num{
    padding-top:10px;
    font-size:20px;
    font-weight: bold;
  }
</style>
