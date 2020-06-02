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
  externals: {
    [`highlight.js`]: 'window.hljs',
    moment: 'window.moment',
    react: 'window.React',
    [`react-dom`]: 'window.ReactDOM',
    marked: 'window.marked',
  },
  scripts: [
    'https://cdn.bootcdn.net/ajax/libs/highlight.js/10.0.3/highlight.min.js',
    'https://cdn.bootcdn.net/ajax/libs/moment.js/2.26.0/moment.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react/16.12.0/umd/react.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react-dom/16.12.0/umd/react-dom.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/marked/1.1.0/marked.min.js',
  ]
});
