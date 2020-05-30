import React, { useEffect, useState } from 'react';
import {
  Row,
  Breadcrumb,
  Col,
  Table,
  Divider,
  Result,
  Spin,
  Popconfirm,
  message,
  Button
} from 'antd';
import { articleListApi, articleDeleteApi } from '@/server/articleList';
import moment from 'moment';
import { Link } from 'umi';

const { Column } = Table;

export default function ArticleList(props) {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    articleListApi().then(res => {
      setLoad(true);
      if (res?.success) {
        const resDate = res.result.map(item => {
          return {
            key: item._id,
            title: item.title,
            type: item.type,
            date: moment(item.date).format('YYYY-MM-DD HH:mm:ss'),
          };
        });
        setData(resDate);
        setLoad(false);
      }
    });
  }, []);
  const confirm = key => {
    setLoad(true);
    articleDeleteApi({ _id: key }).then(res => {
      if (res?.success) {
        message.success('删除成功');
        articleListApi().then(res => {
          if (res?.success) {
            const resDate = res.result.map(item => {
              return {
                key: item._id,
                title: item.title,
                type: item.type,
                date: moment(item.date).format('YYYY-MM-DD HH:mm:ss'),
              };
            });
            setData(resDate);
            setLoad(false);
          }
        });
      }
    });
  };
  return (
    <Spin size="large" spinning={load}>
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
            <Breadcrumb.Item>文章列表</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row style={{ marginTop: 20, fontSize: 20 }}>
          <h1>文章列表</h1>
        </Row>
        <Row>
          <Col style={{textAlign:'right'}}>
            <Button type='primary'>
              <Link to='/articlelist/uploadarticle'>
              写文章
              </Link>
            </Button>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Table dataSource={data}>
            <Column
              width="55%"
              title="文章标题"
              dataIndex="title"
              key="title"
            />
            <Column width="15%" title="文章类型" dataIndex="type" key="type" />
            <Column width="20%" title="创建时间" dataIndex="date" key="date" />
            <Column
              title="操作"
              key="action"
              render={obj => (
                <span>
                  <Link to={'/articlelist/articledetail?_id=' + obj.key}>详情</Link>
                  <Divider type="vertical" />
                  <Popconfirm
                    title="确定要删除吗?"
                    onConfirm={() => confirm(obj.key)}
                    okText="是"
                    cancelText="否"
                  >
                    <a>删除</a>
                  </Popconfirm>
                  <Divider type="vertical" />
                  <Link to={'/articlelist/articleedit?_id=' + obj.key}>修改</Link>
                </span>
              )}
            />
          </Table>
        </Row>
      </div>
    </Spin>
  );
}
