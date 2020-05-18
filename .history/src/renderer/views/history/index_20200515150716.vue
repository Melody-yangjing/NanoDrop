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
     

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .header-container {
      border-bottom: 1px solid #ccc;
      padding: 20px 0;
      display: flex;
      justify-content: space-between;

      .left {
        display: flex;
        align-items: center;

        .center {
          margin-left: 10px;
          display: flex;
          flex-direction: column;

          .title {
            color: #0080ff;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
          }
        }
      }

      .right {
        display: flex;
        align-items: center;

        .pic {
          margin-right: 40px;
        }

        .more-icon {
          margin-right: 20px;
        }
      }

      .pic-icon {
        cursor: pointer;
        height: 40px;
        margin: 0 10px;
      }
    }
</style>