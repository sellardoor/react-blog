/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590147439827_4396';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mongoose = {
    url:
      process.env.EGG_MONGODB_URL ||
      // 'mongodb://账号:密码@域名:端口/数据库', // 线上数据库这里不提供具体连接账号密码
      'mongodb://sellardoor:bigbang86@59.110.43.170:27017/admin',
    options: {},
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ], // 允许访问接口的白名单
  };
  config.cors = {
    origin: '*', // 允许跨域请求的地址
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', // 允许跨域请求的方式
  };

  config.uploadDir = 'app/public/imgs';

  config.jwt = {
    secret: 'bigbang',
  };
  return {
    ...config,
    ...userConfig,
  };
};
