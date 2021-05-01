import type { CSSProperties, VNodeChild } from 'vue'

export type ClockPickerPropType = {
  min: number
  max: number
  step: number
  format: Function
  value: number
  rotate: number
  double: boolean
  color?: string
  disabled?: boolean
}

export type GenChildrenType = {
  style: CSSProperties
  class: string | Array<string>
  innerHTML: string
}

export type UseGenerateChildrenType = {
  generateItem: () => VNodeChild
  generateHand: () => VNodeChild
}
