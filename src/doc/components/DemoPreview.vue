<script lang="ts">
import { defineComponent, h, ref, watch, onMounted } from 'vue'
import routers from '../router'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'doc-demo-preview',
  setup() {
    const route = useRoute()
    const state = ref(h('div', null))

    onMounted(() => {
      state.value = changeRouterPath({ path: route.path })
    })

    watch(
      () => route.path,
      (newVal, oldVal) => {
        if (newVal === oldVal || newVal === '/') return
        state.value = changeRouterPath({ path: newVal })
      }
    )
    return () => h('div', { class: 'doc-demo-preview' }, state.value)

    function getComponentContent(matchRoute: any) {
      if (matchRoute.length === 0) return h('div', null)

      const {
        components: {
          default: { components }
        }
      } = matchRoute.shift()

      return Object.values(components).map((item: any) => {
        return h('div', { class: 'py-3' }, h(item))
      })
    }

    function changeRouterPath(to: any) {
      const currentRouterList = routers.getRoutes()
      // const { currentRoute } = useRouter()

      const matchRoute = currentRouterList.filter((item) => {
        return item.path.toLowerCase() === to.path.toLowerCase()
      })

      return h(
        'div',
        { class: 'demo-preview-content' },
        getComponentContent(matchRoute)
      )
    }
  }
})
</script>

<style lang="less">
.doc {
  &-demo-preview {
    height: 667px;
    width: 375px;
    // position: fixed;
    // right: 30px;
    // top: 100px;
    box-shadow: #ebedf0 0 4px 12px;
    border-radius: 12px;
    overflow: hidden;
  }
}
</style>
