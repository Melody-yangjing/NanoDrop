<template>
  <div class="protenis-container">
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
        {url:'/src/renderer/assets/End-Experiment-1.png',title:'Protein BCA'},
        {url:'/src/renderer/assets/End-Experiment-1.png',title:'Protein Bradford'},
        {url:'/src/renderer/assets/End-Experiment-1.png',title:'Protein Lowry'},
        {url:'/src/renderer/assets/End-Experiment-1.png',title:'Protein pierce 660'},
        {url:'/src/renderer/assets/End-Experiment-1.png',title:'Protein A280'},
        {url:'/src/renderer/assets/End-Experiment-1.png',title:'Proteins & Labels'},
        {url:'/src/renderer/assets/End-Experiment-1.png',title:'Protein A205'},
      ]
    }
  }
}
</script>

<style lang='scss'>
 .protenis-container{
   width: 100%;
   height:100%;
   display: flex;
   flex-wrap: wrap-reverse;
     justify-content: flex-start;

   .box{
     width: 25%;
     display: flex;
     align-items: center;
   align-items: center;

     flex-direction: column;
   }
 }
</style>









