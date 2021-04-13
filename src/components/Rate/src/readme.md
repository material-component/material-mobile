---
title: Rate
wrapperClass: md-Rate
---

### Type 类型

```vue demo
<template>
    <div > 
        <Rate v-model="value" half />
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
    name: 'app',
    data(){
        return {
            value: 2.5
        }
    }

    })
</script>
```