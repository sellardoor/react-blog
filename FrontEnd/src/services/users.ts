/**
 * @description 用户系统相关接口
 * @author sellardoor
 * @date 2020/06/13
 */
import request from '@/utils/request';
import { registerType, loginType, checknameType, githubType } from './services';
/**
 * @description 注册
 */
export async function registerApi(data: registerType) {
  return request('/api/blog/register', {
    method: 'post',
    data,
  });
}

/**
 * @description 登录
 */
export async function loginApi(data: loginType) {
  return request('/api/blog/bloglogin', {
    method: 'post',
    data,
  });
}

/**
 * @description 检查用户名是否重复
 */
export async function checkUsernameApi(data: checknameType) {
  return request('/api/blog/checkUsername', {
    method: 'post',
    data,
  });
}

/**
 * @description github登录
 */
export async function githubLoginApi(data: githubType) {
  return request('/api/blog/githublogin', {
    method: 'post',
    data,
  });
}
