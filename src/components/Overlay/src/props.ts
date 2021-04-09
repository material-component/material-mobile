/**
 * Overlay Props
 */
import { positionType } from './type'
// vue type
import { PropType } from 'vue'

export default {
  visible: Boolean,
  opacity: Number,
  position: {
    type: String as PropType<positionType>,
    default: 'fixed'
  }
}
