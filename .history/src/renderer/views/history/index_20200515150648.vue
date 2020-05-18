<template>
  <div class="history-container">
    <div class="header-container">
      <div class="left">
        <svg-icon icon-class="left" class="left-icon" @click.native='$router.back()' />
        <div class="center">
          <span class="title">UV-Vis Mesurement</span>
          <div>
            <svg-icon icon-class="End-Experiment" class="icon-btn" />
            <span style="width:100px;padding-left:10px;border-left:1px solid #bbb;">sample</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="pic">
          <img src="@/assets/End-Experiment-1.png" class="pic-icon" @click='handleClick' />
          <img src="@/assets/End-Experiment-2.png" class="pic-icon" @click='handleClick' />
          <img src="@/assets/End-Experiment-3.png" class="pic-icon" @click='handleClick' />
        </div>
        <svg-icon icon-class="more" class="more-icon" />
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>