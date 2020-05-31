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

export async function hotArticleApi() {
  return request('/api/blog/hotArticle', {
    method: 'get',
  });
}
