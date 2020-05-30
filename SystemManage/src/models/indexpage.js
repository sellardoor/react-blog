import { indexInit } from '@/server/indexpage';

export default {
  namespace: 'indexpage',

  state: {
    STROKELINECAP: [],
    timeline: [],
  },

  effects: {
    *Init({ payload }, { call, put }) {
      const res = yield call(indexInit, payload);
      if (res && res.success) {
        yield put({ type: 'initState', payload: res.result });
      }
    },
  },

  reducers: {
    initState(state, { payload }) {
      return {
        ...state,
        STROKELINECAP: payload.STROKELINECAP,
        timeline: payload.timeline,
      };
    },
  },
};
