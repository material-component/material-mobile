//style
import './style.sass'

import { h, defineComponent, toRefs, unref, computed } from 'vue'

// props
import { props } from './clockPickerProps'

// type
import type { VNodeChild } from 'vue'
import type {
  ClockPickerPropType,
  GenChildrenType,
  UseGenerateChildrenType
} from './types'

const RADIUSSCALE = 0.62

export default defineComponent({
  name: 'ClockPicker',
  props,

  setup(props) {
    const { generateItem, generateHand } = useGenerateChildren(props)

    const touchstart = () => {}

    return () => (
      <div class="clock-picker__container">
        <div class="clock-picker">
          <div
            onTouchstart={touchstart}
            class="clock-picker__inner"
            ref="innerClock"
          >
            {generateHand()}
            {generateItem()}
          </div>
        </div>
      </div>
    )
  }
})

function useGenerateChildren(
  props: ClockPickerPropType
): UseGenerateChildrenType {
  const {
    min,
    max,
    step,
    format,
    value,
    rotate,
    double,
    color,
    disabled
  } = toRefs(props)
  const { displayedValue, degreesPerUnit, degrees, roundCount } = useComputed()

  return {
    generateItem,
    generateHand
  }

  function generateHand() {
    const scale = `scaleY(${handScale(displayedValue.value)})`
    const angle =
      rotate.value + degreesPerUnit.value * (displayedValue.value - min.value)
    const _color = value.value != null && (unref(color) || '#1867c0')

    return h('div', {
      class: [
        'clock-picker__hand',
        `${isInner(unref(value)) ? 'clock-picker__hand--inner' : ''}`
      ],
      style: {
        'background-color': `${_color}`,
        'border-color': `${_color}`,
        transform: `rotate(${angle}deg) ${scale}`
      }
    })
  }

  function generateItem() {
    const children = []

    for (let val = min.value; val <= max.value; val = val + step.value) {
      const _color = val === value.value && (unref(color) || '#1867c0')

      children.push(
        genChildren({
          style: {
            ...getTransform(val),
            backgroundColor: `${_color}`,
            borderColor: `${_color}`,
            color: `${val === displayedValue.value ? 'hsla(0,0%,100%,.3)' : ''}`
          },
          class: [
            'clock-picker__item',
            `${
              val === displayedValue.value ? 'clock-picker__item--active' : ''
            }`,
            `${unref(disabled) ? 'clock-picker__item--disabled' : ''}`
          ],
          innerHTML: `<span>${format.value(unref(val))}</span>`
        })
      )
    }

    return children
  }

  function genChildren(prop: GenChildrenType): VNodeChild {
    return h('span', prop)
  }

  function getTransform(i: number) {
    const { x, y } = getPosition(i)

    return {
      left: `${50 + x * 50}%`,
      top: `${50 + y * 50}%`
    }
  }

  function getPosition(i: number) {
    const rotateRadians = (rotate.value * Math.PI) / 180

    return {
      x:
        Math.sin((i - min.value) * degrees.value + rotateRadians) *
        handScale(i),
      y:
        -Math.cos((i - min.value) * degrees.value + rotateRadians) *
        handScale(i)
    }
  }

  function handScale(value: number) {
    return isInner(value) ? RADIUSSCALE : 1
  }

  function isInner(value: number) {
    return double.value && value - min.value >= roundCount.value
  }

  function useComputed() {
    const count = computed(() => max.value - min.value + 1)
    const roundCount = computed(() =>
      double.value ? count.value / 2 : count.value
    )
    const degreesPerUnit = computed(() => 360 / roundCount.value)
    const degrees = computed(() => (degreesPerUnit.value * Math.PI) / 180)
    const displayedValue = computed(() =>
      value.value == null ? min.value : value.value
    )

    return {
      count,
      roundCount,
      degreesPerUnit,
      degrees,
      displayedValue
    }
  }
}
