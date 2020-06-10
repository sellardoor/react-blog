import request from '@/utils/request';
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
export async function articleDetailApi(data) {
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
 */
export async function initArticleMessageApi(data) {
  return request('/api/blog/initArticleMessage', {
    method: 'post',
    data,
  });
}
/**
 * @description 添加留言
 */
export async function submitArticleMessageApi(data) {
  return request('/api/blog/submitArticleMessage', {
    method: 'post',
    data,
  });
}
/**
 * @description 回复留言
 */
export async function replyArticleMessageApi(data) {
  return request('/api/blog/replyArticleMessage', {
    method: 'post',
    data,
  });
}
/**
 * @description 以类型获取文章
 */
export async function checkTagArticleApi(data) {
  return request('/api/blog/checkTagArticle', {
    method: 'post',
    data,
  });
}