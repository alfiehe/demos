import React from 'react';
import { history } from "umi";

// 覆写 render。
// 比如用于渲染之前做权限校验
// export function render(oldRender) {
//   console.log('oldRender =', oldRender);
//   // oldRender();
// }

// 在初始加载和路由切换时做一些事情。
// 比如用于做埋点统计
// export function onRouteChange(payload) {
//   console.log('onRouteChange payload =', payload);
//   // document.title = 'DaiBoy';
// }

// // 修改交给 react-dom 渲染时的根组件。
// // 比如用于在外面包一个 Provider
// export function rootContainer(container) {
//   console.log('rootContainer =', container);
//   return React.createElement('article', null, container);
// }