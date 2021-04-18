# Overlay 开始上手

遮罩层用于强调特定的页面元素，并可以阻止用户进行其他操作。

### 基础用法

最简单的形式， Overlay 组件将在您的应用程序上添加一个黯淡图层。

```vue demo
<template>
  <div>
    <Button @click="visible = true">显示遮罩层</Button>
    <Overlay v-model:visible="visible" />
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

### 绝对定位

absolute 遮罩层为绝对定位，并且包含在其父元素内。

```vue demo
<template>
  <div>
    <Button @click="visible = !visible">
      {{ visible ? '隐藏遮罩层' : '显示遮罩层' }}
    </Button>
    <div
      :style="{
        position: 'relative',
        width: '200px',
        height: '100px',
        lineHeight: '100px',
        textAlign: 'center',
        border: '1px solid #909399',
        borderRadius: '3px'
      }"
    >
      absolute
      <Overlay v-model:visible="visible" position="absolute" />
    </div>
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

### 透明度

opacity 允许您自定义遮罩层的透明度

```vue demo
<template>
  <div>
    <Button @click="visible = true">显示遮罩层</Button>
    <Overlay v-model:visible="visible" :opacity="1" />
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

### 自定义动画时间

duration 允许您自定义遮罩层的动画时间

```vue demo
<template>
  <div>
    <Button @click="visible = true">显示遮罩层</Button>
    <Overlay v-model:visible="visible" :duration="1" />
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

### 自定义插入节点

teleport 允许您自定义插入指定 DOM 节点

```vue demo
<template>
  <div>
    <p>
      <Button @click="handleClick('.element-1')">element-1</Button>
      <Button @click="handleClick('.element-2')">element-2</Button>
    </p>
    <div
      class="element-1"
      :style="{
        position: 'relative',
        display: 'inline-block',
        width: '200px',
        height: '100px',
        lineHeight: '100px',
        margin: '5px',
        textAlign: 'center',
        border: '1px solid #909399',
        borderRadius: '3px'
      }"
    >
      element-1
    </div>
    <div
      class="element-2"
      :style="{
        position: 'relative',
        display: 'inline-block',
        width: '200px',
        height: '100px',
        lineHeight: '100px',
        margin: '5px',
        textAlign: 'center',
        border: '1px solid #909399',
        borderRadius: '3px'
      }"
    >
      element-2
    </div>
    <Overlay
      :visible="true"
      :teleport="teleport"
      :close-on-click-modal="false"
      position="absolute"
    />
  </div>
</template>

<script lang="ts">
import { ref, setup, onMounted } from 'vue'

export default {
  setup() {
    const teleport = ref('.element-1')
    function handleClick(selector: string) {
      teleport.value = selector
    }
    return { teleport, handleClick }
  }
}
</script>
```

## props

| 参数                 | 说明                                             | 类型              | 可选值            | 默认值 |
| -------------------- | ------------------------------------------------ | ----------------- | ----------------- | ------ |
| v-model:visible      | 是否显示遮罩层                                   | boolean           | -                 | false  |
| position             | 定位方式                                         | string            | fixed \| absolute | fixed  |
| opacity              | 透明度                                           | number            | 0 ~ 1             | 0.46   |
| teleport             | 插入节点                                         | string \| element | -                 | -      |
| z-index              | z-index 层级                                     | number            | -                 | 1      |
| duration             | 动画时长，单位秒                                 | number \| string  | -                 | 0.2    |
| lock-scroll          | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | boolean           | true \| false     | true   |
| close-on-click-modal | 点击遮罩层是否可关闭                             | boolean           | true \| false     | true   |
| class-name           | 自定义类名                                       | string            | -                 | -      |
| custom-style         | 自定义样式                                       | object            | -                 | -      |
