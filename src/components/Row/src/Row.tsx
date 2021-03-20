import '../../../styles/tailwind.css'

import { defineComponent, computed, provide, toRefs, unref } from 'vue'

import { props } from './props'
export default defineComponent({
  name: 'Row',

  props,

  setup(props, { slots }) {
    const { tag, align, justify, gutter } = toRefs(props)

    const gap = unref(gutter)

    provide('ROW', {
      gutter: Number.isInteger(gap) ? gap : Number(gap)
    })

    const styles = computed(() => ({
      justifyContent: justify.value,
      alignItems: align.value
    }))

    const classes = computed(() => ['container', 'overflow-hidden', 'flex'])

    return () =>
      h(
        tag.value,
        {
          style: styles.value,
          class: classes.value
        },
        slots.default?.()
      )
  }
})
