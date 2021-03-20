<template>
  <doc-nav></doc-nav>
  <div class="doc-content">
    <div class="doc-content-document">
      <router-view />
    </div>
    <div class="doc-content-demo">
      <doc-demo-preview></doc-demo-preview>
    </div>

    <!-- <component :is="state.component"></component> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Nav from '@/doc/components/Nav.vue'
import DemoPreview from '@/doc/components/DemoPreview.vue'
export default defineComponent({
  name: 'doc',
  components: {
    [Nav.name]: Nav,
    [DemoPreview.name]: DemoPreview
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.doc {
  &-content {
    display: flex;
    width: 100%;
    padding-right: 40px;
    &-document {
      padding: 40px;
      flex: 1;
      min-height: 800px;
      table {
        border: 1xp solid #ccc;
      }
    }
  }
}
</style>
