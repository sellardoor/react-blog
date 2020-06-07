import request from '@/utils/request';

export async function initUsersListApi() {
    return request('/api/systems/users/init', {
        method: 'get',
    });
}
