import { defineConfig } from 'umi';

export default defineConfig({
  title: 'sellardoor',
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001/',
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index.js', exact: true },
    { path: '/detail', component: '@/pages/ArticleDetail', exact: true },
  ],
});
