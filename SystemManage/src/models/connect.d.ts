/**
 * @description 暴露一些全局接口
 * @author sellardoor
 * @date 2020/06/13
 */
import { LoginModelState } from './login';
import { Dispatch, IRouteComponentProps } from 'umi';
import { FormComponentProps } from 'antd/es/form';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    login?: boolean;
  };
}

export interface connectState {
  loading: Loading;
  login: LoginModelState;
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
 * @description location, history接口
 */
export { IRouteComponentProps };
