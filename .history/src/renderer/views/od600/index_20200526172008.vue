<template>
  <div class="od66-container">
      od66-container
  </div>
</template>

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
        {url:'/src/renderer/assets/Chemometric.png',title:'dsDNA'},
        {url:'/src/renderer/assets/Chemometric.png',title:'ssDNA'},
        {url:'/src/renderer/assets/Chemometric.png',title:'RNA'},
        {url:'/src/renderer/assets/Chemometric.png',title:'Microarray'},
        {url:'/src/renderer/assets/Chemometric.png',title:'Custom Factor'},
        {url:'/src/renderer/assets/Chemometric.png',title:'Oligo DNA'},
        {url:'/src/renderer/assets/Chemometric.png',title:'Oligo RNA'},
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
   align-items: center;
   .box{
     width: 25%;
     display: flex;
     align-items: center;
     flex-direction: column;
   }
 }
</style>