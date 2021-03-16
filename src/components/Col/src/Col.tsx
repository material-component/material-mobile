import { defineComponent } from 'vue'
import { props } from './props'
export default defineComponent({
  name: 'Col',

  props,

  setup(props, { slots }) {
    // const classes = computed(() => ['flex-1/24'])
    return () => <div class="flex-1/24 2323sdsd">{slots.default?.()}</div>
  }
})
