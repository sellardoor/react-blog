/**
 * @description tags接口
 * @author sellardoor
 * @date 2020/06/13
 */
import request from '@/utils/request';
/**
 * @description 初始化tags
 */
export async function initTagsApi() {
  return request('/api/blog/initTags', {
    method: 'get',
  });
}