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
        { url: "/src/renderer/assets/Chemometric.png", title: "dsDNA" },
        { url: "/src/renderer/assets/Chemometric.png", title: "ssDNA" },
        { url: "/src/renderer/assets/Chemometric.png", title: "RNA" },
        { url: "/src/renderer/assets/Chemometric.png", title: "Microarray" },
        { url: "/src/renderer/assets/Chemometric.png", title: "Custom Factor" },
        { url: "/src/renderer/assets/Chemometric.png", title: "Oligo DNA" },
        { url: "/src/renderer/assets/Chemometric.png", title: "Oligo RNA" }
      ]
    };
  }
};
</script>
