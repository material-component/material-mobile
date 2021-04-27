//styles
import './style.sass'

// js
import { defineComponent, h, ComponentCustomOptions, computed } from 'vue'

// components
import Star from './Star'
// props
import { props } from './props'

export default defineComponent({
  name: 'Rate',

  components: { Star },

  props: {
    ...props,
    count: {
      type: [Number, String],
      default: 5
    },
    modelValue: {
      type: [String, Number],
      default: 0
    },
    emptyColor: {
      type: String,
      default: '#ccc'
    }
  },

  emits: ['update:modelValue', 'change'],

  setup(props, { emit }) {
    const totalLenth = new Array(props.count).fill('')
    return () => (
      <div class="rate">
        {totalLenth.map((v, i) => {
          const modelValue = Number(props.modelValue)
          const isFloat = ~~modelValue === modelValue
          const index = i + 1

          const isHalf = computed(() => {
            if (props.half && !isFloat && index === modelValue + 0.5) {
              return true
            }

            return false
          })

          return h(Star as ComponentCustomOptions, {
            gutter: props.gutter,
            size: props.size,
            half: isHalf.value,
            disabled: props.disabled,
            // 兼容0.5的差值
            color: index > modelValue + 0.5 ? props.emptyColor : props.color,
            index,

            onChange(e: Event, value: Number) {
              if (props.disabled) return

              emit('change', value)
              emit('update:modelValue', value)
            }
          })
        })}
      </div>
    )
  }
})
