<template>
  <div class="app-container">
    <div class="user">
      <strong>{{ user.name }}</strong>
      <br />
      <small>{{ user.dept }} &nbsp;&nbsp; {{ user.roles }}</small>
    </div>
    <el-row class="user-content" style>
      <el-col :span="6" class="profile">
        <img class="user-avatar" src="@/assets/img/avatar.gif" />
        <br />
        <p>
          <span class="title">
            <i class="el-icon-phone"></i>
            &nbsp;&nbsp;{{ user.phone }}
          </span>
        </p>
        <p>
          <span class="title">
            <i class="el-icon-message"></i>
            &nbsp;&nbsp;{{ user.email }}
          </span>
        </p>
        <p>
          <span class="title">
            <i class="el-icon-open"></i>
            &nbsp;&nbsp;{{ user.status == '1'?'启用' : '禁用' }}
          </span>
        </p>
        <p>
          <span class="title">
            <i class="el-icon-location-outline"></i>&nbsp;&nbsp;上海市浦东大道290弄
          </span>
        </p>
      </el-col>
      <el-col :span="18" style="padding-left:10px;">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="个人资料" name="profile"></el-tab-pane>
          <el-tab-pane label="最近活动" name="timeline"></el-tab-pane>
          <el-tab-pane label="修改密码" name="updatePwd"></el-tab-pane>
        </el-tabs>
        
        <el-timeline :reverse="reverse">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.createTime"
          >{{activity.logname}}</el-timeline-item>
        </el-timeline>

      </el-col>
    </el-row>
    <h1>test</h1>
    hahah
  </div>
</template>


<script>
import { queryByUser } from "@/api/system/log";

export default {
    naem:'timeline',
  data() {
    return {
      activeName: "timeline",
      user: {},
      reverse: false,
      activities: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.user = this.$store.state.user.profile;
      this.queryByUser();
    },
    handleClick(tab, event) {
      this.$router.push({ path: "/account/" + tab.name });
    },
    queryByUser() {
      queryByUser()
        .then(response => {
          console.log(response);
          this.activities = response.data;
        })
        .catch(err => {
          this.$message({
            message: err,
            type: "error"
          });
        });
    }
  }
};
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
@import "~@/styles/common.scss";
</style>

