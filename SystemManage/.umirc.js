import { defineConfig } from 'umi';
import { routes } from './src/routes/index'

export default defineConfig({
  proxy:{
    '/api': {
      // target: 'http://127.0.0.1:7001'
      target: 'http://59.110.43.170:7001'
    }
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
});
