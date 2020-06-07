import React, { Component } from 'react';
import { List, Comment, Input, Button, Avatar, Tooltip, message } from 'antd';
import moment from 'moment'

export class CommentsHoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      value: '',
    };
  }
  toggleComent = () => {
    this.setState({
      isShow: !this.state.isShow,
      value: ''
    });
  };
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handlesubmit = item => {
    if(this.state.value === '') {
      message.error('消息不能为空')
      return;
    }
    if(!localStorage.getItem('login')){
      message.error('尚未登录')
      return;
    }
    this.props.update(item, this.state.value);
    this.setState({
      isShow: false,
      value: ''
    })
  };
  render() {
    const { children, author, avatar, content, item, date } = this.props;
    return (
      <Comment
        actions={[
          <React.Fragment>
            <span onClick={this.toggleComent}>Reply to</span>
            {this.state.isShow && (
              <>
                <Input.TextArea
                  onChange={this.handleChange}
                  value={this.state.value}
                  placeholder={`回复 ${author}...`}
                  style={{ width: '100%', marginBottom: 5, fontSize: 12 }}
                />
                <Button
                  onClick={() => this.handlesubmit(item)}
                  size="small"
                  type="primary"
                  style={{ fontSize: 12,marginRight: 10 }}
                >
                  Submit
                </Button>
                <Button
                  onClick={this.toggleComent}
                  size="small"
                  style={{ fontSize: 12 }}
                >
                  Cancel
                </Button>
              </>
            )}
          </React.Fragment>,
        ]}
        author={<a>{author}</a>}
        avatar={<Avatar src={avatar} alt={author} />}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={moment(date).format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment(date).fromNow()}</span>
          </Tooltip>
        }
      >
        {children}
      </Comment>
    );
  }
}

export default CommentsHoc;
