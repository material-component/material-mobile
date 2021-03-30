import { useIcon } from '@/composables/icon'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    icon: String
  },
  setup(porps) {
    return () => useIcon(porps.icon, false)
  }
})
