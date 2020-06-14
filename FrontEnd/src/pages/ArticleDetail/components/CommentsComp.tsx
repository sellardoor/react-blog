/**
 * @description 将具有独立状态的Comment递归渲染List
 * @author sellardoor
 * @date 2020/06/13
 */
import React, { useState, useEffect } from 'react';
import CommentsList from './CommentsList';
import { arrayToTree } from '@/utils/utils';
import { Comment, Form, Avatar, Button, Input, message, Spin } from 'antd';
import { connect } from 'dva';
import {
  connectState,
  DispatchType,
  IRouteComponentProps,
} from '@/models/connect';

const { TextArea } = Input;

type EditComType = DispatchType & IRouteComponentProps;

const EditCom: React.FC<EditComType> = props => {
  const { dispatch } = props;

  const [value, setValue] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);
  const onSubmit = () => {
    if (value === '') {
      message.info('内容不能为空');
      return;
    }
    if (localStorage.getItem('login')) {
      const {
        username,
        avatar,
      }: { username: string; avatar: string } = JSON.parse(
        localStorage.getItem('login') || '{}',
      );
      dispatch({ type: 'article/toogleSpin', payload: { spin: true } });
      const { _id = '' }: any = props.location.query;
      dispatch({
        type: 'article/submitMessage',
        payload: {
          author: username,
          avatar: avatar,
          content: value,
          pid: '0',
          date: +new Date(),
          type: _id,
        },
      }).then(() => {
        dispatch({ type: 'article/toogleSpin', payload: { spin: false } });
        setValue('');
      });
    } else {
      message.error('尚未登录');
    }
  };
  return (
    <div>
      {localStorage.getItem('login') ? (
        <Comment
          author={JSON.parse(localStorage.getItem('login') || '{}').username}
          avatar={
            <Avatar
              src={JSON.parse(localStorage.getItem('login') || '{}').avatar}
              alt={JSON.parse(localStorage.getItem('login') || '{}').username}
            />
          }
          content={
            <>
              <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" onClick={onSubmit} type="primary">
                  评论
                </Button>
              </Form.Item>
            </>
          }
        />
      ) : (
        <Comment
          avatar={<Avatar icon="user" />}
          content={
            <>
              <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" onClick={onSubmit} type="primary">
                  评论
                </Button>
              </Form.Item>
            </>
          }
        />
      )}
    </div>
  );
};
const Editor = connect()(EditCom);

type CommentsComp = ReturnType<typeof mapStateFromProps> &
  DispatchType &
  IRouteComponentProps;
const CommentsComp: React.FC<CommentsComp> = props => {
  const { dispatch } = props;
  useEffect(() => {
    dispatch({ type: 'article/toogleSpin', payload: { spin: true } });
    const { _id = '' }: any = props.location.query;
    dispatch({
      type: 'article/initMessage',
      payload: { type: _id },
    }).then(() => {
      dispatch({ type: 'article/toogleSpin', payload: { spin: false } });
    });
  }, []);
  const data = arrayToTree(props.data);
  return (
    <div>
      <Editor {...props} />
      <Spin spinning={props.spin} size="large">
        <CommentsList data={data} />
      </Spin>
    </div>
  );
};

const mapStateFromProps = ({ article }: connectState) => ({
  data: article.data,
  spin: article.spin,
});

export default connect(mapStateFromProps)(CommentsComp);
