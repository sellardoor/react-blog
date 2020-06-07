'use strict';

const { Controller } = require('egg');

class ArticleController extends Controller {
  async initIndex() {
    const { ctx } = this;
    const result = await ctx.model.Article.find();
    ctx.body = {
      result,
      success: true,
    };
  }

  async articleDetail() {
    const { ctx } = this;
    console.log(ctx.request.body);
    // 阅读量加一
    const res = await ctx.model.Article.updateOne(ctx.request.body, {
      $inc: { view: 1 },
    });
    console.log(res);
    const result = await ctx.model.Article.find(ctx.request.body);
    ctx.body = {
      success: true,
      result,
    };
  }

  async hotArticle() {
    const { ctx } = this;
    const result = await ctx.model.Article.find({ hot: true });
    ctx.body = {
      success: true,
      result,
    };
  }
}

module.exports = ArticleController;
