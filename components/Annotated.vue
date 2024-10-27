<template>
  <span ref="annotated"><slot /></span>
</template>

<script setup>
import { annotate } from 'rough-notation'

const { $gsap } = useNuxtApp()
const hasAnimated = ref(false)
const annotated = ref(null)
const animation = ref(null)

const props = defineProps({
  type: {
    type: String,
    default: 'underline'
  },
  color: {
    type: String,
    default: 'yellow'
  },
  delay: {
    type: Number,
    default: 0
  },
  inmediate: {
    type: Boolean,
    default: false
  }
})

const animateAnnotation = () => {
  if (!hasAnimated.value) {
    const color = props.color === 'blue' ? '#cee8ef' : props.type === 'highlight' ? '#f3b955' : '#f4520b'
    const highlighted = ['highlight', 'crossed-off', 'strike-through'].includes(props.type) ? { color } : {}
    animation.value = annotate(annotated.value, { type: props.type, strokeWidth: 4, multiline: true, ...highlighted })
    setTimeout(() => { animation.value.show() }, props.delay * 1000)
  }

  hasAnimated.value = true
}

onMounted(() => {
  if (props.inmediate) {
    animateAnnotation()
    return
  }
  $gsap.to(annotated.value, {
    scrollTrigger: {
      trigger: annotated.value,
      start: 'top 70%',
      end: '+=200',
      onToggle: () => {
        animateAnnotation()
      }
    }
  })
})

onBeforeUnmount(() => {
  animation.value && animation.value.remove()
})
</script>