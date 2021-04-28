//style
import './style.sass'

import { h, defineComponent } from 'vue'

// component
import Picker from './Picker'

// props
import { props } from './timePickerProps'

// compnents
import ClockPicker from './ClockPicker'

export default defineComponent({
  name: 'TimePicker',

  props,

  components: {
    Picker,
    ClockPicker
  },
  setup(props) {
    return () =>
      h(
        Picker,
        {
          width: props.width
        },
        {
          title: () => h('span', '2323'),
          body: () =>
            h(ClockPicker, {
              min: 1,
              max: 12,
              value: 0
            })
        }
      )
  }
})
