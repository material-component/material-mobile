// style
import './style.sass'

// vue tool
import { defineComponent, Transition, Teleport } from 'vue'
import useOverlay from './use-overlay'

// props
import props from './props'

export default defineComponent({
  name: 'Overlay',
  emits: ['click', 'touchmove', 'update:visible'],
  props,
  setup(props, { slots, emit }) {
    const {
      ready,
      getClassName,
      getStyle,
      handleClick,
      preventTouchMove
    } = useOverlay(props, emit)

    const createOverlay = () => (
      <Transition name="overlay-fade">
        <div
          v-show={props.visible}
          class={getClassName()}
          style={getStyle()}
          onClick={handleClick}
          onTouchmove={preventTouchMove}
        >
          {slots.default?.()}
        </div>
      </Transition>
    )

    return () => {
      return props.teleport && ready.value ? (
        <Teleport to={props.teleport}>{createOverlay()}</Teleport>
      ) : (
        createOverlay()
      )
    }
  }
})
