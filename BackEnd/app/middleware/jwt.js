'use strict';

module.exports = options => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.authorization;
    if (token) {
      try {
        ctx.app.jwt.verify(token, options.secret);
        await next();
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          message: error.message,
        };
        return;
      }
    } else {
      ctx.status = 401;
      ctx.body = {
        message: '没有token',
      };
      return;
    }
  };
};
