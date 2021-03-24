export * from 'lodash-es'

export function isTouchEvent(e: TouchEvent | MouseEvent): e is TouchEvent {
  return e.constructor.name === 'TouchEvent'
}

export function isRippleEnabled(value: any): value is true {
  return typeof value === 'undefined' || !!value
}
