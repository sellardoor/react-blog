'use strict';

const Service = require('egg').Service;
const path = require('path');
const qiniu = require('qiniu');
const md5 = require('md5');

const accessKey = 'aZ_QrZ1Idx9U1Y7yTgugztYRnRBdNrujjDCqDaT3';
const secretKey = 'bkMobvDIpM14IO-Y0SM-jKDlTOwGQUVFOJwGezDb';
const bucket = 'sellardoor';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z2; // z2华南

const options = {
  scope: bucket,
  expires: 7200,
  force: true,
  callbackBodyType: 'application/json',
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

class qiniuService extends Service {
  async uploadFiles(data) {
    const timestamp = new Date().getTime(); // 当前时间戳
    const randomNum = Math.ceil(Math.random() * 1000); // 取1000以下的随机数

    try {
      const stream = await data.getFileStream(); // 文件不存在将响应400错误
      const extname = path.extname(stream.filename).toLocaleLowerCase();
      const filename =
        md5(path.basename(stream.filename, extname) + timestamp + randomNum) +
        extname;
      const formUploader = new qiniu.form_up.FormUploader(config);
      const putExtra = new qiniu.form_up.PutExtra();

      const result = await new Promise((resolve, reject) => {
        formUploader.putStream(
          uploadToken,
          filename,
          stream,
          putExtra,
          function(respErr, respBody, respInfo) {
            if (respErr) {
              throw respErr;
            }
            if (respInfo.statusCode === 200) {
              resolve(respBody);
            } else {
              reject(respBody);
            }
          }
        );
      });

      if (result !== '') {
        return {
          data: result,
        };
      }
      return false;
    } catch (err) {
      return false;
    }
  }
}

module.exports = qiniuService;
