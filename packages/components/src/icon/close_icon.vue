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
      d="M14 11 4 24l10 13h30V11H14Z"/>
    <path 
      stroke-linejoin="round" 
      stroke-linecap="round" 
      :stroke-width="lineWidth" 
      :stroke="`${colors[2]}`" 
      d="m21 19 10 10M31 19 21 29"/>
  </svg>
</template>

<script lang="ts" setup>
  import { iconProps } from "./type"

  defineOptions({
    name:"ZswCloseIcon"
  })

  const props = defineProps(iconProps)
</script>