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

<style lang='scss'>
.od66-container {
  width: 85%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .box {
    width: 25%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>