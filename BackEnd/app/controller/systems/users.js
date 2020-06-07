'use strict';

const { Controller } = require('egg');
class UsersController extends Controller {
  async init() {
    const { ctx } = this;
    const result = await ctx.model.Blogusers.find();
    if (result.length > 0) {
      ctx.body = {
        success: true,
        result,
      };
    }
  }
}

module.exports = UsersController;
