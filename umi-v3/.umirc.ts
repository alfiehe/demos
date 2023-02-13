import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 开启 ant-design-pro 布局
  // layout: {},
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
