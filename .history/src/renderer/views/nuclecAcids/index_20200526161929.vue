<template>
  <div class="nuc-container">
     <div v-for="item in dataList" class="box">
       <img :src='item.url' style="width:40px"/>
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

<style>
 .box{
   display: flex;
   flex-direction: column;
 }
</style>