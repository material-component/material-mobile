# Overlay 开始上手

遮罩层用于强调特定的页面元素，并可以阻止用户进行其他操作。

### Default 类型

```vue demo
<template>
  <div>
    <Button @click="visible = true">按钮</Button>
    <Overlay :visible="visible" @click="visible = false">
      <div
        style="width:100px;height:100px;margin:100px auto;background:#fff;"
        @click.stop
      ></div>
    </Overlay>
  </div>
</template>

<script lang="ts">
import { ref, setup } from 'vue'

export default {
  setup() {
    const visible = ref(false)
    return { visible }
  }
}
</script>
```
