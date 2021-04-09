// style
import './style.sass'

// vue tool
import { defineComponent, Transition, Teleport } from 'vue'

// props
import props from './props'

export default defineComponent({
  name: 'Overlay',
  emits: ['click'],
  props,
  setup(props, { slots, emit }) {
    return () => (
      <Teleport to="body">
        <Transition name="overlay-fade">
          <div
            v-show={props.visible}
            class={[`_overlay__${props.position}`]}
            style={{ backgroundColor: `rgba(0, 0, 0, .5)` }}
            onClick={(e) => emit('click', e)}
          >
            {slots.default?.()}
          </div>
        </Transition>
      </Teleport>
    )
  }
})
