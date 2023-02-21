import { defineConfig } from "umi";
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 开启 ant-design-pro 布局
  // layout: {},
  routes: routes,
  fastRefresh: {},
})

