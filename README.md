# [个人博客](http://sellardoor.cn)
![icon](https://img.shields.io/badge/author-sellardoor-blue)  ![icon](https://img.shields.io/badge/version-1.0-ff69b4)

## 项目信息
### 项目背景
为了工作能更好的沟通交流，以学习为目从0到1上线一个个人博客网站，包括需求评审，交互评审，UI设计，前端编码，后端编码，测试联调，项目部署。
### 功能简介
- 前端博客： 首页，归档， 文章， 关于。
- 前端博客支持响应式，文章浏览与搜索，文章评论与回复，用户登录与注册（支持站内用户，`github`第三方授权登录用户），`markdown`展示。
- 前端后台： 首页，文章管理，用户管理。
- 前端后台支持登录， 文章新增（支持`markdown`，封面上传）， 文章修改，删除，设置或取消热门文章，文章搜索。

## 整体架构
### 技术栈

- 前端：基于`umi3`框架，包含`react`，`dva`，`router`，`antd3`，`hooks`，`typescript`
- 后端：基于`egg`框架
- 数据库：`mongodb`
### 技术点
- 前端：支持`Oauth`，`highlight.js` + `marked`展示`markdown`，路由守卫`token`页面级验证，请求拦截器请求携带`token`，优化包括：图片懒加载，`externals`按需引入第三方库的`cdn`，静态资源上传七牛云`cdn`，`nginx`压缩。动效：数字滚动。
- 后端：提供相应接口，`Jwt`鉴权，七牛云`CDN`图片上传，`cors`跨域处理， `mongoose`数据库操作。

## 项目部署

### 前端
- [umi前端的开发与部署](https://juejin.im/post/5eccd8656fb9a047cd65b9ed)
### 后端
- [egg后端的开发与部署](https://juejin.im/post/5ecbeb336fb9a047e96b2b66#heading-2)
### 数据库
- [centOS服务器mongodb的安装与使用](https://juejin.im/post/5ecbc331e51d457871619dc0)

## 项目地址
[sellardoor.cn](http://sellardoor.cn)
## 页面UI
![UI](https://user-gold-cdn.xitu.io/2020/6/19/172cc52bf20c0fcc?w=567&h=903&f=png&s=101144)

![UI](https://user-gold-cdn.xitu.io/2020/6/19/172cc52bf172b8a1?w=1673&h=781&f=png&s=44465)
