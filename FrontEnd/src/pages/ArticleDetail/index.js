import React, { useEffect, useState } from 'react';
import { Row, Col, Breadcrumb, Icon, Spin, Affix } from 'antd';
import HeadCom from '@/components/HeadCom';
import BarCom from '@/components/BarCom';
import HotCom from '@/components/HotCom';
import FooterCom from '@/components/FooterCom';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import '../index.less';
import { articleDetailApi } from '@/services/article';
import moment from 'moment';

export default function index(props) {
  const [detail, setDetail] = useState({ content: '' });
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    articleDetailApi(props.location.query).then(res => {
      setDetail(res.result[0]);
      setLoad(false);
    });
  }, []);

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
    <div>
      <HeadCom />
      <Row
        style={{ background: '#f2f2f2', paddingTop: 20, paddingBottom: 100 }}
      >
        <Col span={2}></Col>
        <Col
          span={16}
          style={{ background: '#fff', borderRadius: 10, marginRight: 20 }}
        >
          <div style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
            <div
              style={{
                background: '#e6f7ff',
                border: '1px solid #91d5ff',
                borderRadius: 10,
                padding: '5px 10px',
              }}
            >
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>文章列表</Breadcrumb.Item>
                <Breadcrumb.Item>{detail.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h1
              style={{ textAlign: 'center', marginTop: 20, marginBottom: 10 }}
            >
              {detail.title}
            </h1>
            <div style={{ marginBottom: 20, textAlign: 'center' }}>
              <Icon
                style={{ marginRight: 5, color: '#888' }}
                type="calendar"
                theme="filled"
              />
              <span style={{ marginRight: 15 }}>
                {moment(detail.date).format('YYYY-MM-DD HH:mm:ss')}
              </span>
              <Icon
                style={{ marginRight: 5, color: '#888' }}
                type="eye"
                theme="filled"
              />
              <span style={{ marginRight: 15 }}>0</span>
              <Icon
                style={{ marginRight: 5, color: '#888' }}
                type="wechat"
                theme="filled"
              />
              <span>0条</span>
            </div>
            <Spin spinning={load} size="large">
              <div
                style={{ marginTop: 50, paddingLeft: 20, paddingRight: 20 }}
                dangerouslySetInnerHTML={{
                  __html: marked(detail.content) || '',
                }}
            ></div>
            </Spin>
          </div>
        </Col>
        <Col span={4}>
          <BarCom />
          <Affix offsetTop={20}>
            <HotCom />
          </Affix>
        </Col>
        <Col span={2}></Col>
      </Row>
      <FooterCom />
    </div>
  );
}
