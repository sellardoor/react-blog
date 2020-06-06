'use strict';

const { Controller } = require('egg');

class UsersController extends Controller {
  async blogregister() {
    const { ctx } = this;
    const { username, password, email } = ctx.request.body;
    const result = await ctx.model.Blogusers.create({
      avatar:
        'http://cdn.sellardoor.cn/u%3D2395693894%2C1549853405%26fm%3D26%26gp%3D0.jpg',
      username,
      password,
      email,
      root: 'visitor',
      origin: 'blog',
      date: +new Date(),
      recentlogin: +new Date(),
    });
    if (result) {
      ctx.body = {
        success: true,
        message: '注册成功',
      };
    }
  }
  async bloglogin() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const result = await ctx.model.Blogusers.find({ username, password });
    if (result.length > 0) {
      await ctx.model.Blogusers.update(
        { username, password },
        { recentlogin: +new Date() }
      );
      ctx.body = {
        success: true,
        result: {
          avatar: result[0].avatar,
          username: result[0].username,
        },
      };
    }
  }
  async checkUsername() {
    const { ctx } = this;
    const { username } = ctx.request.body;
    const result = await ctx.model.Blogusers.find({ username });
    if (result.length > 0) {
      ctx.body = {
        success: false,
        message: '用户名重复, 请重新输入',
      };
    } else {
      ctx.body = {
        success: true,
        message: '该用户名可以使用',
      };
    }
  }
}

module.exports = UsersController;
