# 虚拟滚动列表

## 实现思路

只加载`可视区域`内需要的列表项，当滚动发生时，动态通过计算获得`可视区域`内的列表项，并将`非可视区域`内存在的列表项删除。

- 计算当前`可视区域`起始数据的索引值 `startIndex`
- 计算当前`可视区域`结束数据的索引值 `endIndex`
- 计算当前`可视区域`的数据，并渲染到页面中
- 计算 `startIndex` 对应的数据在整个列表中的偏移位置 `startOffset` 并设置到列表上

## 变量

- `containerHeight` 可视区域高度
- `scrollTop` 滚动偏移量
- `itemHeight` 单个元素高度
- `startOffset` 上滚动空白区域
- `endOffset` 下滚动空白区域
- `startIndex` 可视区域起始数据
  ```js
  startIndex = Math.floor(scrollTop/itemHeight)
  ```
- `endIndex` 可视区域结束数据
  ```js
  endIndex = startIndex + (clientHeight / itemHeight) - 1
  ```

## 操作可以总结成五步：

- 不把长列表数据一次性全部直接渲染在页面上
- 截取长列表一部分数据用来填充可视区域
- 长列表数据不可视部分使用空白占位填充（下图中的startOffset和endOffset区域）
- 监听滚动事件根据滚动位置动态改变可视列表
- 监听滚动事件根据滚动位置动态改变空白填充

![alt](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b537aaf6c4c4f798cc208c02977c787~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

实现的效果应该是：`不论怎么滚动，我们改变的只是滚动条的高度和可视区的元素内容，并没有增加任何多余的元素！`