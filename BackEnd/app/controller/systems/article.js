'use strict';

const { Controller } = require('egg');
class ArticleController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.model.Article.create({
      ...ctx.request.body,
      img: '123',
    });
    ctx.body = {
      success: true,
      result,
    };
  }
  async initList() {
    const { ctx } = this;
    const result = await ctx.model.Article.find();
    ctx.body = {
      success: true,
      result,
    };
  }
  async detail() {
    const { ctx } = this;
    const result = await ctx.model.Article.find(ctx.request.body);
    ctx.body = {
      success: true,
      result,
    };
  }
  async delete() {
    const { ctx } = this;
    const result = await ctx.model.Article.remove(ctx.request.body);
    ctx.body = {
      success: true,
      result,
    };
  }
  async update() {
    const { ctx } = this;
    const { _id, update } = ctx.request.body;
    const result = await ctx.model.Article.update({ _id }, update);
    ctx.body = {
      success: true,
      result,
    };
  }
}

module.exports = ArticleController;
