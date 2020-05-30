import request from '@/utils/request';

export async function loginApi(data) {
    return request('/api/systems/login', {
        method: 'post',
        data,
    });
}
