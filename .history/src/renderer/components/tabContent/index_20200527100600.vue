<template>
  <div class="tabContent-container">
    <div v-for="item in dataList" class="box">
      <div @click="handleClick(item.path)">
        <img :src="item.url" style="width:60px;margin-bottom:20px" />
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
       dataList:{
           type:Array,
           default:[]
       } 
    },
    methods: {
      handleClick(path){
        this.$router.push({path})
      }
    }

};
</script>

<style lang='scss'>
.tabContent-container {
  width: 85%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .box {
    width: 25%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      cursor: pointer;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>









