<template>
  <div class="header-container">
    <el-page-header title='' @back="$router.back()" :content="title"></el-page-header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style lang='scss'>
.el-page-header__content{
  color: #409EFF;
}
.header-container {
  border-bottom: 1px solid #ccc;
  padding:20px 10px;
}
</style>