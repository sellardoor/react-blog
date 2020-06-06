import request from '@/utils/request';
/**
 * @description 注册
 */
export async function registerApi(data) {
  return request('/api/blog/register', {
    method: 'post',
    data,
  });
}

/**
 * @description 登录
 */
export async function loginApi(data) {
  return request('/api/blog/bloglogin', {
    method: 'post',
    data,
  });
}

/**
 * @description 检查用户名是否重复
 */
export async function checkUsernameApi(data) {
  return request('/api/blog/checkUsername', {
    method: 'post',
    data,
  });
}