# react-blog
前端博客+前端后台系统+后端+数据库+部署(umi3 + egg + mongodb)

### 以下是各端的部署流程与方法, 包含一些遇到的问题以及解决方案

[umi前端的开发与部署](https://juejin.im/post/5eccd8656fb9a047cd65b9ed)

[egg后端的开发与部署](https://juejin.im/post/5ecbeb336fb9a047e96b2b66#heading-2)

[centOS服务器mongodb的安装与使用](https://juejin.im/post/5ecbc331e51d457871619dc0)

项目地址: [sellardoor.cn](http://sellardoor.cn)

📅2020/5/31 1.0版本, 包含以下功能:

> umi博客页面
1. 展示数据库文章列表
2. 展示数据库热门文章
3. 展示管理系统入口

> umi管理系统
1. 路由守卫`token`页面级验证
2. 请求拦截器请求携带`token`
3. 展示数据库文章列表
4. 支持查看文章详情, 写文章(支持`markdown`), 修改文章, 删除文章, 取消或设为热门文章
5. 支持设置文章封面

> egg后端 + mongose
1. egg-jwt鉴权
2. 支持上传图片
3. egg-mongoose操作数据库
4. egg-cors处理请求跨域

📅2020/6/2  博客,后台页面首屏优化(服务器带宽就1m, 然后没优化打开要二十多秒,忍不了.)目前2-3s.
```
package.json里scripts里加入
"analyz": "cross-env ANALYZE=1 umi build"  // 看看模块占比, 需要安装cross-env解析ANALYZE
1. 按需引入第三方库的cdn
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
  2. 静态资源上传七牛云cdn
  3. nginx.conf里对于server加入
        gzip on;
        gzip_buffers 32 4k;
        gzip_comp_level 6;
        gzip_min_length 200;
        gzip_types text/css text/xml application/javascript;
        gzip_vary on;
  ```
📅2020/6/3  由于静态资源托管cdn, 文章封面的上传与修改功能从本地存储改为cdn存储.

📅2020/6/4  重构了博客UI, 响应式后面再补, 后面先把UI细节完善一下, 响应式做掉, 然后再做用户系统以及Oauth.

![blog](http://cdn.sellardoor.cn/blog-min.png)

📅2020/6/6  用户系统完成用户登录注册前后端数据库联调完毕, 之后补上github的Oauth.

📅2020/6/6  Oauth前后端数据库联调完毕, 已支持github第三方登录, 之后补上后台系统的用户管理模块, Blog补充留言板, 以及文章评论. 
