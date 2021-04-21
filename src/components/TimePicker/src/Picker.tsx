//style
import './style.sass'

import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'Picker',

  setup(props, { slots }: any) {
    const generateCom = (slotName: string) =>
      slots[slotName]
        ? h('div', { class: `picker__${slotName}` }, [slots[slotName]()])
        : null

    const Container = () =>
      h(
        'div',
        {
          class: 'picker'
        },
        [generateCom('title')]
      )

    return Container
  }
})
