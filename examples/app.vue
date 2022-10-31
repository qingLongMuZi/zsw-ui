<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>

</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  p{
    line-height: 40px;
    font-size: 14px;
    color: #666;
    padding: 0 10px;
  }
  h1{
    padding: 0 10px;
    font-size: 20px;
  }
  table{
    width: 98%;
    margin: 0 auto 20px auto;
    th{
      height: 30px;
      border-bottom: 1px solid #ddd;
      font-size: 14px;
      color: #666;
      widows: 20%;
    }
    td{
      width: 20%;
      font-size: 12px;
      text-align: center;
      word-wrap: break-word;
      border-bottom: 1px solid #ddd;
      padding: 5px 0;
    }
  }
</style>