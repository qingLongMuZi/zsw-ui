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
      :stroke-width="lineWidth" 
      :stroke="`${colors[0]}`" 
      :fill="`${colors[1]}`" 
      d="M18 6H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM18 28H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2ZM40 6H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM40 28H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Z"/>
  </svg>
</template>

<script lang="ts" setup>
import { iconProps } from "./type"

defineOptions({
  navigator:"ZswAllIcon"
})

const props = defineProps(iconProps)

</script>