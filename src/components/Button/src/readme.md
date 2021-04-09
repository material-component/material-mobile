# Button 开始上手

按钮代表着一个即时操作命令，响应用户点击行为，触发相应的业务逻辑。

### Type 类型

支持 primary、danger、success、warning、default 五种类型，默认为 **default**

```vue demo
<template>
  <div>
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="danger"> 危险按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
  </div>
</template>
```

### Size 尺寸 5678

支持 large、normal、small、mini 四种尺寸，默认为 **normal**

```vue demo
<template>
  <Button size="large">大号按钮</Button>
  <Button size="normal">普通按钮</Button>
  <Button size="small">小型按钮/</Button>
  <Button size="mini">迷你按钮</Button>
</template>
```

### Loading 状态

```vue demo
<template>
  <Button loading>正在加载中....</Button>
</template>
```

### Round 形状

```vue demo
<template>
  <Button>方形按钮</Button>
  <Button round>圆角按钮</Button>
</template>
```

### Disabled 禁用状态

```vue demo
<template>
  <Button type="primary"><img src="baidu.com" />启用状态</Button>
  <Button type="primary" disabled>禁用状态</Button>
</template>
```

### Plain 禁用状态 11

```vue demo
<template>
  <Button type="primary" plain>启用状态</Button>
  <Button type="primary">禁用状态</Button>
</template>
```

### ada

```vue demo
<template>
  <div>
    <Button size="normal" :loading="true" round>按钮1</Button>
    <Button type="default">default 按钮1</Button>
    <Button size="large" type="primary" block disabled plain round
      >按钮2</Button
    >
    <Button type="primary" icon="face" round size="mini">按钮3</Button>
    <Button type="danger" icon="face" round size="small" />
    <Button type="primary" icon="mdi-cloud-upload" round size="normal"
      >按钮3</Button
    >
  </div>
</template>
```
