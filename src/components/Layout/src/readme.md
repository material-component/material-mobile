# Layout 布局

### 介绍

用于快速进行布局

### 安装


## 代码演示

### 基本用法


<Row class="h-24 bg-gray-200 rounded">
    <Col :span="12">
        <div class="text-center pt-3 pb-3 rounded bg-blue-500 text-white">span:12</div>
    </Col>
    <Col :span="12" :offset="2">
        <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:12</div>
    </Col>
</Row>

```html
<Row>
    <Col :span="12">
        <div class="text-center pt-3 pb-3 rounded bg-blue-500 text-white">span:12</div>
    </Col>
    <Col :span="12" :offset="2">
        <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:12</div>
    </Col>
</Row>
```
<Row justify="space-between" class="rounded bg-gray-200">
    <Col :span="4">
        <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:4</div>
    </Col>
    <Col :span="4">
        <div class="text-center pt-3 pb-3 rounded bg-blue-500 text-white">span:4</div>
    </Col>
    <Col :span="4">
        <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:4</div>
    </Col>
</Row>

```html
<Row justify="space-between" class="rounded bg-gray-200">
    <Col :span="4">
        <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:4</div>
    </Col>
    <Col :span="4">
        <div class="text-center pt-3 pb-3 rounded bg-blue-500 text-white">span:4</div>
    </Col>
    <Col :span="4">
        <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:4</div>
    </Col>
</Row>

```

<Row align="flex-end" class="h-24 bg-gray-200">
    <Col :span="6">
        <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:6</div>
    </Col>
    <Col :span="6">
        <div class="text-center pt-3 pb-3 rounded bg-blue-500 text-white">span:6</div>
    </Col>
    <Col :span="6">
        <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:6</div>
        </Col>
    <Col :span="6">
        <div class="text-center pt-3 pb-3 rounded bg-blue-500 text-white">span:6</div>
    </Col>
</Row>

```html
<Row>
    <Col :span="6">
        <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:6</div>
    </Col>
    <Col :span="6">
        <div class="text-center pt-3 pb-3 rounded bg-blue-500 text-white">span:6</div>
    </Col>
    <Col :span="6">
        <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:6</div>
        </Col>
    <Col :span="6">
        <div class="text-center pt-3 pb-3 rounded bg-blue-500 text-white">span:6</div>
    </Col>
</Row>
```

### 设置元素间距



<Row :gutter="10">
    <Col :span="6">
        <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:6</div>
    </Col>
    <Col :span="6">
        <div class="text-center pt-3 pb-3 rounded bg-blue-500 text-white">span:6</div>
    </Col>
    <Col :span="6">
        <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:6</div>
        </Col>
    <Col :span="6">
        <div class="text-center pt-3 pb-3 rounded bg-blue-500 text-white">span:6</div>
    </Col>
</Row>

```html
<Row :gutter="10">
    <Col :span="6">
        <div class="flex-content">span:6</div>
    </Col>
    <Col :span="6">
        <div class="flex-content flex-content-light">span:6</div>
    </Col>
    <Col :span="6">
        <div class="flex-content">span:6</div>
    </Col>
    <Col :span="6">
        <div class="flex-content flex-content-light">span:6</div>
    </Col>
</Row>
            
```
## Prop

## Prop

### row

| 字段    | 说明                                                                    | 类型           | 默认值     |
| ------- | ----------------------------------------------------------------------- | -------------- | ---------- |
| type    | 布局方式，可选值为flex                                                  | String         | -          |
| gutter  | 列元素之间的间距（单位为px）                                            | String、Number | -          |
| justify | Flex 主轴对齐方式，可选值为 start end center space-around space-between | String         | start      |
| align   | Flex 交叉轴对齐方式，可选值为 flex-start center flex-end                | String         | flex-start |
