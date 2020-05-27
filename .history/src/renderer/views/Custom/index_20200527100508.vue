<template>
  <tabContent :dataList='dataList'></tabContent>
</template>

<script>
import tabContent from '@/components/tabContent'
export default {
  components:{
    tabContent
  },
  data() {
    return {
      dataList: [
        {
          url: "/src/renderer/assets/Chemometric.png",
          path:'/history',
          title: "Protein BCA"
        },
        {
          url: "/src/renderer/assets/Chemometric.png",
          path:'/history',
          title: "Protein Bradford"
        },
        {
          url: "/src/renderer/assets/Chemometric.png",
          path:'/history',
          title: "Protein Lowry"
        },
        {
          url: "/src/renderer/assets/Chemometric.png",
          path:'/history',
          title: "Protein pierce 660"
        },
        {
          url: "/src/renderer/assets/Chemometric.png",
          path:'/history',
          title: "Protein A280"
        },
        {
          url: "/src/renderer/assets/Chemometric.png",
          path:'/history',
          title: "Proteins & Labels"
        },
        {
          url: "/src/renderer/assets/Chemometric.png",
          path:'/history',
          title: "Protein A205"
        }
      ]
    };
  }
};
</script>










