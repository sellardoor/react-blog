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
 * @description 添加留言
 */
export async function editMessageApi(data) {
  return request('/api/blog/editMessage', {
    method: 'post',
    data,
  });
}
