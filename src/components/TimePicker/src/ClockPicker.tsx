//style
import './style.sass'

import { h, defineComponent, toRefs, unref, ref, computed } from 'vue'

// props
import { props } from './clockPickerProps'

// type
import type { VNodeChild, Ref } from 'vue'
import type { ClockPickerPropType, GenChildrenType } from './types'

const RADIUSSCALE = 0.62

export default defineComponent({
  name: 'ClockPicker',
  props,

  setup(props) {
    return () => (
      <div class="clock-picker__container">
        <div class="clock-picker">{generateItem(props)}</div>
      </div>
    )
  }
})

const generateItem = (props: ClockPickerPropType) => {
  const children: Ref<VNodeChild[]> = ref([])
  const { min, max, step, format, value, rotate, double } = toRefs(props)

  for (let val = min.value; val <= max.value; val = val + step.value) {
    children.value.push(
      genChildren({
        style: getTransform(val),
        class: 'clock-picker__item',
        innerHTML: `<span>${format.value(unref(val))}</span>`
      })
    )
  }

  return h(
    'div' as any,
    {
      class: 'clock-picker__inner',
      ref: 'innerClock'
    },
    [children.value]
  )

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
    const { degrees } = useComputed()
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
    const { roundCount } = useComputed()
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
