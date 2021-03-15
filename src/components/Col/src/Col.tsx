import { defineComponent, computed } from 'vue'
import { props } from './props'
export default defineComponent({
  name: 'Col',

  props,

  setup(props, { slots }) {
    const classes = computed(() => [])
    return () => (
      <div class={classes.value}>
        23
        {slots}
      </div>
    )
  }
})
