import request from '@/utils/request';

/**
 * @description 初始化文章列表页
 */
export async function articleListApi() {
  return request('/api/systems/initList', {
    method: 'get',
  });
}

/**
 * @description 查看文章详情
 * @param {object} data _id文章id
 */
export async function articleDetailApi(data: { _id: string }) {
  return request('/api/systems/detail', {
    method: 'post',
    data,
  });
}

/**
 * @description 删除指定文章
 * @param {object} data _id文章id
 */
export async function articleDeleteApi(data: { _id: string }) {
  return request('/api/systems/delete', {
    method: 'post',
    data,
  });
}
/**
 * @description 文章更新接口
 */
interface ArticleUpdateType {
  _id: { _id: string };
  update: {
    content: string;
    img: string;
    info: string;
    title: string;
    type: string;
  };
}
export async function articleUpdateApi(data: ArticleUpdateType) {
  return request('/api/systems/update', {
    method: 'post',
    data,
  });
}

/**
 * @description 上传文章接口
 */
interface UploadArticleType {
  content: string;
  date: number;
  img: string;
  info: string;
  title: string;
  type: string;
}
export async function uploadArticleApi(data: UploadArticleType) {
  return request('/api/systems/uploadArticle', {
    method: 'post',
    data,
  });
}

/**
 * @description 设置热门文章
 */
export async function setArticleHotApi(data: { _id: string }) {
  return request('/api/systems/setArticleHot', {
    method: 'post',
    data,
  });
}

/**
 * @description 取消热门文章
 */
export async function removeArticleHotApi(data: { _id: string }) {
  return request('/api/systems/removeArticleHot', {
    method: 'post',
    data,
  });
}
