import request from '@/utils/request';

export async function initIndexArticleListApi() {
  return request('/api/blog/initIndexArticleList', {
    method: 'get',
  });
}

export async function articleDetailApi(data) {
  return request('/api/blog/articleDetail', {
    method: 'post',
    data,
  });
}
