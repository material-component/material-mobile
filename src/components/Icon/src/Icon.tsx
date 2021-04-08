import { useIcon, iconProps } from '@/composables/icon'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    icon: String,
    color: String,
    size: {
      type: Number,
      default: 20
    }
  },
  setup(props) {
    return () =>
      useIcon({
        name: props.icon,
        loading: false,
        color: props.color,
        size: props.size
      } as iconProps)
  }
})
