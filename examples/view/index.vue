<template>
  <div>
    <ul>
      <router-link to="/button" custom v-slot="{navigate}">
        <li @click="navigate">按钮</li>
      </router-link>
      <router-link to="/icon" custom v-slot="{navigate}">
        <li @click="navigate">icon图标</li>
      </router-link>
      <router-link to="/row" custom v-slot="{navigate}">
        <li @click="navigate">行布局</li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  defineOptions({
    name: "Home"
  })
</script>

<style lang="less" scoped>
  ul{
    list-style: none;
    padding: 0;
    li{
      line-height: 40px;
      font-size: 18px;
      color: #666;
    }
  }
</style>