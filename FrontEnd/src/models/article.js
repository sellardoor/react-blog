import {
  initArticleMessageApi,
  submitArticleMessageApi,
  replyArticleMessageApi,
} from '@/services/article';
import { message } from 'antd';

export default {
  namespace: 'article',

  state: {
    data: [],
    spin: false,
  },

  effects: {
    *initMessage({ payload }, { call, put }) {
      const result = yield call(initArticleMessageApi, payload);
      if (result?.success) {
        yield put({ type: 'initData', payload: result.result });
      }
    },
    *submitMessage({ payload }, { call, put }) {
      const result = yield call(submitArticleMessageApi, payload);
      const { type } = payload;
      if (result?.success) {
        const res = yield put({ type: 'initMessage', payload: { type } });
        if (res?.success) {
          message.success('留言成功');
        }
      }
    },
    *replyMessage({ payload }, { call, put }) {
      const result = yield call(replyArticleMessageApi, payload);
      if (result?.success) {
        const { type } = payload;
        const res = yield put({ type: 'initMessage', payload: { type } });
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
