<template>
  <div class="doc-main">
    <div class="doc-header">1111</div>
    <div class="doc-container">
      <div class="doc-lt-nav"><doc-nav></doc-nav></div>
      <div class="doc-rt-document">
        <router-view />
        <doc-demo-preview></doc-demo-preview>
        <!-- <component :is="state.component"></component> -->
      </div>
    </div>
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
<style lang="scss">
$doc-nav-width: 190px;
$doc-header-height: 60px;

.doc-main {
  display: flex;
  flex-direction: column;
  height: 100%;
  .doc-header {
    height: $doc-header-height;
    background: lightblue;
  }
  .doc-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    height: 100%;
    overflow: hidden;
    .doc-lt-nav {
      width: $doc-nav-width;
      display: flex;
      padding-top: 10px;
      overflow: auto;
    }
    .doc-rt-document {
      flex: 1;
      padding-right: 415px;
      padding-left: 15px;
      padding-bottom: 20px;
      overflow: auto;
    }
  }
}
</style>

<style lang="scss" scoped>
.doc {
  &-content {
    overflow: hidden;
    margin-left: 190px;
    margin-right: 395px;
    &-document {
      padding: 20px;
      flex: 1;
      min-height: 800px;
      table {
        border: 1xp solid #ccc;
      }
    }
  }
}
</style>
