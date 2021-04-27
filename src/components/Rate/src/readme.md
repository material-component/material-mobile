---
title: Rate
wrapperClass: md-Rate
---

# Rate 评分

用于对事物进行评级操作



### 基础用法
v-model 当前分值 2.5

```vue demo
<template>
    <div>
        <Rate v-model="value" />
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'app',
        data() {
            return {
                value: 2.5
            }
        }
    })
</script>
```

### count
自定义评分图标的数量 当前图标总数等于 8 如下

```vue demo
<template>
    <div>
        <Rate v-model="value" :count="count" />
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'app',
        data() {
            return {
                value: 2.5,
                count: 8
            }
        }
    })
</script>
```
### emptyolor 背景颜色

自定义评分图标的背景颜色设置 默认 default: '#ccc' 可通过 emptyColor重新设置

```vue demo
<template>
    <div>
        <Rate v-model="value" :count="count" :empty-color="emptyColor" />
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'app',
        data() {
            return {
                value: 2.5,
                count: 8,
                emptyColor: 'red'
            }
        }
    })
</script>
```
### size
图标大小，默认单位为px

```vue demo
<template>
    <div>
        <Rate v-model="value" :size="size" />
        <br />
        自定义 size：<input type="number" style="border:1px solid #ddd" v-model="inputSize" />
    </div>
</template>
<script lang="ts">
    import { defineComponent, computed, ref } from 'vue'
    export default defineComponent({
        name: 'app',
        data() {
            return {
                value: 2.5,
            }
        },
        setup() {
            const size = ref(25);
            const inputSize = computed({
                get: () => {
                    return size.value;
                },
                set: (value) => {
                    size.value = value;
                }
            })
            return { size, inputSize }
        }
    })
</script>
```
### color
选中时的颜色

```vue demo
<template>
    <div>
        <Rate v-model="value" :color="color" />
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'app',
        data() {
            return {
                value: 2.5,
                color: 'red'
            }
        }
    })
</script>
```
### gutter
图标间距，默认单位为px

```vue demo
<template>
    <div>
        <Rate v-model="value" :gutter="gutter" />
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'app',
        data() {
            return {
                value: 2.5,
                gutter: 20
            }
        }
    })
</script>
```
### half
是否允许半选 默认全选 ;

```vue demo
<template>
    <div>
        <Rate v-model="value" :half="half" />
        自定义:
        <label for="halfFalse"> 
            <input type="radio" name="halfActive" v-model="halfValue" id="halfFalse" :value="false">  全选
        </label>
        <label for="halfTrue">
            <input type="radio" name="halfActive" v-model="halfValue" id="halfTrue" :value="true">  半选
        </label>
    </div>
</template>
<script lang="ts">
    import { defineComponent,computed,ref} from 'vue'
    export default defineComponent({
        name: 'app',
        data() {
            return {
                value: 2.5,
            }
        },
        setup(){
            const half = ref(false)
            const halfValue = computed({
                get:()=>{
                    return half.value;
                },
                set:(value)=>{
                    half.value = value
                }
            })
            return {half,halfValue}
        }
    })
</script>
```

### disabled
是否禁用评分

```vue demo
<template>
    <div>
        <Rate v-model="value" :disabled="disabled" />
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'app',
        data() {
            return {
                value: 2.5,
                disabled: true
            }
        }
    })
</script>
```

# API

| 参数 | 说明 | 类型 | 默认值 |
|:-|:-|:-:|:-:|
| v-model | 当前分值 | <font color=#4fc08d>[String, Number]</font> | 0 |
| count | 图标总数 | <font color=#4fc08d>[String, Number]</font> | 5 |
| emptyColor | 未选中时的颜色 | <font color=#4fc08d>String</font> | #cccccc |
| color | 选中时的颜色 | <font color=#4fc08d>String</font> | #f9a825 |
| size | 图标大小，默认单位为px | <font color=#4fc08d>Number</font> | 20 |
| gutter | 图标间距，默认单位为px | <font color=#4fc08d>Number</font> | 5 |
| half | 是否允许半选 | <font color=#4fc08d>Boolean</font> | false |
| disabled | 是否禁用评分 | <font color=#4fc08d>Boolean</font> | false |