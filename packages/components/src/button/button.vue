<template>
  <button
    ref="_ref"
    class="z-btn"
    :class="styleClass"
    :style="[style, styleSet]"
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
  import { onMounted ,computed, useSlots, ref, reactive } from "vue"
  import type { StyleValue } from "vue"
  import { buttonProps, ButtonThem } from "./type"
  import { ColorVerify, colorToRGBA } from "@zsw-ui/utils"
  
  defineOptions({
    name:"ZswButton"
  })

  const props = defineProps(buttonProps)
  const slots = useSlots()
  const _ref = ref<HTMLElement>()

  const styleSet=reactive({
    height: props.height
  })

  const styleClass = computed(() => {
    return {
      [`z-btn--${props.them}`]: ButtonThem.includes(props.them||''),
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-text': props.text
    }
  })

  const style = computed(() => {
    return {
      backgroundColor: props.text?'transparent':colorToRGBA(props.them,(props.plain||props.disabled)?0.2:1),
      color: ColorVerify(props.them) &&((props.disabled?(props.text?colorToRGBA(props.them,0.2):"#c0c4cc"):((props.plain||props.text) ? props.them : "#fff"))),
      borderColor: (props.plain&&!props.disabled)&&props.them,
      width: props.width
    } as StyleValue
  })

  onMounted(()=>{
    if(props.circle&&!props.height){
      styleSet.height = `${_ref.value?.clientWidth}px`
    }
  })

</script>