// type ts
import { buttonSize } from './type'

// vue type
import { PropType } from 'vue'

export const props = {
  size: {
    type: String as PropType<buttonSize>,
    default: 'normal'
  },
  tag: {
    type: String,
    default: 'button'
  },
  block: Boolean,
  disabled: Boolean
}
