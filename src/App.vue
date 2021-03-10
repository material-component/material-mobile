<template>
  <div class="demo">
    <Button />
  </div>
</template>

<script lang="ts">
import Button from './components/Button/index'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Button
  }
})
</script>

<style></style>
