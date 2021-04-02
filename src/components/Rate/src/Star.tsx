//styles
import './style.sass'

// tool
import { useIcon } from '@/composables/icon'

// directive
import { Ripple } from '@/directives/Ripple'

// js
import { defineComponent, h, withDirectives } from 'vue'

export default defineComponent({
  name: 'Star',

  setup() {
    return () =>
      withDirectives(
        h('div' as any, { class: 'lllll' }, [
          useIcon({ name: 'star_outline' })
        ]),
        [[Ripple]]
      )

    // <div class="lllll">{useIcon({ name: 'star_outline' })}</div>
  }
})
