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
  async githublogin() {
    const { ctx } = this;
    const { code } = ctx.request.body;
    const tokenResponse = await ctx.curl(
      'https://github.com/login/oauth/access_token',
      {
        method: 'post',
        data: {
          client_id: 'd094df5206d99f67e373',
          client_secret: '89540a292fec85c8c951882a8b7149b9f06907ed',
          code,
        },
        headers: {
          accept: 'application/json',
        },
      }
    );
    const token = JSON.parse(tokenResponse.data.toString()).access_token;
    const result = await ctx.curl('https://api.github.com/user', {
      method: 'get',
      headers: {
        accept: 'application/json',
        Authorization: `token ${token}`,
      },
    });
    const { login, avatar_url, email } = JSON.parse(result.data.toString());
    if (login !== '' && email !== '') {
      const hasLogin = await ctx.model.Blogusers.find({
        username: login,
        email,
      });
      if (hasLogin.length > 0) {
        await ctx.model.Blogusers.update(
          { username: hasLogin[0].username, email: hasLogin[0].email },
          { recentlogin: +new Date() }
        );
        ctx.body = {
          success: true,
          result: {
            username: hasLogin[0].username,
            avatar: hasLogin[0].avatar,
          },
        };
      } else {
        if (login && email && avatar_url) {
          const newUser = await ctx.model.Blogusers.create({
            avatar: avatar_url,
            username: login,
            password: '',
            email,
            root: 'visitor',
            origin: 'github',
            date: +new Date(),
            recentlogin: +new Date(),
          });
          ctx.body = {
            success: true,
            result: {
              username: newUser.username,
              avatar: newUser.avatar,
            },
          };
        } else {
          ctx.body = {
            success: false,
          };
        }
      }
    }
  }
}

module.exports = UsersController;
