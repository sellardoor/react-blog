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
import { connectState, DispatchType } from '@/models/connect';

const { TextArea } = Input;

type EditComType = DispatchType;

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
      const { username, avatar } = JSON.parse(
        localStorage.getItem('login') || '{}',
      );
      dispatch({ type: 'message/toogleSpin', payload: { spin: true } });
      dispatch({
        type: 'message/submitMessage',
        payload: {
          author: username,
          avatar: avatar,
          content: value,
          pid: '0',
          date: +new Date(),
          type: 'message',
        },
      }).then(() => {
        dispatch({ type: 'message/toogleSpin', payload: { spin: false } });

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
                  Add Comment
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
                  Add Comment
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

type CommentsComp = ReturnType<typeof mapStateFromProps> & DispatchType;
const CommentsComp: React.FC<CommentsComp> = props => {
  const { dispatch } = props;
  useEffect(() => {
    dispatch({ type: 'message/toogleSpin', payload: { spin: true } });
    dispatch({ type: 'message/initMessage' }).then(() => {
      dispatch({ type: 'message/toogleSpin', payload: { spin: false } });
    });
  }, []);
  const data = arrayToTree(props.data);
  return (
    <div>
      <Spin spinning={props.spin} size="large">
        <CommentsList data={data} />
      </Spin>
      <Editor />
    </div>
  );
};

const mapStateFromProps = ({ message }: connectState) => ({
  data: message.data,
  spin: message.spin,
});

export default connect(mapStateFromProps)(CommentsComp);
