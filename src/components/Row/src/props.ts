import { PropType } from 'vue'
import { FlexAlign, FlexJustify } from './types'

const ALIGNMENT = ['flex-start', 'flex-end', 'flex-center'] as const

const justifyValidator = (str: any) =>
  [...ALIGNMENT, 'space-between', 'space-around'].includes(str)

const alignValidator = (str: any) =>
  [...ALIGNMENT, 'baseline', 'stretch'].includes(str)

export const props = {
  gutter: {
    type: [Number, String],
    default: 0
  },

  justify: {
    type: String as PropType<FlexJustify>,
    default: null,
    validator: justifyValidator
  },

  align: {
    type: String as PropType<FlexAlign>,
    default: null,
    validator: alignValidator
  },

  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'div'
  }
}
