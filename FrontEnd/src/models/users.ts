/**
 * @description 用户组件model
 * @author sellardoor
 * @date 2020/06/13
 */
import { Reducer } from 'umi';

export interface UsersModelState {
  username?: string;
  avatar?: string;
  loading?: boolean;
  globaLoading?: boolean;
}

export interface UsersModelType {
  namespace: 'users';
  state: UsersModelState;
  reducers: {
    initUser: Reducer<UsersModelState>;
    changeGlobaLoading: Reducer<UsersModelState>;
  };
}

const UsersModel: UsersModelType = {
  namespace: 'users',

  state: {
    username: '',
    avatar: '',
    loading: true,
    globaLoading: false,
  },
  reducers: {
    initUser(state, action) {
      return {
        ...state,
        username: action.payload.username,
        avatar: action.payload.avatar,
        loading: false,
      };
    },
    changeGlobaLoading(state, action) {
      return {
        ...state,
        globaLoading: action.payload.load,
      };
    },
  },
};

export default UsersModel;
