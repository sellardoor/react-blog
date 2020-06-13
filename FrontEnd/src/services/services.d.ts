/**
 * @description services接口
 * @author sellardoor
 * @date 2020/06/11
 */

/**
 * @description article接口
 */
export interface articleIdType {
  _id: string;
}
export interface articleMsgInitType {
  type: string;
}
export interface addMsgType {
  author: string;
  avatar: string;
  content: string;
  date: number;
  pid: string;
  type: string;
}
export interface replyMsgType extends addMsgType {
  fathername: string;
}

/**
 * @description users接口
 */
export interface registerType {
  confirm: string;
  email: string;
  password: string;
  username: string;
}
export interface checknameType {
  username: string;
}
export interface loginType extends checknameType {
  password: string;
}
export interface githubType {
    code:string;
}
