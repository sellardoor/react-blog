'use strict';

const { Controller } = require('egg');
class LoginController extends Controller {
  async index() {
    const { ctx, service } = this;
    const result = await service.systems.login.index(ctx.request.body);
    if (result) {
      ctx.body = {
        result,
        success: true,
      };
    } else {
      ctx.status = 401;
      ctx.body = {
        result: '用户不存在或密码错误',
        success: false,
      };
    }
  }
}

module.exports = LoginController;
