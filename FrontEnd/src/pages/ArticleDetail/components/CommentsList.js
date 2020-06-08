import React, { useState } from 'react';
import { Comment, List, Input, Button, Tooltip, message } from 'antd';
import { connect } from 'dva';
import { getQueryVariable } from '@/utils/utils'

const CommentsHoc = Comp => props => {
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState('');
  const toggleComent = () => {
    setIsShow(!isShow);
    setValue('');
  };
  const handleChange = e => {
    setValue(e.target.value);
  };
  const handlesubmit = () => {
    if (value === '') {
      message.info('内容不能为空');
      return;
    }
    if (localStorage.getItem('login')) {
      const { username, avatar } = JSON.parse(localStorage.getItem('login'));
      if (props.pid === '0') {
        props.toogleSpin(true);
        props
          .replyMessage({
            author: username,
            avatar: avatar,
            content: value,
            pid: props._id,
            date: +new Date(),
            type: getQueryVariable('_id'),
            fathername: props.author,
          })
          .then(() => {
            props.toogleSpin(false);
            setIsShow(!isShow);
            setValue('');
          });
      } else {
        props.toogleSpin(true);
        props
          .replyMessage({
            author: username,
            avatar: avatar,
            content: value,
            pid: props.pid,
            date: +new Date(),
            type: getQueryVariable('_id'),
            fathername: props.author,
          })
          .then(() => {
            props.toogleSpin(false);
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
            <span onClick={toggleComent}>Reply to</span>
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
            <span onClick={toggleComent}>Reply to</span>
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
const mapStateFromProps = ({ article }) => ({ article });
const mapDispatchFromProps = {
  replyMessage: payload => ({ type: 'article/replyMessage', payload }),
  toogleSpin: payload => ({ type: 'article/toogleSpin', payload }),
};
const CommentsComp = connect(
  mapStateFromProps,
  mapDispatchFromProps,
)(CommentsHoc(Comment));

const CommentsList = props => {
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
