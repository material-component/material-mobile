import type { CSSProperties } from 'vue'

export type ClockPickerPropType = {
  min: number
  max: number
  step: number
  format: Function
  value: number | null
  rotate: number
  double: boolean
}

export type GenChildrenType = {
  style: CSSProperties
  class: string
  innerHTML: string
}
