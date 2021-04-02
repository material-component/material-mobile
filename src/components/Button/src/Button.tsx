// style
import './style.sass'

// import
import { props } from './props'
import { useIcon, iconProps } from '@/composables/icon'

// vue tool
import { defineComponent, h, withDirectives, computed } from 'vue'

// Directives
import { Ripple } from '@/directives/Ripple'

// type

import { ElementType } from './type'

const TEXTCOLOR = {
  default: '#fff',
  primary: '#1976D2',
  danger: '#FF5252',
  success: '#4CAF50',
  warning: '#FFC107'
}

export default defineComponent({
  name: 'Button',
  emits: ['click', 'touchstart', 'touchend', 'touchmove'] as Array<ElementType>,
  props,
  setup(props, { slots, emit }) {
    const isDisabled = computed(() => props.disabled || props.loading)

    const handleEvent = (e: MouseEvent | TouchEvent, type: ElementType) => {
      if (props.loading) {
        e.preventDefault()
      }
      if (!props.loading && !props.disabled) {
        emit(type, e)
      }
    }

    return () =>
      withDirectives(
        h(
          props.tag,
          {
            class: [
              ...new Set([
                'button',
                `button--${props.size}`,
                `button${props.block ? '--block' : ''}`,
                `button${isDisabled.value ? '--disabled' : ''}`,
                `button${!isDisabled.value && props.plain ? '--plain' : ''}`,
                `button${
                  !isDisabled.value && props.type ? `--${props.type}` : ''
                }`,
                `button${props.round ? '--round' : ''}`
              ])
            ],
            disabled: isDisabled.value,
            style: {
              // 当按钮为plain时将，颜色改变为type的类型颜色
              color:
                !isDisabled.value &&
                props.plain &&
                props.type &&
                TEXTCOLOR[props.type]
            },
            onClick: (e: MouseEvent) => handleEvent(e, 'click'),
            onTouchend: (e: TouchEvent) => handleEvent(e, 'touchend'),
            onTouchmove: (e: TouchEvent) => handleEvent(e, 'touchmove'),
            onTouchstart: (e: TouchEvent) => handleEvent(e, 'touchstart')
          },

          [
            h('span', { class: 'btn__overlay' }),
            useIcon({
              name: props.icon,
              loading: props.loading
            } as iconProps),
            slots?.default ? slots?.default() : null
          ]
        ),
        [[Ripple, !props.disabled]]
      )
  }
})
