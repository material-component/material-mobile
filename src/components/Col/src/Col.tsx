//styles
import '../../../styles/tailwind.css'
import './style.less'

// js
import { defineComponent, computed, inject } from 'vue'
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
      `col-${props.span}`,
      `col-offset-${props.offset}`
    ])

    return () =>
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
