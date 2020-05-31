import { defineConfig } from 'umi';

export default defineConfig({
  title: 'sellardoor',
  proxy: {
    '/api': {
      // target: 'http://127.0.0.1:7001/',
      target: 'http://59.110.43.170:7001/',
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index.js', exact: true },
    { path: '/articledetail', component: '@/pages/ArticleDetail', exact: true },
    { path: '/articlelist', component: '@/pages/ArticleList', exact: true },
  ],
});
