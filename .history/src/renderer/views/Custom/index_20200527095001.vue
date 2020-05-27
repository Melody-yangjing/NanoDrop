<template>
  <div class="custom-container">
    custom
  </div>
</template>

<template>
  <div class="custom-container">
    <div v-for="item in dataList" class="box">
      <div>
        <img :src="item.url" style="width:60px;margin-bottom:20px" />
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style lang='scss'>
.custom-container {
  width: 85%;
  height: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;

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









