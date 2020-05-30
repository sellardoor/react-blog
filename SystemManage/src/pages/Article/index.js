import React, { useState, useEffect } from 'react';
import { Input, Row, Col, Button, Breadcrumb, Spin, message } from 'antd';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import './index.less';
import { uploadArticleApi } from '@/server/articleList';
import { Link } from 'umi';

const Article = props => {
  useEffect(() => {
    const div = document.getElementById('contentdiv');
    div.scrollTop = div.scrollHeight;
  });
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

  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [type, setType] = useState('');

  const TextChange = e => setText(e.target.value);
  const titleChange = e => setTitle(e.target.value);
  const infoChange = e => setInfo(e.target.value);
  const typeChange = e => setType(e.target.value);
  const [load, setLoad] = useState(false);

  const handleSubmit = () => {
    if (!title) {
      message.error('文章标题不可为空');
      return;
    }
    if (!type) {
      message.error('文章类型不可为空');
      return;
    }
    if (!info) {
      message.error('文章简介不可为空');
      return;
    }
    if (!text) {
      message.error('文章内容不可为空');
      return;
    }
    setLoad(true);
    uploadArticleApi({
      title,
      info,
      content: text,
      type,
      date: +new Date(),
    }).then(res => {
      message.success('上传成功');
      setLoad(false);
      props.history.push('/articlelist');
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
            <Breadcrumb.Item>上传文章</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row style={{ marginTop: 20, marginBottom: 20 }}>
          <h1>上传文章</h1>
        </Row>
        <Row style={{ marginBottom: 20 }}>
          <Col span={8}>
            <p style={{ marginBottom: 5 }}>文章标题 :</p>
            <Input
              value={title}
              onChange={titleChange}
              placeholder="文章标题"
            />
          </Col>
          <Col span={1}></Col>
          <Col span={8}>
            <p style={{ marginBottom: 5 }}>文章类型 :</p>
            <Input value={type} onChange={typeChange} placeholder="文章类型" />
          </Col>
          <Col span={7} style={{ textAlign: 'right', paddingTop: 25 }}>
            <Button
              type="primary"
              onClick={handleSubmit}
              style={{ marginRight: 20 }}
            >
              提交
            </Button>
            <Button>
              <Link to="/articlelist">返回</Link>
            </Button>
          </Col>
        </Row>
        <Row style={{ marginBottom: 20 }}>
          <Col span={17}>
            <p style={{ marginBottom: 5 }}>文章简介 :</p>
            <Input.TextArea
              value={info}
              onChange={infoChange}
              placeholder="文章简介"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <p style={{ marginBottom: 5 }}>文章内容 :</p>
            <Input.TextArea
              style={{ height: 500, background: '#f8f9fa' }}
              value={text}
              onChange={TextChange}
              placeholder="MarkDown"
            />
          </Col>
          <Col span={12} style={{ paddingLeft: 10 }}>
            <p style={{ marginBottom: 5 }}>MarkDown :</p>
            <div
              id="contentdiv"
              style={{
                border: '1px solid #ccc',
                borderRadius: 5,
                height: 500,
                padding: '5px 10px',
                overflow: 'auto',
              }}
              dangerouslySetInnerHTML={{ __html: marked(text) }}
            ></div>
          </Col>
        </Row>
      </div>
    </Spin>
  );
};
export default Article;
