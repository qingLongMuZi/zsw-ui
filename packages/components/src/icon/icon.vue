<template>
  <i
    :class="styleClass"
    :style="style"
  >
    <slot/>
  </i>
</template>

<script lang="ts" setup>
  import { computed } from "vue"
  import { iconProps } from "./type"
  import type { CSSProperties } from "vue"
  import { isUndefined } from "@zsw-ui/utils"
  
  defineOptions({
    name: 'ZswIcon',
    inheritAttrs: false
  })

  const props = defineProps(iconProps)

  const styleClass = computed(()=>{
    return {

    }
  })

  const style = computed<CSSProperties>(() => {
    if(!props.size && !props.color) return {}

    return {
      fontSize: isUndefined(props.size)?undefined:props.size,
      color: props.color
    }
  })

</script>