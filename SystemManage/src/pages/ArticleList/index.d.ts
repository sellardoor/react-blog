export interface DataType {
  date: string;
  hot: boolean;
  key: string;
  title: string;
  type: string;
  editDate: string;
}
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
