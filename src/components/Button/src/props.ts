// type ts
import { buttonSize, buttonType } from './type'

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
  disabled: Boolean,
  icon: String,
  plain: Boolean,
  type: {
    type: String as PropType<buttonType>,
    default: 'default'
  },
  round: Boolean,
  loading: Boolean,
  ripple: Boolean
}
