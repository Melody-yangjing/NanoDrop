<template>
  <div class="od66-container">
     <div v-for="item in dataList" class="box">
       <img :src='item.url' style="width:60px;margin-bottom:20px"/>
       <span>{{item.title}}</span>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList:[
        {url:'/src/renderer/assets/Chemometric.png',title:'OD600'},
      ]
    }
  }
}
</script>

<style lang='scss'>
 .od66-container{
   width: 100%;
   height:100%;
   display: flex;
   flex-wrap: wrap;
   .box{
     width: 25%;
     height: 100px;
     display: flex;
     align-items: center;
     flex-direction: column;
   }
 }
</style>