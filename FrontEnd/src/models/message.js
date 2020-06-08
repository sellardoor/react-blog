import {
  initMessageApi,
  submitMessageApi,
  replyMessageApi,
} from '@/services/message';
import { message } from 'antd';

export default {
  namespace: 'message',

  state: {
    data: [],
    spin: false,
  },

  effects: {
    *initMessage(_, { call, put }) {
      const result = yield call(initMessageApi);
      if (result?.success) {
        yield put({ type: 'initData', payload: result.result });
      }
    },
    *submitMessage({ payload }, { call, put }) {
      const result = yield call(submitMessageApi, payload);
      if (result?.success) {
        const res = yield put({ type: 'initMessage' });
        if (res?.success) {
          message.success('留言成功');
        }
      }
    },
    *replyMessage({ payload }, { call, put }) {
      const result = yield call(replyMessageApi, payload);
      if (result?.success) {
        const res = yield put({ type: 'initMessage' });
        if (res?.success) {
          message.success('回复成功');
        }
      }
    },
  },

  reducers: {
    initData(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    },
    toogleSpin(state, { payload }) {
      return {
        ...state,
        spin: payload,
      };
    },
  },
};