import { ref, onMounted, CSSProperties } from 'vue'


export default function useOverlay(
  props: Record<string, any>,
  emit: (event: 'update:visible', ...args: any[]) => void
) {
  const ready = ref(false)

  onMounted(() => (ready.value = true))

  function getClassName(): string[] {
    return [`_overlay__${props.position}`, props.className]
  }

  function getStyle(): CSSProperties {
    return {
      backgroundColor: `rgba(0, 0, 0, ${props.opacity})`,
      zIndex: props.zIndex,
      animationDuration: props.duration ? `${props.duration}s` : undefined,
      ...props.customStyle
    }
  }

  function handleClick() {
    props.closeOnClickModal && emit('update:visible', false)
  }

  function preventTouchMove(event: TouchEvent) {
    if (props.lockScroll) event.preventDefault()
  }

  return {
    ready,
    getClassName,
    getStyle,
    handleClick,
    preventTouchMove
  }
}
