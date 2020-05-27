<template>
  <tabContent :dataList="dataList"></tabContent>
</template>

<script>
import tabContent from "@/components/tabContent";
export default {
  components: {
    tabContent
  },
  data() {
    return {
      dataList: [
        { url: "/src/renderer/assets/Chemometric.png", title: "OD600" }
      ]
    };
  }
};
</script>
