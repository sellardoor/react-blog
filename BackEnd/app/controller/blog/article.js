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
    const result = await ctx.model.Article.find(ctx.request.body);
    ctx.body = {
      success: true,
      result,
    };
  }
}

module.exports = ArticleController;
