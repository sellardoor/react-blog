import React, { useState, useEffect } from 'react';
import CommentsList from './CommentsList';
import { arrayToTree } from '@/utils/utils';
import { Comment, Form, Avatar, Button, Input, message, Spin } from 'antd';
import { connect } from 'dva';

const { TextArea } = Input;
function Editor(props) {
  const [value, setValue] = useState('');
  const onChange = e => setValue(e.target.value);
  const onSubmit = () => {
    if (value === '') {
      message.info('内容不能为空');
      return;
    }
    if (localStorage.getItem('login')) {
      const { username, avatar } = JSON.parse(localStorage.getItem('login'));
      props.toogleSpin(true)
      props
        .submitMessage({
          author: username,
          avatar: avatar,
          content: value,
          pid: '0',
          date: +new Date(),
          type: 'message',
        })
        .then(() => {
          props.toogleSpin(false)
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
          author={JSON.parse(localStorage.getItem('login')).username}
          avatar={
            <Avatar
              src={JSON.parse(localStorage.getItem('login')).avatar}
              alt={JSON.parse(localStorage.getItem('login')).username}
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
}

const CommentsComp = props => {
  useEffect(() => {
    props.toogleSpin(true)
    props.initMessage().then(() => {
      props.toogleSpin(false)
    });
  }, []);
  const data = arrayToTree(props.data);
  return (
    <div>
      <Spin spinning={props.spin} size='large'>
        <CommentsList data={data} />
      </Spin>
      <Editor toogleSpin={props.toogleSpin} submitMessage={props.submitMessage} />
    </div>
  );
};

const mapStateFromProps = ({ message }) => ({
  data: message.data,
  spin: message.spin,
});
const mapDispatchFromProps = {
  initMessage: () => ({ type: 'message/initMessage' }),
  submitMessage: payload => ({ type: 'message/submitMessage', payload }),
  toogleSpin: payload => ({type: 'message/toogleSpin', payload})
};

export default CommentsComp |> connect(mapStateFromProps, mapDispatchFromProps);
