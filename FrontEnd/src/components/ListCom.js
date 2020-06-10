import React, { useEffect, useState } from 'react';
import { Icon, Spin, Card, Col, Row } from 'antd';
import { initIndexArticleListApi } from '@/services/article';
import styles from './index.less';
import moment from 'moment';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import '../pages/index.less';
import LazyLoad from 'react-lazyload';

export default function ListCom(props) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    initIndexArticleListApi().then(res => {
      if (res?.success) {
        setData(res.result.list);
        setLoad(false);
      }
    });
  }, []);

  const articleDetail = _id => {
    window.open(`/articledetail?_id=${_id}`, '_self');
  };

  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    },
  });
  return (
    <Spin spinning={load} size="large">
      {data.length &&
        data.map(item => {
          return (
            <Card
              onClick={() => articleDetail(item._id)}
              hoverable={true}
              bordered={false}
              style={{ marginBottom: 20, marginRight: 20 }}
            >
              <Row>
                <Col xs={0} sm={0} md={0} lg={0} xl={8}>
                  <LazyLoad offset={100}>
                    <img style={{ width: '100%' }} src={item.img} alt="" />
                  </LazyLoad>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={16}
                  style={{ paddingLeft: 30 }}
                >
                  <div
                    style={{
                      color: '#24c2cb',
                      fontFamily: 'Josefin Sans',
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: '32px',
                    }}
                  >
                    {moment(item.date).format('DD MMMM YYYY')}
                    <span
                      style={{ marginLeft: 8, marginRight: 8, fontSize: 24 }}
                    >
                      .
                    </span>
                    {item.type}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      lineHeight: '28px',
                      color: '#666',
                      fontWeight: 600,
                      letterSpacing: 2,
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ marginBottom: 10, fontSize: 12 }}>
                    <Icon
                      style={{ marginRight: 5, color: '#666' }}
                      type="eye"
                      theme="filled"
                    />
                    <span style={{ marginRight: 15 }}>{item.view}</span>
                    <Icon
                      style={{ marginRight: 5, color: '#666' }}
                      type="wechat"
                      theme="filled"
                    />
                    <span>{item.msg}条</span>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: marked(item.info) }}
                    style={{
                      color: '#666',
                      paddingRight: 20,
                      lineHeight: '27px',
                      fontSize: 14,
                      fontWeight: 400,
                      height: 108,
                    }}
                  />
                </Col>
              </Row>
            </Card>
          );
        })}
    </Spin>
  );
}
