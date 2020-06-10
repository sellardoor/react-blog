'use strict';

const { Controller } = require('egg');

class TagsController extends Controller {
  async init() {
    const { ctx } = this;
    const result = await ctx.model.Article.find();
    const map = {};
    result.forEach(item => {
      map[item.type] = 0;
    });
    result.forEach(count => {
      map[count.type] += 1;
    });
    ctx.body = {
      result: map,
      success: true,
    };
  }
}

module.exports = TagsController;
