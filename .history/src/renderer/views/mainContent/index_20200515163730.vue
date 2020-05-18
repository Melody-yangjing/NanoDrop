<template>
  <div>
    <!-- 内容 -->
    <div class="content">
      <div v-for="item in MainDataList" :key="item.title" class="hover-style" @click="handleClick(item.path)">
        <img :src="item.url" />
        <p>{{item.title}}</p>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <span class="hover-style" @click='bottomClick("history")'>
        <svg-icon icon-class="history"></svg-icon>
        <span>History</span>
      </span>
      <span class="hover-style" @click='bottomClick("Performance")'>
        <svg-icon icon-class="brightness_high"></svg-icon>
        <span>Performance</span>
      </span>
      <span class="hover-style" @click='bottomClick("Pedestal")'>
        <svg-icon icon-class="command"></svg-icon>
        <span>Pedestal Image</span>
      </span>
      <span class="hover-style" @click='bottomClick("Settings")'>
        <svg-icon icon-class="setting"></svg-icon>
        <span>Settings</span>
      </span>
      <span class="hover-style" @click='bottomClick("Help")'>
        <svg-icon icon-class="help"></svg-icon>
        <span>Help</span>
      </span>
    </div>
  </div>
</template>
<script>
  import MainDataList from "@/data/mainData.json";
  export default {
    data() {
      return {
        MainDataList
      };
    },
    methods: {
      bottomClick(type) {
        switch (type) {
          case 'history':
            this.$router.push({path:'history'})
            break;
          case 'Performance':
            this.$router.push({path:'performance'})
            break;
          case 'Pedestal':
            this.$router.push({path:'pedestal'})
            break;
          case 'Settings':
            this.$router.push({path:'settings'})
            break;
          case 'Help':
            this.$router.push({path:'performance'})
            break;

          default:
            break;
        }
      },
      handleClick(path) {
        this.$router.push({ path });
      }
    }
  };
</script>


<style lang="scss">
  .content {
    display: flex;
    height: 500px;
    align-items: center;
    justify-content: center;
    text-align: center;

    div {
      margin: 40px;
    }
  }

  .bottom {
    display: flex;
    justify-content: center;

    span {
      margin: 20px;
    }
  }

  .hover-style {
    cursor: pointer;

    &:hover {
      color: rgb(64, 144, 250);
    }

  }
</style>