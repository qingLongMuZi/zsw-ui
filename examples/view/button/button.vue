<template>
  <div>
    <p>------ 按钮 ------</p>
    <ZuiBtn>普通</ZuiBtn>
    <ZuiBtn :ellipse=true>圆角</ZuiBtn>
    <ZuiBtn :circle=true width="60px" height="60px">圆形</ZuiBtn>
    <ZuiBtn them="primary">primary主题</ZuiBtn>
    <ZuiBtn them="success">success主题</ZuiBtn>
    <ZuiBtn them="warning">warning主题</ZuiBtn>
    <ZuiBtn them="danger">danger主题</ZuiBtn>
    <ZuiBtn them="#20b2aa">自定义（#20b2aa）主题</ZuiBtn>
    <ZuiBtn them="rgb(154, 205, 50)">自定义（rgb(154, 205, 50)）主题</ZuiBtn>
    <ZuiBtn them="rgba(123, 104, 238,0.5)">自定义（rgba(123, 104, 238,0.5)）主题</ZuiBtn>
    <ZuiBtn them="#b0e0e6" width="80px">指定宽度</ZuiBtn>
    <ZuiBtn :disabled="true">禁用按钮</ZuiBtn>
    <ZuiBtn  @click="aa">按钮事件</ZuiBtn>
  </div>
</template>

<script lang="ts" setup>
  import { ZuiBtn } from "zsw-ui"

  defineOptions({
    name: "Button"
  })

  const aa = (evt: MouseEvent) => {
    console.log(evt)
  }
</script>

/**

*/