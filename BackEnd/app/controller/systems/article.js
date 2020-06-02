'use strict';
const pump = require('pump');
const fs = require('fs');

const { Controller } = require('egg');
class ArticleController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.model.Article.create(ctx.request.body);
    ctx.body = {
      success: true,
      result,
    };
  }
  async initList() {
    const { ctx } = this;
    const result = await ctx.model.Article.find();
    ctx.body = {
      success: true,
      result,
    };
  }
  async detail() {
    const { ctx } = this;
    const result = await ctx.model.Article.find(ctx.request.body);
    ctx.body = {
      success: true,
      result,
    };
  }
  async delete() {
    const { ctx } = this;
    const result = await ctx.model.Article.remove(ctx.request.body);
    ctx.body = {
      success: true,
      result,
    };
  }
  async update() {
    const { ctx } = this;
    const { _id, update } = ctx.request.body;
    const result = await ctx.model.Article.update({ _id }, update);
    ctx.body = {
      success: true,
      result,
    };
  }
  async saveAvatar() {
    const { ctx } = this;
    const parts = ctx.multipart({ autoFields: true });
    let files = {};
    let stream;
    while ((stream = await parts()) != null) {
      if (!stream.filename) {
        break;
      }
      const fieldname = stream.fieldname; // file表单的名字
      // 上传图片的目录
      const dir = await this.service.systems.uploadTools.getUploadFile(
        stream.filename
      );
      const target = dir.uploadDir;
      const writeStream = fs.createWriteStream(target);

      await pump(stream, writeStream);

      files = Object.assign(files, {
        [fieldname]: dir.saveDir,
      });
    }

    if (Object.keys(files).length > 0) {
      ctx.body = {
        code: 200,
        message: '图片上传成功',
        data: files,
      };
    } else {
      ctx.body = {
        code: 500,
        message: '图片上传失败',
        data: {},
      };
    }
  }
  async setArticleHot() {
    const { ctx } = this;
    const result = await ctx.model.Article.update(ctx.request.body, {
      hot: true,
    });
    ctx.body = {
      success: true,
      result,
    };
  }
  async removeArticleHot() {
    const { ctx } = this;
    const result = await ctx.model.Article.update(ctx.request.body, {
      hot: false,
    });
    ctx.body = {
      success: true,
      result,
    };
  }
  async qiniu() {
    const { ctx } = this;
    const result = await ctx.service.systems.qiniu.uploadFiles(ctx);
    if (result) {
      ctx.body = {
        code: 200,
        message: '图片上传成功',
        data: result,
      };
    } else {
      ctx.body = {
        code: 500,
        message: '图片上传失败',
        data: {},
      };
    }
  }
}

module.exports = ArticleController;
