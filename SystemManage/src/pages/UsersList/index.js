import React, { useState, useEffect } from 'react';
import { Row, Col, Breadcrumb, Button, Table, Tag } from 'antd';
import { Link } from 'umi';
import { initUsersListApi } from '@/server/users';
import moment from 'moment';

const { Column } = Table;
export default function index() {
  const [data, setData] = useState([]);
  useEffect(() => {
    initUsersListApi().then(res => {
      if (res?.success) {
        const resultdata = res.result.map(item => {
          return {
            key: item._id,
            username: item.username,
            email: item.email,
            root: item.root,
            origin: item.origin,
            date: item?.date
              ? moment(item.date).format('YYYY-MM-DD HH:mm:ss')
              : '',
            recentlogin: item?.recentlogin
              ? moment(item.recentlogin).format('YYYY-MM-DD HH:mm:ss')
              : '',
          };
        });
        setData(resultdata);
      }
    });
  }, []);
  return (
    <div
      style={{
        background: '#fff',
        margin: 20,
        padding: 20,
        borderRadius: 5,
        border: '1px solid #ccc',
      }}
    >
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>用户管理</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row style={{ marginTop: 20, fontSize: 20 }}>
        <h1>用户管理</h1>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Table dataSource={data}>
          <Column title="用户名" dataIndex="username" key="username" />
          <Column title="邮箱" dataIndex="email" key="email" />
          <Column
            title="权限"
            key="root"
            render={item => {
              if (item.root === 'visitor') {
                return <Tag color="magenta">普通用户</Tag>;
              } else {
                return <Tag color="red">博主</Tag>;
              }
            }}
          />
          <Column
            title="来源"
            key="origin"
            render={item => {
              if (item.origin === 'blog') {
                return <Tag color="cyan">博客用户</Tag>;
              } else {
                return <Tag color="blue">GitHub用户</Tag>;
              }
            }}
          />
          <Column title="创建时间" dataIndex="date" key="date" />
          <Column
            title="最近登录时间"
            dataIndex="recentlogin"
            key="recentlogin"
          />
        </Table>
      </Row>
    </div>
  );
}
