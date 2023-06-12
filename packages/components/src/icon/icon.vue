<template>
  <i :style="[style]" :class="[icon]"></i>
</template>

<script lang="ts" setup>
  import "./style/index.less"
  import { computed } from "vue"
  import { iconProps } from "./type"
  
  defineOptions({
    name: 'ZswIcon',
    inheritAttrs: false
  })

  const props = defineProps(iconProps)

  const style = computed(()=>{
    return {
      'fontSize': `${props.size}px`,
      'color': `${props.colors![0]}`
    }
  })
</script>