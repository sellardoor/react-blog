'use strict';

const { Controller } = require('egg');

class ArticleController extends Controller {
  async initIndex() {
    const { ctx } = this;
    const result = await ctx.model.Article.find();
    result.forEach(async item => {
      const len = (await ctx.model.Message.find({ type: item._id })).length;
      await ctx.model.Article.update({ _id: item._id }, { msg: len });
    });
    const res = await ctx.model.Article.find();
    ctx.body = {
      result: res,
      success: true,
    };
  }

  async articleDetail() {
    const { ctx } = this;
    // 阅读量加一
    await ctx.model.Article.updateOne(ctx.request.body, {
      $inc: { view: 1 },
    });
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
  async initArticleMessage() {
    const { ctx } = this;
    const result = await ctx.model.Message.find(ctx.request.body);
    ctx.body = {
      result,
      success: true,
    };
  }
  async submitArticleMessage() {
    const { ctx } = this;
    const result = await ctx.model.Message.create(ctx.request.body);
    ctx.body = {
      result,
      success: true,
    };
  }
  async replyArticleMessage() {
    const { ctx } = this;
    const result = await ctx.model.Message.create(ctx.request.body);
    ctx.body = {
      result,
      success: true,
    };
  }
}

module.exports = ArticleController;
