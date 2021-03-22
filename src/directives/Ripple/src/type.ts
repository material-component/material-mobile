import { DirectiveBinding } from 'vue'

export const rippleStop = Symbol('rippleStop')

export interface RippleOption {
  class?: string
  center?: boolean
  circle?: boolean
}

export interface RippleHTMLElement extends HTMLElement {
  _ripple: {
    circle: boolean | undefined
    class: string
    centered: boolean | undefined
    showTimer: any
    showTimerCommit: Function | null
    enabled: Boolean
    touched: Boolean
    isTouch: Boolean
  }
}

export type RippleELement = (MouseEvent | TouchEvent) & {
  [rippleStop]?: boolean
}

export interface RippleDirectiveBinding
  extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
  value?: boolean | { class: string }
  modifiers: {
    center?: boolean
    circle?: boolean
  }
}
