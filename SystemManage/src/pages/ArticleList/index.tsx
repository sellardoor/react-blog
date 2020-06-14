import React, { useEffect, useState } from 'react';
import {
  Row,
  Breadcrumb,
  Col,
  Table,
  Divider,
  Spin,
  Popconfirm,
  message,
  Button,
  Icon,
  Tag,
} from 'antd';
import {
  articleListApi,
  articleDeleteApi,
  setArticleHotApi,
  removeArticleHotApi,
} from '@/services/articleList';
import moment from 'moment';
import { Link, connect } from 'umi';
import ArticleListForm from './components/ArticleListForm';
import { ResultItemType } from './index.d';
import { connectState, DispatchType } from '@/models/connect';

const { Column } = Table;

type Iprops = ReturnType<typeof mapStateToProps> & DispatchType;

const ArticleList: React.FC<Iprops> = props => {
  const { dispatch } = props;
  // 初始化列表
  useEffect(() => {
    dispatch({ type: 'article/setload', payload: { load: true } });
    dispatch({ type: 'article/initArticleList' }).then(() => {
      dispatch({ type: 'article/setload', payload: { load: false } });
    });
  }, []);
  // 删除文章
  const confirm = (key: string) => {
    dispatch({ type: 'article/setload', payload: { load: true } });
    articleDeleteApi({ _id: key }).then(res => {
      if (res?.success) {
        message.success('删除成功');
        articleListApi().then(res => {
          if (res?.success) {
            const resData = res.result.map((item: ResultItemType) => {
              return {
                key: item._id,
                title: item.title,
                type: item.type,
                date: moment(item.date).format('YYYY-MM-DD HH:mm:ss'),
                hot: item.hot,
                editDate: item.editDate
                  ? moment(item.editDate).format('YYYY-MM-DD HH:mm:ss')
                  : '',
              };
            });
            dispatch({
              type: 'article/initArticle',
              payload: {
                data: resData,
              },
            });
            dispatch({ type: 'article/setload', payload: { load: false } });
          }
        });
      }
    });
  };
  // 设为热门
  const setHotarticle = (key: string) => {
    dispatch({ type: 'article/setload', payload: { load: true } });
    setArticleHotApi({ _id: key }).then(res => {
      if (res?.success) {
        message.success('成功设为热门专栏文章');
        articleListApi().then(res => {
          if (res?.success) {
            const resData = res.result.map((item: ResultItemType) => {
              return {
                key: item._id,
                title: item.title,
                type: item.type,
                date: moment(item.date).format('YYYY-MM-DD HH:mm:ss'),
                hot: item.hot,
                editDate: item.editDate
                  ? moment(item.editDate).format('YYYY-MM-DD HH:mm:ss')
                  : '',
              };
            });
            dispatch({
              type: 'article/initArticle',
              payload: {
                data: resData,
              },
            });
            dispatch({ type: 'article/setload', payload: { load: false } });
          }
        });
      }
    });
  };
  // 取消热门
  const removeHotarticle = (key: string) => {
    dispatch({ type: 'article/setload', payload: { load: true } });
    removeArticleHotApi({ _id: key }).then(res => {
      if (res?.success) {
        message.success('成功取消热门专栏文章');
        articleListApi().then(res => {
          if (res?.success) {
            const resData = res.result.map((item: ResultItemType) => {
              return {
                key: item._id,
                title: item.title,
                type: item.type,
                date: moment(item.date).format('YYYY-MM-DD HH:mm:ss'),
                hot: item.hot,
                editDate: item.editDate
                  ? moment(item.editDate).format('YYYY-MM-DD HH:mm:ss')
                  : '',
              };
            });
            dispatch({
              type: 'article/initArticle',
              payload: {
                data: resData,
              },
            });
            dispatch({ type: 'article/setload', payload: { load: false } });
          }
        });
      }
    });
  };
  return (
    <Spin size="large" spinning={props.load}>
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
        <Row style={{ marginBottom: 50 }}>
          <ArticleListForm />
        </Row>
        <Row>
          <Col style={{ textAlign: 'right' }}>
            <Button type="primary">
              <Link to="/articlelist/uploadarticle">写文章</Link>
            </Button>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Table dataSource={props.data}>
            <Column
              width="20%"
              title="文章标题"
              dataIndex="title"
              key="title"
            />
            <Column
              width="15%"
              title="热门文章"
              key="hot"
              render={obj => {
                if (obj.hot) {
                  return (
                    <Icon style={{ color: 'red' }} type="fire" theme="filled" />
                  );
                } else {
                  return <Icon type="fire" />;
                }
              }}
            />
            <Column
              width="15%"
              title="文章类型"
              key="type"
              render={obj => {
                return <Tag color="#2db7f5">{obj.type}</Tag>;
              }}
            />
            <Column width="15%" title="创建时间" dataIndex="date" key="date" />
            <Column
              width="15%"
              title="修改时间"
              dataIndex="editDate"
              key="editDate"
            />
            <Column
              title="操作"
              key="action"
              render={obj => (
                <span>
                  <Link to={'/articlelist/articledetail?_id=' + obj.key}>
                    详情
                  </Link>
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
                  <Link to={'/articlelist/articleedit?_id=' + obj.key}>
                    修改
                  </Link>
                  <Divider type="vertical" />
                  <Popconfirm
                    title="是否设为热门专栏文章?"
                    onConfirm={() => setHotarticle(obj.key)}
                    onCancel={() => removeHotarticle(obj.key)}
                    okText="设为热门"
                    cancelText="取消热门"
                  >
                    <a>置顶</a>
                  </Popconfirm>
                </span>
              )}
            />
          </Table>
        </Row>
      </div>
    </Spin>
  );
};

const mapStateToProps = ({ article }: connectState) => ({
  type: article.type,
  data: article.data,
  load: article.load,
});
export default connect(mapStateToProps)(ArticleList);
