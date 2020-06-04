import React, { useState, useEffect } from 'react';
import { Input, Row, Col, Button, Breadcrumb, Spin, message, Upload, Icon } from 'antd';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import '../Article/index.less';
import { articleDetailApi, articleUpdateApi } from '@/server/articleList';
import { Link } from 'umi';
import { CDN, UPLOADURL } from '@/utils/constants';

const ArticleEdit = props => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [type, setType] = useState('');
  const [load, setLoad] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const div = document.getElementById('contentdiv');
    div.scrollTop = div.scrollHeight;
    setLoad(true);
    articleDetailApi(props.location.query).then(res => {
      console.log(res)
      if (res?.success && res.result.length > 0) {
        setLoad(false);
        setText(res.result[0].content);
        setTitle(res.result[0].title);
        setInfo(res.result[0].info);
        setType(res.result[0].type);
        setAvatar(res.result[0].img);
        setFileList([{
          uid: '-1',
          name: 'old.png',
          status: 'done',
          url: res.result[0].img,
        }])
      }
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

  const TextChange = e => setText(e.target.value);
  const titleChange = e => setTitle(e.target.value);
  const infoChange = e => setInfo(e.target.value);
  const typeChange = e => setType(e.target.value);

  const uploadChange = info => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1);
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = `${CDN}${file?.response?.data?.data?.key ?? ''}`;
      }
      return file;
    });
    if (info.file.status === 'done') {
      const { response } = info.file;
      setAvatar(`${CDN}${response?.data?.data?.key ?? ''}`);
      message.success(`${info.file.name} 上传成功`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败`);
    }
    setFileList(fileList)
  }

  const beforeUpload = file => {
    const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('封面支持的格式为JPG/PNG');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('最大支持2MB!');
      }
      return isJpgOrPng && isLt2M;
  }

  const handleSubmit = () => {
    if (!title) {
      message.error('文章标题不可为空');
      return;
    }
    if (!type) {
      message.error('文章类型不可为空');
      return;
    }
    if (!avatar) {
      message.error('文章封面不可为空');
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
    articleUpdateApi({
      _id: props.location.query,
      update: {
        title,
        info,
        content: text,
        type,
        img: avatar
      },
    }).then(res => {
      if (res?.success) {
        message.success('修改成功');
        setLoad(false);
        props.history.push('/articlelist');
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
            <Breadcrumb.Item>文章修改</Breadcrumb.Item>
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

          <Col span={15} style={{ textAlign: 'right', paddingTop: 25 }}>
            <Button
              type="primary"
              onClick={handleSubmit}
              style={{ marginRight: 20 }}
            >
              修改
            </Button>
            <Button>
              <Link to="/articlelist">返回</Link>
            </Button>
          </Col>
        </Row>
        <Row style={{ marginBottom: 20 }}>
          <Col span={8}>
            <p style={{ marginBottom: 5 }}>文章类型 :</p>
            <Input value={type} onChange={typeChange} placeholder="文章类型" />
          </Col>
        </Row>
        <Row style={{ marginBottom: 20 }}>
          <Col span={8}>
            <p style={{ marginBottom: 5 }}>上传封面 :</p>
            <Upload
            name= 'file'
            action= {UPLOADURL}
            headers= {{
              authorization: 'authorization-text',
            }}
            onChange={uploadChange}
            beforeUpload={beforeUpload}
            fileList={fileList}
            >
              <Button>
                <Icon type="upload" /> 上传
              </Button>
            </Upload>
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
export default ArticleEdit;
