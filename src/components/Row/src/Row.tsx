import { defineComponent, computed, provide } from 'vue'

import { props } from './props'
export default defineComponent({
  name: 'Row',

  props,

  setup(props, { slots }) {

    const { tag, align, justify, gutter } = props

    provide('ROW', { gutter: Number.isInteger(gutter) ? gutter : Number(gutter) })

    const styles = computed(() => ({ 'justifyContent': justify, 'alignItems': align }))

    const classes = computed(() => ['container', 'overflow-hidden', 'flex'])

    // @ts-ignore
    return () => h(tag, {
      style: styles.value,
      class: classes.value
    }, slots.default?.())

  }
})

