//style
import './style.sass'

import { h, defineComponent } from 'vue'

// component
import Picker from './Picker'

export default defineComponent({
  name: 'TimePicker',
  components: {
    Picker
  },
  setup() {
    return () =>
      h(
        Picker,
        {},
        {
          title: () => h('span', '2323')
        }
      )
  }
})
