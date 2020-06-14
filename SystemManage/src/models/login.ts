import { loginApi } from '@/services/login';
import { Effect } from 'umi';

export interface LoginModelState {
  [key: string]: any;
}

export interface LoginModelType {
  namespace: 'login';
  state: LoginModelState
  effects: {
    handleLogin: Effect;
  };
}

export default {
  namespace: 'login',
  state: {},
  effects: {
    *handleLogin({ payload }, { call, put }) {
      const result = yield call(loginApi, payload);
      if (result.success) {
        localStorage.setItem('Authorization', result.result);
      }
    },
  },
};
