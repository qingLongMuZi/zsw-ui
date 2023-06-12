<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 48 48"
    :width="size"
    :height="size"
  >
  <path 
    stroke-linejoin="round" 
    :stroke-width="lineWidth" 
    :stroke="`${colors[0]}`" 
    :fill="`${colors[1]}`" 
    d="M10 44a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H10Z"/>
  <path 
    stroke-linejoin="round" 
    stroke-linecap="round" 
    stroke-width="4" 
    stroke="#FFF" 
    :fill="`${colors[2]}`" 
    d="M21 22V4h12v18l-6-6.273L21 22Z" 
    clip-rule="evenodd" 
    fill-rule="evenodd"/>
  <path 
    stroke-linejoin="round" 
    stroke-linecap="round" 
    stroke-width="4" 
    :stroke="`${colors[0]}`" 
    d="M10 4h28"/>
  </svg>
</template>

<script lang="ts" setup>
  import { iconProps } from "./type"

  defineOptions({
    name: "ZswBookmarkIcon"
  })

  const props = defineProps(iconProps)
</script>