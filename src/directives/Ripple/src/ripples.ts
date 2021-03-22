import './style.scss'

import { RippleOption, RippleHTMLElement, RippleELement } from './type'

import { isTouchEvent } from '../../../utils/index'

export const Ripples = {
  show(e: RippleELement, el: RippleHTMLElement, value: RippleOption) {
    if (!el?._ripple?.enabled) {
      return
    }
    const container = document.createElement('span')
    const animation = document.createElement('span')

    container.appendChild(animation)

    container.className = 'ripple__container'

    if (value.class) {
      container.className += ` ${value.class}`
    }

    const { radius, scale, x, y, centerX, centerY } = this.calculate(
      e,
      el,
      value
    )

    const size = `${radius * 2}px`
    animation.className = 'ripple__animation'
    animation.style.width = size
    animation.style.height = size

    el.appendChild(container)

    const computed = window.getComputedStyle(el)
    if (computed && computed.position === 'static') {
      el.style.position = 'relative'
      el.dataset.previousPosition = 'static'
    }

    animation.classList.add('ripple__animation--enter')

    animation.style.transform = `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`

    animation.style.opacity = '0'

    animation.dataset.activated = String(performance.now())

    setTimeout(() => {
      animation.classList.remove('ripple__animation--enter')
      animation.classList.add('ripple__animation--in')
      animation.style.transform = `translate(${centerX}, ${centerY}) scale3d(1,1,1)`
      animation.style.opacity = '0.25'
    }, 0)
  },
  hide(el: RippleHTMLElement | null) {
    if (!el?._ripple?.enabled) return

    const ripples = el.getElementsByClassName('ripple__animation')

    if (ripples.length === 0) return
    const animation = ripples[ripples.length - 1]
    //@ts-ignore
    if (animation.dataset.isHiding) return
    //@ts-ignore
    else animation.dataset.isHiding = 'true'
    //@ts-ignore
    const diff = performance.now() - Number(animation.dataset.activated)
    const delay = Math.max(250 - diff, 0)

    setTimeout(() => {
      animation.classList.remove('ripple__animation--in')
      animation.classList.add('ripple__animation--out')
      // @ts-ignore
      animation.style.opacity = '0'
      setTimeout(() => {
        const ripples = el.getElementsByClassName('ripple__animation')
        if (ripples.length === 1 && el.dataset.previousPosition) {
          el.style.position = el.dataset.previousPosition
          delete el.dataset.previousPosition
        }

        animation.parentNode && el.removeChild(animation.parentNode)
      }, 300)
    }, delay)
  },

  calculate(e: RippleELement, el: RippleHTMLElement, value: RippleOption) {
    let localX = 0
    let localY = 0

    const offset = el.getBoundingClientRect()
    const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e

    localX = target.clientX - offset.left
    localY = target.clientY - offset.top

    let radius = 0
    let scale = 0.3
    if (el._ripple?.circle) {
      scale = 0.15
      radius = el.clientWidth / 2
      radius = value.center
        ? radius
        : radius +
          Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4
    } else {
      radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2
    }

    const centerX = `${(el.clientWidth - radius * 2) / 2}px`
    const centerY = `${(el.clientHeight - radius * 2) / 2}px`

    const x = value.center ? centerX : `${localX - radius}px`
    const y = value.center ? centerY : `${localY - radius}px`

    return { radius, scale, x, y, centerX, centerY }
  }
}
