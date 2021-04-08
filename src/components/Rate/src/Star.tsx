//styles
import './style.sass'

// tool
import { useIcon } from '@/composables/icon'

// directive
import { Ripple } from '@/directives/Ripple'

// js
import { defineComponent, h, withDirectives } from 'vue'

// props
import { props } from './props'

export default defineComponent({
  name: 'Star',

  props: {
    ...props,

    index: {
      type: Number,
      required: true
    }
  },

  emits: ['change'],

  setup(props, { emit }) {
    return () =>
      withDirectives(
        h(
          'div' as any,
          {
            class: 'rate-star',
            onClick(event: MouseEvent) {
              event.preventDefault()
              event.stopPropagation()

              emit('change', event, clickArea(event, props.index))
            }
          },
          [
            useIcon({
              name: `${props.half ? 'star_half' : 'star'} `,
              size: props.size,
              color: props.color,
              gutter: props.gutter
            })
          ]
        ),
        [[Ripple, !props.disabled]]
      )
  }
})

// 点击时设置是否为半星
function clickArea(event: MouseEvent, index: number) {
  const {
    offsetX,
    // @ts-ignore
    target: { clientHeight }
  } = event

  if (clientHeight / 2 > offsetX) {
    return index - 0.5
  } else {
    return index
  }
}
