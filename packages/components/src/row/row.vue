<template>
  <div 
    class="z-row"
    :class="styleClass"
    :style="style"
  >
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  import "./style/index.less"
  import { computed, useSlots } from "vue"
  import { rowProps } from "./type"
  import type { CSSProperties } from "vue"

  defineOptions({
    name: 'ZswRow'
  })

  const props = defineProps(rowProps)
  const slot = useSlots()

  const styleClass = computed(() => {
    return {
      wrap: props.wrap
    }
  })

  const style = computed<CSSProperties>(() => {
    return {
      alignItems: props.alignItems,
      justifyContent: props.justifyContent
    }
  })

</script>