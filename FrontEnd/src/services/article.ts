/**
 * @description 文章相关接口
 * @author sellardoor
 * @date 2020/06/13
 */
import request from '@/utils/request';
import {
  articleIdType,
  articleMsgInitType,
  addMsgType,
  replyMsgType,
} from './services';
/**
 * @description 初始化文章列表
 */
export async function initIndexArticleListApi() {
  return request('/api/blog/initIndexArticleList', {
    method: 'get',
  });
}
/**
 * @description 以ID获取文章详情
 * @param {Object} data _id对象
 */
export async function articleDetailApi(data: articleIdType) {
  return request('/api/blog/articleDetail', {
    method: 'post',
    data,
  });
}
/**
 * @description 获取热门文章
 */
export async function hotArticleApi() {
  return request('/api/blog/hotArticle', {
    method: 'get',
  });
}
/**
 * @description 初始化留言
 * @param {Object} data {type: 文章_id}
 */
export async function initArticleMessageApi(data: articleMsgInitType) {
  return request('/api/blog/initArticleMessage', {
    method: 'post',
    data,
  });
}
/**
 * @description 添加留言
 */
export async function submitArticleMessageApi(data: addMsgType) {
  return request('/api/blog/submitArticleMessage', {
    method: 'post',
    data,
  });
}
/**
 * @description 回复留言
 */
export async function replyArticleMessageApi(data: replyMsgType) {
  return request('/api/blog/replyArticleMessage', {
    method: 'post',
    data,
  });
}
/**
 * @description 以类型获取文章
 * @param {Object} data {type: 文章type}
 */
export async function checkTagArticleApi(data: articleMsgInitType) {
  return request('/api/blog/checkTagArticle', {
    method: 'post',
    data,
  });
}
