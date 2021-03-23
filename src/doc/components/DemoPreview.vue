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
      if (route.path !== '/')
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
        name,
        components: {
          default: {
            components,
            $vd: { toc }
          }
        }
      } = matchRoute.shift()

      if (toc.length === 0) return h('div', null)

      // 自动解析文档的h3标签
      const titles = toc.filter((t: any) => t.level === 3)
      const componentsList = Object.values(components)
      const classname = name.split('/')

      if (titles.length !== componentsList.length) {
        throw new Error('please write title')
      }

      return componentsList.map((item: any, index: number) => {
        return h(
          'div',
          {
            class: [
              `${classname[0].toLowerCase()}__wrapper`,
              'document_wrapper'
            ]
          },
          [
            h(
              'div',
              {
                class: `${classname[0].toLowerCase()}__title`
              },
              titles[index]['content']
            ),
            h(item)
          ]
        )
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

<style lang="scss">
.doc-demo-preview {
  height: 667px;
  width: 375px;
  box-sizing: border-box;
  // position: fixed;
  // right: 30px;
  // top: 100px;
  position: absolute;
  right: 20px;
  top: 0;
  background: #f2f2f2;
  box-shadow: #ebedf0 0 4px 12px;
  border-radius: 12px;
  overflow: hidden;
}
</style>
