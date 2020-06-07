'use strict';

const { Controller } = require('egg');

class MessageController extends Controller {
  async init() {
    const { ctx } = this;
    const result = await ctx.model.Message.find();
    ctx.body = {
      result,
      success: true,
    };
  }
  async edit() {
    const { ctx } = this;
    await ctx.model.Message.remove({ __v: 0 });
    const result = await ctx.model.Message.create({
      message: ctx.request.body,
    });
    ctx.body = {
      result,
      success: true,
    };
  }
}

module.exports = MessageController;
