<template>
  <div>
    <p>内置图标</p>
    <h1>基础用法</h1>
    <ZuiRow wrap justifyContent="flex-start">
      <div class="item">
        <ZuiAllIcon/>
        <p>ZuiAllIcon</p>
      </div>
      <div class="item">
        <ZuiBookmarkIcon/>
        <p>ZuiBookmarkIcon</p>
      </div>
      <div class="item">
        <ZuiCloseIcon/>
        <p>ZuiCloseIcon</p>
      </div>
      <div class="item">
        <ZuiCameraIcon/>
        <p>ZuiCameraIcon</p>
      </div>
      <div class="item">
        <ZuiLoveIcon/>
        <p>ZuiLoveIcon</p>
      </div>
    </ZuiRow>
  </div>
</template>

<script lang="ts" setup>
  import { 
    ZuiIcon,
    ZuiRow,
    ZuiAllIcon,
    ZuiBookmarkIcon,
    ZuiCloseIcon,
    ZuiCameraIcon,
    ZuiLoveIcon,
  } from "zsw-ui"

  defineOptions({
    name: 'Icon'
  })

</script>

<style lang="less" scoped>
.item{
  text-align: center;
  margin: 10px;
  p{
    margin: 0;
    padding: 0;
    height: auto;
    line-height: normal;
  }
}
</style>