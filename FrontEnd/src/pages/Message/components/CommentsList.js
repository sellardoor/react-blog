import React, { Component } from 'react';
import { List } from 'antd';
import CommentsHoc from './CommentsHoc';

export class CommentsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.data}
        renderItem={item => {
          if (item?.children?.length > 0) {
            return (
              <CommentsHoc
                update={this.props.update}
                item={item}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                date={item.date}
                children={<CommentsList update={this.props.update} data={item.children} />}
              />
            );
          } else {
            return (
              <CommentsHoc
                update={this.props.update}
                item={item}
                update={this.props.update}
                author={item.author}
                avatar={item.avatar}
                date={item.date}
                content={item.content}
              />
            );
          }
        }}
      />
    );
  }
}

export default CommentsList;
