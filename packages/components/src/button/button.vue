<template>
  <button
    ref="_ref"
    class="z-btn"
    :class="styleClass"
    :style="style"
    :disabled="props.disabled"
  >
  <template v-if="loading">
    <slot v-if="$slots.loading" name="loading"/>

  </template>
  <span v-if="$slots.default">
    <slot/>
  </span>
  </button>
</template>
<script lang="ts" setup>
  import "./style/index.less"
  import { computed, useSlots } from "vue"
  import type { StyleValue } from "vue"
  import { buttonProps, ButtonThem } from "./type"
  import { ColorVerify } from "@zsw-ui/utils"
  
  defineOptions({
    name:"ZswButton"
  })

  const props = defineProps(buttonProps)
  const slots = useSlots()

  const styleClass = computed(() => {
    return {
      [`z-btn--${props.them}`]: ButtonThem.includes(props.them||''),
      'is-round': props.ellipse,
      'is-circle': props.circle,
    }
  })

  const style = computed(() => {
    if(!props.them&&!props.width&&!props.height) return {}

    return {
      backgroundColor: ColorVerify(props.them),
      color: ColorVerify(props.them) && "#fff",
      width: props.width,
      height: props.height
    } as StyleValue
  })

</script>