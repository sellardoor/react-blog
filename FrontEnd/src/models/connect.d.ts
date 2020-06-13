/**
 * @description 暴露一些全局接口
 * @author sellardoor
 * @date 2020/06/13
 */
import { UsersModelState } from './users';
import { ArticleModelState } from './article';
import { MessageModelState } from './message'
import { Dispatch } from 'umi';
import { FormComponentProps } from 'antd/es/form';
import { IRouteComponentProps } from 'umi';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    users?: boolean;
    article?: boolean;
    message?: boolean;
  };
}
/**
 * @description connect接口
 */
export interface connectState {
  loading: Loading;
  users: UsersModelState;
  article: ArticleModelState;
  message: MessageModelState;
}
/**
 * @description dispatch接口
 */
export interface DispatchType {
  dispatch: Dispatch;
}
/**
 * @description from接口
 */
export interface FormType {
  form: FormComponentProps['form'];
}
/**
 * @description location接口
 */
export { IRouteComponentProps };

