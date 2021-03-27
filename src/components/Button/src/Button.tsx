// style
import './style.sass'

// import
import { props } from './props'
import { useIcon } from '@/composables/icon'

// vue tool
import { defineComponent, h, withDirectives } from 'vue'

const TEXTCOLOR = {
  default: '#fff',
  primary: '#1976D2',
  danger: '#FF5252',
  success: '#4CAF50',
  warning: '#FFC107'
}

export default defineComponent({
  name: 'Button',
  props,
  setup(props, { slots }) {
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
                `button${props.disabled ? '--disabled' : ''}`,
                `button${props.plain ? '--plain' : ''}`,
                `button--${props.type}`
              ])
            ],
            disabled: props.disabled,
            style: {
              color: (props.plain && props.type) ?? TEXTCOLOR[props.type]
            }
          },

          [
            h('span', { class: 'btn__overlay' }),
            useIcon(props.icon),
            slots?.default ? slots?.default() : null
          ]
        ),
        []
      )
  }
})
