// style
import './style.sass'

// import
import { props } from './props'

// vue tool
import { defineComponent, h, withDirectives } from 'vue'

export default defineComponent({
  name: 'Button',
  props,
  setup(props) {
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
                `button${props.disabled ? '--disabled' : ''}`
              ])
            ],
            disabled: props.disabled
          },
          [h('span', { class: 'v-btn__overlay' }), h('div', '232')]
        ),
        []
      )

    // <div class="btn">
    //   <span class="v-btn__overlay" />
    // </div>
  }
})
