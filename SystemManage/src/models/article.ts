import { Reducer, Effect } from 'umi';
import { articleListApi } from '@/services/articleList';
import moment from 'moment';

export interface ResultItemType {
  content: string;
  date: number;
  editDate: number;
  hot: true;
  img: string;
  info: string;
  msg: number;
  title: string;
  type: string;
  view: number;
  _id: string;
  [key: string]: any;
}

export interface DataType {
  date: string;
  hot: boolean;
  key: string;
  title: string;
  type: string;
  editDate: string;
}

export interface ArticleModelState {
  type: string[];
  data: DataType[];
  load: boolean;
}

export interface ArticleModelType {
  namespace: 'article';
  state: ArticleModelState;
  effects: {
    initArticleList: Effect;
  };
  reducers: {
    initTypes: Reducer<ArticleModelState>;
    initArticle: Reducer<ArticleModelState>;
    setload: Reducer<ArticleModelState>;

  };
}

const ArticleModel: ArticleModelType = {
  namespace: 'article',
  state: {
    type: [],
    data: [],
    load: false,
  },
  effects: {
    *initArticleList({ payload }, { call, put }) {
      const result = yield call(articleListApi);
      if (result?.success) {
        let TypeArr: string[] = [];
        const resData = result.result.map((item: ResultItemType) => {
          TypeArr = [...TypeArr, item.type];
          return {
            key: item._id,
            title: item.title,
            type: item.type,
            date: moment(item.date).format('YYYY-MM-DD HH:mm:ss'),
            hot: item.hot,
            editDate: item.editDate
              ? moment(item.editDate).format('YYYY-MM-DD HH:mm:ss')
              : '',
          };
        });
        TypeArr.unshift('全部');
        TypeArr = [...new Set(TypeArr)];
        yield put({
          type: 'initArticle',
          payload: {
            data: resData,
          },
        });
        yield put({
          type: 'initTypes',
          payload: {
            type: TypeArr,
          },
        });
      }
    },
  },
  reducers: {
    initTypes(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    initArticle(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    setload(state, {payload}) {
        return {
            ...state,
            ...payload
        }
    }
  },
};

export default ArticleModel;
