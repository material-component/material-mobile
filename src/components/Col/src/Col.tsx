//styles
import './style.less'

import { defineComponent, computed } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'Col',

  props,

  setup(props, { slots }) {
    const classes = computed(() => [`col-${props.span}`])
    return () => <div class={classes.value}>{slots.default?.()}</div>
  }
})
