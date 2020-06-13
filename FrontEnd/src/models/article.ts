/**
 * @description 文章model
 * @author sellardoor
 * @date 2020/06/13
 */
import {
  initArticleMessageApi,
  submitArticleMessageApi,
  replyArticleMessageApi,
} from '@/services/article';
import { message } from 'antd';
import { Effect, Reducer } from 'umi';

interface DataType {
  author: string;
  avatar: string;
  content: string;
  date: number;
  pid: string;
  type: string;
  _id: string;
  [key: string]: any;
}

export interface ArticleModelState {
  data: DataType[];
  spin: boolean;
}

export interface ArticleModelType {
  namespace: 'article';
  state: ArticleModelState;
  effects: {
    initMessage: Effect;
    submitMessage: Effect;
    replyMessage: Effect;
  };
  reducers: {
    initData: Reducer<ArticleModelState>;
    toogleSpin: Reducer<ArticleModelState>;
  };
}

const ArticleModel: ArticleModelType = {
  namespace: 'article',

  state: {
    data: [],
    spin: false,
  },

  effects: {
    *initMessage({ payload }, { call, put }) {
      const result = yield call(initArticleMessageApi, payload);
      if (result?.success) {
        yield put({
          type: 'initData',
          payload: {
            data: result.result,
          },
        });
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
export default ArticleModel;
