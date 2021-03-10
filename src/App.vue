<template>
  <div class="demo">
    <Button />
  </div>
</template>

<script lang="ts">
import Button from './components/Button/src/Button.md'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Button
  }
})
</script>

<style></style>
