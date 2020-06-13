/**
 * @description 留言区model
 * @author sellardoor
 * @date 2020/06/13
 */
import {
  initMessageApi,
  submitMessageApi,
  replyMessageApi,
} from '@/services/message';
import { message } from 'antd';
import { ArticleModelState} from './article';
import { Effect, Reducer } from 'umi';

export type MessageModelState = ArticleModelState

export interface MessageModelType {
  namespace: 'message';
  state: MessageModelState;
  effects: {
    initMessage: Effect;
    submitMessage: Effect;
    replyMessage: Effect;
  };
  reducers: {
    initData: Reducer<MessageModelState>;
    toogleSpin: Reducer<MessageModelState>;
  };
}
const MessageModel: MessageModelType = {
  namespace: 'message',

  state: {
    data: [],
    spin: false,
  },

  effects: {
    *initMessage(_, { call, put }) {
      const result = yield call(initMessageApi);
      if (result?.success) {
        yield put({ type: 'initData', payload: { data: result.result } });
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
        ...payload,
      };
    },
    toogleSpin(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default MessageModel;
