---
title: Flex
wrapperClass: md-flex
---

# Flex 布局

基于 flex 的 24 分栏栅格化系统，迅速简便地创建布局。

## 基础栅格

使用单一分栏创建基础的栅格布局。

从堆叠到水平排列。  
使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列 `Col` 必须放在 `Row` 内。

```vue demo
<template>
    <Row>
        <Col :span="12">
            <div class="text-center pt-3 pb-3 rounded bg-blue-500 text-white">span:12</div>
        </Col>
        <Col :span="12" :offset="2">
            <div class="pt-3 pb-3 rounded bg-blue-700 text-center text-white">span:12</div>
        </Col>
    </Row>
</template>
```

```vue demo
<template>
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
</template>
```

```vue demo
<template>
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
</template>
```
### 设置元素间距


```vue demo
<template>
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
</template>
```
## Prop

## Prop

### row

| 字段    | 说明                                                                                   | 类型           | 默认值     |
| ------- | -------------------------------------------------------------------------------------- | -------------- | ---------- |
| type    | 布局方式，可选值为flex                                                                 | String         | -          |
| gutter  | 列元素之间的间距（单位为px）                                                           | String、Number | -          |
| justify | Flex 主轴对齐方式，可选值为 flex-start flex-end flex-center space-around space-between | String         | start      |
| align   | Flex 交叉轴对齐方式，可选值为 flex-start flex-center flex-end                          | String         | flex-start |
