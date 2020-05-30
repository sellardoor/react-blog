import { loginApi } from '@/server/login';

export default {
    namespace: 'login',
    state: {},
    effects: {
        *handleLogin({ payload }, { call, put }) {
            const result = yield call(loginApi, payload);
            if (result.success) {
                localStorage.setItem('Authorization', result.result)
            }
        },
    },
    reducers: {},
};
