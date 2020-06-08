'use strict';

const { Controller } = require('egg');

class MessageController extends Controller {
  async init() {
    const { ctx } = this;
    const result = await ctx.model.Message.find({ type: 'message' });
    ctx.body = {
      result,
      success: true,
    };
  }
  async submitMessage() {
    const { ctx } = this;
    const result = await ctx.model.Message.create(ctx.request.body);
    ctx.body = {
      result,
      success: true,
    };
  }
  async replyMessage() {
    const { ctx } = this;
    const result = await ctx.model.Message.create(ctx.request.body);
    ctx.body = {
      result,
      success: true,
    };
  }
}

module.exports = MessageController;
