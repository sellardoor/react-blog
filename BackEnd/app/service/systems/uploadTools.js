'use strict';

const Service = require('egg').Service;
const path = require('path');
const sd = require('silly-datetime');
const mkdirp = require('mkdirp');

class ToolsService extends Service {
  /**
   * 获取文件上传目录
   * @param {*} filename
   */
  async getUploadFile(filename) {
    // 1.获取当前日期
    const day = sd.format(new Date(), 'YYYYMMDD');
    // 2.创建图片保存的路径
    const dir = path.join(this.config.uploadDir, day);
    await mkdirp(dir); // 不存在就创建目录
    const date = Date.now(); // 毫秒数
    // 返回图片保存的路径
    const uploadDir = path.join(dir, date + path.extname(filename));
    // app\public\avatar\upload\20200312\1536895331666.png
    return {
      uploadDir,
      saveDir: this.ctx.origin + uploadDir.slice(3).replace(/\\/g, '/'),
    };
  }
}

module.exports = ToolsService;
