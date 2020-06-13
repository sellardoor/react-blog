/**
 * @description 留言相关接口
 * @author sellardoor
 * @date 2020/06/13
 */
import request from '@/utils/request';
import { addMsgType, replyMsgType } from './services';
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
export async function submitMessageApi(data: addMsgType) {
  console.log(data);
  return request('/api/blog/submitMessage', {
    method: 'post',
    data,
  });
}
/**
 * @description 留言板回复留言
 */
export async function replyMessageApi(data: replyMsgType) {
  console.log(data);
  return request('/api/blog/replyMessage', {
    method: 'post',
    data,
  });
}
