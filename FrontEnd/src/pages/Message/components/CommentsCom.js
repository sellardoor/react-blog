import React, { Component, useState } from 'react';
import {
  List,
  Form,
  Button,
  Input,
  Avatar,
  Comment,
  message,
  Spin,
} from 'antd';
import styles from '../index.less';
import CommentsHoc from './CommentsHoc';
import CommentsList from './CommentsList';
import { initMessageApi, editMessageApi } from '@/services/message';

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
      props.edited({
        author: username,
        avatar: avatar,
        content: value,
        children: [],
        date: +new Date(),
      });
      setValue('');
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

export class CommentsCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      spin: false,
    };
  }
  /**
   * @description 初始化留言板数据
   */
  componentDidMount() {
    this.setState({
      spin: true,
    });
    initMessageApi().then(res => {
      if (res?.success) {
        this.setState({
          data: res.result[0].message,
          spin: false,
        });
      }
    });
  }
  update = (item, value) => {
    const { username, avatar } = JSON.parse(localStorage.getItem('login'));
    item.children.push({
      author: username,
      avatar: avatar,
      content: value,
      date: +new Date(),
      children: [],
    });
    this.setState({
      spin: true,
    });
    editMessageApi(this.state.data)
      .then(res => {
        if (res?.success) {
          message.success('回复成功');
        }
      })
      .then(() => {
        initMessageApi().then(res => {
          if (res?.success) {
            this.setState({
              data: res.result[0].message,
              spin: false,
            });
          }
        });
      });
    this.forceUpdate();
  };

  edited = obj => {
    this.setState(
      {
        data: [...this.state.data, obj],
        spin: true,
      },
      () => {
        let param = this.state.data;
        editMessageApi(param)
          .then(res => {
            if (res?.success) {
              message.success('评论成功');
            }
          })
          .then(() => {
            initMessageApi().then(res => {
              if (res?.success) {
                this.setState({
                  data: res.result[0].message,
                  spin: false,
                });
              }
            });
          });
      },
    );
  };
  render() {
    return (
      <>
        <Spin size="large" spinning={this.state.spin}>
          <CommentsList update={this.update} data={this.state.data} />
          <Editor edited={this.edited} data={this.state.data} />
        </Spin>
      </>
    );
  }
}

export default CommentsCom;
