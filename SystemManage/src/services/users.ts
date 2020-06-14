import request from '@/utils/request';

/**
 * @description 初始化用户列表页数据
 */
export async function initUsersListApi() {
    return request('/api/systems/users/init', {
        method: 'get',
    });
}
