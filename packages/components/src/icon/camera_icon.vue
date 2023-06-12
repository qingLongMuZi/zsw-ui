<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none" viewBox="0 0 48 48"
    :width="size"
    :height="size"
  >
    <path 
      stroke-linejoin="round" 
      :stroke-width="lineWidth" 
      :stroke="`${colors[0]}`" 
      :fill="`${colors[1]}`" 
      d="m15 12 3-6h12l3 6H15Z"
    />
    <rect 
      stroke-linejoin="round" 
      :stroke-width="lineWidth" 
      :stroke="`${colors[0]}`" 
      :fill="`${colors[1]}`" 
      rx="3" 
      height="30" 
      width="40" 
      y="12" 
      x="4"
    />
    <path 
      stroke-linejoin="round" 
      :stroke-width="lineWidth" 
      stroke="#FFF" 
      :fill="`${colors[2]}`" 
      d="M24 35a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
    />
  </svg>
</template>

<script lang="ts" setup>
  import { iconProps } from "./type"

  defineOptions({
    name: "ZswCameraIcon"
  })

  const props = defineProps(iconProps)
</script>