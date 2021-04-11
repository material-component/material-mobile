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
    const handleClickOverlay = (e: MouseEvent) => emit('click', e)

    const createOverlay = () => (
      <Transition name="overlay-fade">
        <div
          v-show={props.visible}
          class={[`_overlay__${props.position}`]}
          style={{
            backgroundColor: `rgba(0, 0, 0, ${props.opacity})`,
            zIndex: props.zIndex
          }}
          onClick={handleClickOverlay}
        >
          {slots.default?.()}
        </div>
      </Transition>
    )

    return () => {
      return props.teleport ? (
        <Teleport to={props.teleport}>{createOverlay()}</Teleport>
      ) : (
        createOverlay()
      )
    }
  }
})
