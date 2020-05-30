import request from '@/utils/request';

export async function indexInit(data = {}) {
    return request('/api/indexpage', {
        method: 'post',
        data
    });
}
