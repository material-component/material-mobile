<template>
  <doc-nav></doc-nav>
  <div class="doc-content">
    <div class="doc-content-document">
      <router-view />
    </div>
    <!-- <doc-demo-preview :url="demoUrl"></doc-demo-preview> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import {
  onBeforeRouteUpdate,
  RouteLocationNormalized,
  useRoute
} from 'vue-router'
import Nav from '@/doc/components/Nav.vue'
import DemoPreview from '@/doc/components/DemoPreview.vue'
export default defineComponent({
  name: 'doc',
  components: {
    [Nav.name]: Nav,
    [DemoPreview.name]: DemoPreview
  },
  setup() {
    const currentRoute = ref('/')
    const data = reactive({
      demoUrl: 'demo.html'
    })

    const watchDemoUrl = (router: RouteLocationNormalized) => {
      const { origin, pathname } = window.location
      currentRoute.value = router.name as string
      data.demoUrl = `${origin}${pathname.replace('index.html', '')}demo.html#${
        router.path
      }`
    }

    onMounted(() => {
      const route = useRoute()
      watchDemoUrl(route)
    })

    onBeforeRouteUpdate((to) => {
      watchDemoUrl(to)
    })

    return data
  }
})
</script>

<style lang="less" scoped>
.doc {
  &-content {
    padding: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
    &-document {
      min-height: 800px;
      table {
        border: 1xp solid #ccc;
      }
    }
  }
}
</style>
