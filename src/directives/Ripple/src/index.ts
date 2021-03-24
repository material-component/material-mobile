// utils
import { isTouchEvent, isRippleEnabled, isObject } from '../../../utils'

// Types
import type { DirectiveBinding, ObjectDirective } from 'vue'
import {
  RippleELement,
  RippleDirectiveBinding,
  RippleHTMLElement,
  rippleStop,
  RippleOption
} from './type'

// CLASS
import { Ripples } from './ripples'

const DELAY_RIPPLE = 80

function rippleShow(e: RippleELement) {
  const value: RippleOption = {}
  const element = e.currentTarget as RippleHTMLElement | undefined

  if (!element?._ripple || element._ripple.touched || e[rippleStop]) return

  e[rippleStop] = true

  if (isTouchEvent(e)) {
    element._ripple.touched = true
    element._ripple.isTouch = true
  } else {
    if (element._ripple.isTouch) return
  }

  value.center = element._ripple?.centered
  if (element._ripple?.class) {
    value.class = element._ripple?.class
  }

  if (isTouchEvent(e)) {
    if (element._ripple.showTimerCommit) return

    element._ripple.showTimerCommit = () => {
      Ripples.show(e, element, value)
    }
    element._ripple.showTimer = window.setTimeout(() => {
      if (element?._ripple?.showTimerCommit) {
        element._ripple.showTimerCommit()
        element._ripple.showTimerCommit = null
      }
    }, DELAY_RIPPLE)
  } else {
    Ripples.show(e, element, value)
  }
}

function rippleHide(e: Event) {
  const element = e.currentTarget as RippleHTMLElement | null
  if (!element || !element._ripple) return

  window.clearTimeout(element._ripple.showTimer)

  if (e.type === 'touchend' && element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit()
    element._ripple.showTimerCommit = null

    element._ripple.showTimer = setTimeout(() => {
      rippleHide(e)
    })
    return
  }

  window.setTimeout(() => {
    if (element._ripple) {
      element._ripple.touched = false
    }
  })
  Ripples.hide(element)
}

function rippleCancelShow(e: MouseEvent | TouchEvent) {
  const element = e.currentTarget as RippleHTMLElement | undefined

  if (!element || !element._ripple) return

  if (element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit = null
  }

  window.clearTimeout(element._ripple.showTimer)
}

function updateRipple(
  el: RippleHTMLElement,
  binding: RippleDirectiveBinding,
  wasEnabled: boolean
) {
  const { value, modifiers } = binding
  const enabled = isRippleEnabled(value)

  if (!enabled) {
    Ripples.hide(el)
  }

  el._ripple = el._ripple ?? {}
  el._ripple.enabled = enabled
  el._ripple.centered = modifiers.center
  el._ripple.circle = modifiers.circle
  if (isObject(value) && value.class) {
    el._ripple.class = value.class
  }

  if (enabled && !wasEnabled) {
    el.addEventListener('touchstart', rippleShow, { passive: true })
    el.addEventListener('touchend', rippleHide, { passive: true })
    el.addEventListener('touchmove', rippleCancelShow, { passive: true })
    el.addEventListener('touchcancel', rippleHide)

    el.addEventListener('mousedown', rippleShow)
    el.addEventListener('mouseup', rippleHide)
    el.addEventListener('mouseleave', rippleHide)
  } else if (!enabled && wasEnabled) {
    removeListeners(el)
  }
}

function removeListeners(el: HTMLElement) {
  el.removeEventListener('mousedown', rippleShow)
  el.removeEventListener('touchstart', rippleShow)
  el.removeEventListener('touchend', rippleHide)
  el.removeEventListener('touchmove', rippleCancelShow)
  el.removeEventListener('touchcancel', rippleHide)
  el.removeEventListener('mouseup', rippleHide)
  el.removeEventListener('mouseleave', rippleHide)
}

function mounted(el: RippleHTMLElement, binding: DirectiveBinding) {
  updateRipple(el, binding, false)
}

function unmounted(el: RippleHTMLElement) {
  // @ts-ignore
  delete el._ripple
  removeListeners(el)
}

function updated(el: RippleHTMLElement, binding: DirectiveBinding) {
  if (binding.value === binding.oldValue) {
    return
  }

  const wasEnabled = isRippleEnabled(binding.oldValue)
  updateRipple(el, binding, wasEnabled)
}

export const Ripple: ObjectDirective = {
  mounted,
  unmounted,
  updated
}
