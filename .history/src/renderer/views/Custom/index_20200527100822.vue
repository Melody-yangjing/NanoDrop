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
          title: "CustomMethods"
        },
        {
          url: "/src/renderer/assets/Chemometric.png",
          path:'/history',
          title: "UV-Vis"
        },
        {
          url: "/src/renderer/assets/Chemometric.png",
          path:'/history',
          title: "Chemometric Method"
        }
      ]
    };
  }
};
</script>










