/**
 * Overlay Props
 */
import { positionType } from './type'
// vue type
import { PropType, CSSProperties, TeleportProps } from 'vue'

export default {
  visible: Boolean,
  teleport: [String, Object] as PropType<TeleportProps['to']>,
  className: (null as unknown) as PropType<unknown>,
  customStyle: Object as PropType<CSSProperties>,
  duration: [Number, String],
  position: {
    type: String as PropType<positionType>,
    default: 'fixed'
  },
  opacity: {
    type: Number,
    default: 0.46
  },
  zIndex: {
    type: Number,
    default: 1
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  }
}
