/**
 * Overlay Props
 */
import { positionType } from './type'
// vue type
import { PropType, TeleportProps } from 'vue'

export default {
  visible: Boolean,
  teleport: [String, Object] as PropType<TeleportProps['to']>,
  opacity: {
    type: Number,
    default: 0.46
  },
  position: {
    type: String as PropType<positionType>,
    default: 'fixed'
  },
  zIndex: {
    type: Number,
    default: 1
  }
}
