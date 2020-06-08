import request from '@/utils/request';
/**
 * @description 初始化留言板
 */
export async function initMessageApi() {
  return request('/api/blog/initMessage', {
    method: 'get',
  });
}
/**
 * @description 留言板添加留言
 */
export async function submitMessageApi(data) {
  return request('/api/blog/submitMessage', {
    method: 'post',
    data,
  });
}
/**
 * @description 留言板回复留言
 */
export async function replyMessageApi(data) {
  return request('/api/blog/replyMessage', {
    method: 'post',
    data,
  });
}
