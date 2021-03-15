import { defineComponent, computed } from 'vue'
import { props } from './props'
export default defineComponent({
  name: 'Row',

  props,

  setup(props, { slots }) {
    const classes = computed(() => ['box-border'])
    return () => <div class={classes.value}>{slots.default?.()}</div>
  }
})
