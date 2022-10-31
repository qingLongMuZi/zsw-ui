<template>
  <div>
    <p>常用的按钮操作</p>
    <h1>基础用法</h1>
    <p>用them、plain、round和circle来定义按钮的样式</p>
    <table cellspacing="0">
      <thead>
        <tr>
          <th>属性名</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>them</td>
          <td>颜色主题</td>
          <td>string</td>
          <td>primary/success/warning/danger/颜色值</td>
          <td>--</td>
        </tr>
        <tr>
          <td>plain</td>
          <td>是否为朴素按钮</td>
          <td>bollean</td>
          <td>--</td>
          <td>false</td>
        </tr>
        <tr>
          <td>round</td>
          <td>是否为椭圆按钮</td>
          <td>bollean</td>
          <td>--</td>
          <td>false</td>
        </tr>
        <tr>
          <td>circle</td>
          <td>是否为圆形按钮</td>
          <td>bollean</td>
          <td>--</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
    <ZuiRow wrap justifyContent="space-around">
      <ZuiBtn>default</ZuiBtn>
      <ZuiBtn them="primary">primary</ZuiBtn>
      <ZuiBtn them="success">success</ZuiBtn>
      <ZuiBtn them="warning">warning</ZuiBtn>
      <ZuiBtn them="danger">danger</ZuiBtn>
      <ZuiBtn them="#20b2aa">#20b2aa</ZuiBtn>
      <ZuiBtn them="rgb(154, 205, 50)">rgb(154, 205, 50)</ZuiBtn>
      <ZuiBtn them="rgba(123, 104, 238,0.5)">rgba(123, 104, 238,0.5)</ZuiBtn>
    </ZuiRow>
    <ZuiRow wrap justifyContent="space-around">
      <ZuiBtn plain>plain</ZuiBtn>
      <ZuiBtn them="primary" plain>primary</ZuiBtn>
      <ZuiBtn them="success" plain>success</ZuiBtn>
      <ZuiBtn them="warning" plain>warning</ZuiBtn>
      <ZuiBtn them="danger" plain>danger</ZuiBtn>
      <ZuiBtn them="#20b2aa" plain>#20b2aa</ZuiBtn>
      <ZuiBtn them="rgb(154, 205, 50)" plain>rgb(154, 205, 50)</ZuiBtn>
      <ZuiBtn them="rgba(123, 104, 238,0.5)" plain>rgba(123, 104, 238,0.5)</ZuiBtn>
    </ZuiRow>
    <ZuiRow wrap justifyContent="space-around">
      <ZuiBtn round>round</ZuiBtn>
      <ZuiBtn them="primary" round>primary</ZuiBtn>
      <ZuiBtn them="success" round>success</ZuiBtn>
      <ZuiBtn them="warning" round>warning</ZuiBtn>
      <ZuiBtn them="danger" round>danger</ZuiBtn>
      <ZuiBtn them="#20b2aa" round>#20b2aa</ZuiBtn>
      <ZuiBtn them="rgb(154, 205, 50)" round>rgb(154, 205, 50)</ZuiBtn>
      <ZuiBtn them="rgba(123, 104, 238,0.5)" round>rgba(123, 104, 238,0.5)</ZuiBtn>
    </ZuiRow>
    <ZuiRow wrap justifyContent="space-around">
      <ZuiBtn circle>circle</ZuiBtn>
      <ZuiBtn them="primary" circle>primary</ZuiBtn>
      <ZuiBtn them="success" circle>success</ZuiBtn>
      <ZuiBtn them="warning" circle>warning</ZuiBtn>
      <ZuiBtn them="danger" circle>danger</ZuiBtn>
      <ZuiBtn them="#20b2aa" circle>#20b2aa</ZuiBtn>
      <ZuiBtn them="rgb(154, 205, 50)" circle>rgb(154, 205, 50)</ZuiBtn>
      <ZuiBtn them="rgba(123, 104, 238,0.5)" circle>rgba(123, 104, 238,0.5)</ZuiBtn>
    </ZuiRow>
    <h1>禁用状态</h1>
    <ZuiRow wrap justifyContent="space-around">
      <ZuiBtn :disabled="true">default</ZuiBtn>
      <ZuiBtn them="primary" disabled>primary</ZuiBtn>
      <ZuiBtn them="success" disabled>success</ZuiBtn>
      <ZuiBtn them="warning" disabled>warning</ZuiBtn>
      <ZuiBtn them="danger" disabled>danger</ZuiBtn>
      <ZuiBtn them="#20b2aa" disabled>#20b2aa</ZuiBtn>
      <ZuiBtn them="rgb(154, 205, 50)" disabled>rgb(154, 205, 50)</ZuiBtn>
      <ZuiBtn them="rgba(123, 104, 238,0.5)" disabled>rgba(123, 104, 238,0.5)</ZuiBtn>
    </ZuiRow>
    <ZuiRow wrap justifyContent="space-around">
      <ZuiBtn :disabled="true">default</ZuiBtn>
      <ZuiBtn them="primary" plain disabled>primary</ZuiBtn>
      <ZuiBtn them="success" plain disabled>success</ZuiBtn>
      <ZuiBtn them="warning" plain disabled>warning</ZuiBtn>
      <ZuiBtn them="danger" plain disabled>danger</ZuiBtn>
      <ZuiBtn them="#20b2aa" plain disabled>#20b2aa</ZuiBtn>
      <ZuiBtn them="rgb(154, 205, 50)" plain disabled>rgb(154, 205, 50)</ZuiBtn>
      <ZuiBtn them="rgba(123, 104, 238,0.5)" plain disabled>rgba(123, 104, 238,0.5)</ZuiBtn>
    </ZuiRow>
    <ZuiRow wrap justifyContent="space-around">
      <ZuiBtn round disabled>round</ZuiBtn>
      <ZuiBtn them="primary" round disabled>primary</ZuiBtn>
      <ZuiBtn them="success" round disabled>success</ZuiBtn>
      <ZuiBtn them="warning" round disabled>warning</ZuiBtn>
      <ZuiBtn them="danger" round disabled>danger</ZuiBtn>
      <ZuiBtn them="#20b2aa" round disabled>#20b2aa</ZuiBtn>
      <ZuiBtn them="rgb(154, 205, 50)" round disabled>rgb(154, 205, 50)</ZuiBtn>
      <ZuiBtn them="rgba(123, 104, 238,0.5)" round disabled>rgba(123, 104, 238,0.5)</ZuiBtn>
    </ZuiRow>
    <h1>文字按钮</h1>
    <ZuiRow wrap justifyContent="space-around">
      <ZuiBtn text>round</ZuiBtn>
      <ZuiBtn them="primary" text>primary</ZuiBtn>
      <ZuiBtn them="success" text>success</ZuiBtn>
      <ZuiBtn them="warning" text>warning</ZuiBtn>
      <ZuiBtn them="danger" text>danger</ZuiBtn>
      <ZuiBtn them="#20b2aa" text>#20b2aa</ZuiBtn>
      <ZuiBtn them="rgb(154, 205, 50)" text>rgb(154, 205, 50)</ZuiBtn>
      <ZuiBtn them="rgba(123, 104, 238,0.5)" text>rgba(123, 104, 238,0.5)</ZuiBtn>
    </ZuiRow>
    <ZuiRow wrap justifyContent="space-around">
      <ZuiBtn text disabled>round</ZuiBtn>
      <ZuiBtn them="primary" text disabled>primary</ZuiBtn>
      <ZuiBtn them="success" text disabled>success</ZuiBtn>
      <ZuiBtn them="warning" text disabled>warning</ZuiBtn>
      <ZuiBtn them="danger" text disabled>danger</ZuiBtn>
      <ZuiBtn them="#20b2aa" text disabled>#20b2aa</ZuiBtn>
      <ZuiBtn them="rgb(154, 205, 50)" text disabled>rgb(154, 205, 50)</ZuiBtn>
      <ZuiBtn them="rgba(123, 104, 238,0.5)" text disabled>rgba(123, 104, 238,0.5)</ZuiBtn>
    </ZuiRow>
    <h1>加载状态</h1>
    <ZuiRow wrap justifyContent="space-around">
      <ZuiBtn>加载状态</ZuiBtn>
    </ZuiRow>
  </div>
</template>

<script lang="ts" setup>
  import { ZuiBtn, ZuiRow } from "zsw-ui"

  defineOptions({
    name: "Button"
  })

  const aa = (evt: MouseEvent) => {
    console.log(evt)
  }
</script>

<style lang="less" scoped>
  .z-row{
    margin-bottom: 20px;
  }
</style>