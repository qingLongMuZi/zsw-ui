<template>
  <div>
    <p>行布局</p>
    <ZuiRow>
      <span>模块1</span>
      <span>模块2</span>
      <span>模块3</span>
      <span>模块4</span>
      <span>模块5</span>
    </ZuiRow>
    <ZuiRow :wrap="true">
      <span>模块1</span>
      <span>模块2</span>
      <span>模块3</span>
      <span>模块4</span>
      <span>模块5</span>
    </ZuiRow>
    <ZuiRow :wrap="true" justifyContent="space-between">
      <span>模块1</span>
      <span>模块2</span>
      <span>模块3</span>
      <span>模块4</span>
      <span>模块5</span>
    </ZuiRow>
    <ZuiRow :wrap="true" justifyContent="space-around">
      <span>模块1</span>
      <span>模块2</span>
      <span>模块3</span>
      <span>模块4</span>
      <span>模块5</span>
    </ZuiRow>
    <ZuiRow :wrap="true" justifyContent="center">
      <span>模块1</span>
      <span>模块2</span>
      <span>模块3</span>
      <span>模块4</span>
      <span>模块5</span>
    </ZuiRow>
  </div>
</template>

<script lang="ts" setup>
  import { ZuiRow } from "zsw-ui"

  defineOptions({
    name: "Row"
  })

</script>

<style lang="less" scoped>
  span{
    width: 30%;
    text-align: center;
    background-color: #ccc;
    margin: 5px 0;
  }
</style>