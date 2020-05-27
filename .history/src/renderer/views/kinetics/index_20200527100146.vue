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
        {
          url: "/src/renderer/assets/End-Experiment-1.png",
          title: "Protein BCA"
        },
        {
          url: "/src/renderer/assets/End-Experiment-1.png",
          title: "Protein Bradford"
        },
        {
          url: "/src/renderer/assets/End-Experiment-1.png",
          title: "Protein Lowry"
        },
        {
          url: "/src/renderer/assets/End-Experiment-1.png",
          title: "Protein pierce 660"
        },
        {
          url: "/src/renderer/assets/End-Experiment-1.png",
          title: "Protein A280"
        },
        {
          url: "/src/renderer/assets/End-Experiment-1.png",
          title: "Proteins & Labels"
        },
        {
          url: "/src/renderer/assets/End-Experiment-1.png",
          title: "Protein A205"
        }
      ]
    };
  }
};
</script>









