import { useIcon, iconProps } from '@/composables/icon'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    icon: String,
    color: String
  },
  setup(props) {
    return () =>
      useIcon({
        name: props.icon,
        loading: false,
        color: props.color
      } as iconProps)
  }
})
