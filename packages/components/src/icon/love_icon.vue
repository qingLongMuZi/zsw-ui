<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 48 48"
    :width="size"
    :height="size"
  >
    <path 
      stroke-linejoin="round" 
      stroke-linecap="round" 
      :stroke-width="lineWidth" 
      :stroke="`${colors[0]}`" 
      :fill="`${colors[1]}`" 
      d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"
    />
  </svg>
</template>

<script lang="ts" setup>
  import { iconProps } from "./type"

  defineOptions({
    name:"ZswLoveIcon"
  })

  const props = defineProps(iconProps)
</script>