'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;

  // 博客系统
  router.get('/api/blog/initIndexArticleList', controller.blog.article.initIndex);
  router.post('/api/blog/articleDetail', controller.blog.article.articleDetail);
  router.get('/api/blog/hotArticle', controller.blog.article.hotArticle);
  router.post('/api/blog/register', controller.blog.users.blogregister);
  router.post('/api/blog/bloglogin', controller.blog.users.bloglogin);
  router.post('/api/blog/checkUsername', controller.blog.users.checkUsername);
  router.post('/api/blog/githublogin', controller.blog.users.githublogin);
  // 后台系统
  const jwt = middleware.jwt(app.config.jwt);
  router.post('/api/systems/login', controller.systems.login.index);
  router.post('/api/systems/uploadArticle', jwt, controller.systems.article.index);
  router.get('/api/systems/initList', jwt, controller.systems.article.initList);
  router.post('/api/systems/detail', jwt, controller.systems.article.detail);
  router.post('/api/systems/delete', jwt, controller.systems.article.delete);
  router.post('/api/systems/update', jwt, controller.systems.article.update);
  router.post('/api/systems/saveAvatar', controller.systems.article.saveAvatar);
  router.post('/api/systems/setArticleHot', controller.systems.article.setArticleHot);
  router.post('/api/systems/removeArticleHot', controller.systems.article.removeArticleHot);
  router.post('/api/systems/qiniu', controller.systems.article.qiniu);
};
