import { useIcon } from '@/composables/icon'

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
    return () => useIcon({ loading: false, ...props })
  }
})
