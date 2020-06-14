import request from '@/utils/request';

/**
 * @description 登录接口
 * @param {Object} data 用户名密码
 */
interface loginApiType {
  username: string;
  password: string;
}
export async function loginApi(data: loginApiType) {
  return request('/api/systems/login', {
    method: 'post',
    data,
  });
}
