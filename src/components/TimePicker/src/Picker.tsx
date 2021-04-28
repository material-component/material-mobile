//style
import './style.sass'

import { h, defineComponent } from 'vue'

// type
import type { AllowedComponentProps } from 'vue'

export default defineComponent({
  name: 'Picker',
  props: {
    width: {
      type: [Number, String],
      default: 290
    }
  },
  setup(props, { slots }: any) {
    const generateComponents = (
      slotName: string,
      style: AllowedComponentProps
    ) =>
      slots[slotName]
        ? h(
            'div',
            {
              class: `picker__${slotName}`,
              ...style
            },
            [slots[slotName]()]
          )
        : null

    const Container = () =>
      h(
        'div',
        {
          class: 'picker'
        },
        [
          generateComponents('title', {}),
          generateComponents('body', {
            style: {
              width: `${props.width}px`
            }
          })
        ]
      )
    return Container
  }
})
