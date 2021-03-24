//styles
import './style.scss'

// js
import { defineComponent, computed, inject, h } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'Col',

  props,

  setup(props, { slots }) {
    const { gutter }: any = inject('ROW')

    const styles = computed(() => ({
      paddingLeft: `${gutter}px`,
      paddingRight: `${gutter}px`
    }))

    const classes = computed(() => [
      'col',
      `col-${props.span}`,
      `col-offset-${props.offset}`
    ])

    return () =>
      // @ts-ignore
      h(
        'div',
        {
          style: styles.value,
          class: classes.value
        },
        slots.default?.()
      )
  }
})
