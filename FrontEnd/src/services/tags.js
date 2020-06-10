import request from '@/utils/request';
/**
 * @description 初始化tags
 */
export async function initTagsApi() {
  return request('/api/blog/initTags', {
    method: 'get',
  });
}