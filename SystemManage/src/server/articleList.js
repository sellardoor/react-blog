import request from '@/utils/request';

export async function articleListApi() {
  return request('/api/systems/initList', {
    method: 'get',
  });
}

export async function articleDetailApi(data) {
  return request('/api/systems/detail', {
    method: 'post',
    data,
  });
}

export async function articleDeleteApi(data) {
  return request('/api/systems/delete', {
    method: 'post',
    data,
  });
}

export async function articleUpdateApi(data) {
  return request('/api/systems/update', {
    method: 'post',
    data,
  });
}

export async function uploadArticleApi(data) {
  return request('/api/systems/uploadArticle', {
      method: 'post',
      data,
  });
}

export async function setArticleHotApi(data) {
  return request('/api/systems/setArticleHot', {
      method: 'post',
      data,
  });
}

export async function removeArticleHotApi(data) {
  return request('/api/systems/removeArticleHot', {
      method: 'post',
      data,
  });
}

