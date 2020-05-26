<template>
  <div class="nuc-container">
     <div v-for="item in dataList">
       <img :src='item.url'/>
       <span>{{item.title}}</span>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList:[
        {url:'/src/renderer/assets/Chemometric.png',title:''},
        {url:'/src/renderer/assets/Chemometric.png',title:''},
        {url:'/src/renderer/assets/Chemometric.png',title:''},
        {url:'/src/renderer/assets/Chemometric.png',title:''},
        {url:'/src/renderer/assets/Chemometric.png',title:''},
        {url:'/src/renderer/assets/Chemometric.png',title:''},
        {url:'/src/renderer/assets/Chemometric.png',title:''},
      ]
    }
  }
}
</script>

<style>

</style>