import React, { useState, useEffect } from 'react';
import { Row, Breadcrumb, Col, Spin, BackTop, Button, Affix } from 'antd';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import '../Article/index.less';
import { articleDetailApi } from '@/services/articleList';
import { Link } from 'umi';
import { IRouteComponentProps } from '@/models/connect';

export default function index(props: IRouteComponentProps) {
  const [load, setLoad] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [head, setHead] = useState<string>('');

  useEffect(() => {
    setLoad(true);
    const { _id = '' }: any = props.location.query;
    articleDetailApi({ _id }).then(res => {
      if (res?.success && res.result.length > 0) {
        setText(res.result[0].content);
        setHead(res.result[0].title);
        setLoad(false);
      }
    });
  }, []);

  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    },
  });
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
        <Row style={{ marginBottom: 30 }}>
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>文章详情</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <Col style={{ textAlign: 'right' }}>
            <Affix offsetTop={10}>
              <Button type="primary">
                <Link to="/articlelist">返回</Link>
              </Button>
            </Affix>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              textAlign: 'center',
              fontSize: 30,
              fontWeight: 'bold',
              marginBottom: 30,
            }}
          >
            {head}
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col span={4} />
          <Col span={16}>
            <div dangerouslySetInnerHTML={{ __html: marked(text) }} />
          </Col>
          <Col span={4} />
        </Row>
      </div>
    </Spin>
  );
}
