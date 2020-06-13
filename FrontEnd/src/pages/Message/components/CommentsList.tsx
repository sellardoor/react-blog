/**
 * @description Comment组件封装
 * @author sellardoor
 * @date 2020/06/13
 */
import React, { useState } from 'react';
import { Comment, List, Input, Button, Tooltip, message } from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import { connectState, DispatchType } from '@/models/connect';

type CommentHocType = ReturnType<typeof mapStateFromProps> &
  DispatchType &
  CommentsListArrType & { fathername: string };
const CommentsHoc = () => (props: CommentHocType) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const toggleComent = () => {
    setIsShow(!isShow);
    setValue('');
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const handlesubmit = () => {
    if (value === '') {
      message.info('内容不能为空');
      return;
    }
    if (localStorage.getItem('login')) {
      const { username, avatar } = JSON.parse(
        localStorage.getItem('login') || '{}',
      );
      if (props.pid === '0') {
        props.dispatch({ type: 'message/toogleSpin', payload: { spin: true } });
        props
          .dispatch({
            type: 'message/replyMessage',
            payload: {
              author: username,
              avatar: avatar,
              content: value,
              pid: props._id,
              date: +new Date(),
              type: 'message',
              fathername: props.author,
            },
          })
          .then(() => {
            props.dispatch({
              type: 'message/toogleSpin',
              payload: { spin: false },
            });
            setIsShow(!isShow);
            setValue('');
          });
      } else {
        props.dispatch({ type: 'message/toogleSpin', payload: { spin: true } });
        props
          .dispatch({
            type: 'message/replyMessage',
            payload: {
              author: username,
              avatar: avatar,
              content: value,
              pid: props.pid,
              date: +new Date(),
              type: 'message',
              fathername: props.author,
            },
          })

          .then(() => {
            props.dispatch({
              type: 'message/toogleSpin',
              payload: { spin: false },
            });
            setIsShow(!isShow);
            setValue('');
          });
      }
    } else {
      message.error('尚未登录');
    }
  };
  if (props.children) {
    return (
      <Comment
        actions={[
          <React.Fragment>
            <span onClick={toggleComent}>回复</span>
            {isShow && (
              <>
                <Input.TextArea
                  onChange={handleChange}
                  value={value}
                  placeholder={`回复 ${props.author}...`}
                  style={{ width: '100%', marginBottom: 5, fontSize: 12 }}
                />
                <Button
                  onClick={handlesubmit}
                  size="small"
                  type="primary"
                  style={{ fontSize: 12, marginRight: 10 }}
                >
                  Submit
                </Button>
                <Button
                  onClick={toggleComent}
                  size="small"
                  style={{ fontSize: 12 }}
                >
                  Cancel
                </Button>
              </>
            )}
          </React.Fragment>,
        ]}
        author={
          props.fathername
            ? `${props.author} 回复 ${props.fathername}`
            : props.author
        }
        avatar={props.avatar}
        content={props.content}
        children={props.children}
        datetime={
          <Tooltip
            title={moment(props.date)
              .subtract(1, 'days')
              .format('YYYY-MM-DD HH:mm:ss')}
          >
            <span>
              {moment(props.date)
                .subtract(1, 'days')
                .fromNow()}
            </span>
          </Tooltip>
        }
      />
    );
  } else {
    return (
      <Comment
        actions={[
          <React.Fragment>
            <span onClick={toggleComent}>回复</span>
            {isShow && (
              <>
                <Input.TextArea
                  onChange={handleChange}
                  value={value}
                  placeholder={`回复 ${props.author}...`}
                  style={{ width: '100%', marginBottom: 5, fontSize: 12 }}
                />
                <Button
                  onClick={handlesubmit}
                  size="small"
                  type="primary"
                  style={{ fontSize: 12, marginRight: 10 }}
                >
                  Submit
                </Button>
                <Button
                  onClick={toggleComent}
                  size="small"
                  style={{ fontSize: 12 }}
                >
                  Cancel
                </Button>
              </>
            )}
          </React.Fragment>,
        ]}
        author={
          props.fathername
            ? `${props.author} 回复 ${props.fathername}`
            : props.author
        }
        avatar={props.avatar}
        content={props.content}
        datetime={
          <Tooltip title={moment(props.date).format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment(props.date).fromNow()}</span>
          </Tooltip>
        }
      />
    );
  }
};
const mapStateFromProps = ({ message }: connectState) => ({ message });
const CommentsComp = connect(mapStateFromProps)(CommentsHoc());

export interface CommentsListArrType {
  author: string;
  avatar: string;
  children?: CommentsListArrType[];
  content: string;
  date: number;
  pid: string;
  type: string;
  _id: string;
  [key: string]: any;
}
export interface CommentsListType {
  data: CommentsListArrType[];
}

const CommentsList = (props: CommentsListType) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={item => {
        const { children, ...rest } = item;
        if (item.children) {
          return (
            <li>
              <CommentsComp
                {...rest}
                children={<CommentsList data={item.children} />}
              />
            </li>
          );
        } else {
          return (
            <li>
              <CommentsComp {...item} />
            </li>
          );
        }
      }}
    />
  );
};

export default CommentsList;
