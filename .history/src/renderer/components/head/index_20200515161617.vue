<template>
  <div class="header-container">
      <div class="left">
        <svg-icon icon-class="left" class="left-icon" @click.native="$router.back()" />
        <span class="title">History</span>
      </div>
      <svg-icon icon-class="tick" class="icon-btn" />
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>