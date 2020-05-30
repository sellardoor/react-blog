import React, { useEffect, useState } from 'react';
import { List, Icon, Spin } from 'antd';
import { initIndexArticleListApi } from '@/services/article';
import styles from './index.less';
import moment from 'moment';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import '../pages/Detail/index.less';

export default function ListCom(props) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true)
    initIndexArticleListApi().then(res => {
      if(res?.success){
        setData(res.result);
        setLoad(false)
      }
    });
  }, []);

  const articleDetail = _id => {
    window.open(`/detail?_id=${_id}`, '_self');
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
    <Spin spinning={load} size='large'>
      <List
        style={{
          borderRadius: 10,
          background: '#f2f2f2',
          marginRight: 20,
        }}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={data}
        split={false}
        renderItem={item => (
          <List.Item
            style={{ background: '#fff', marginBottom: 20, borderRadius: 10 }}
          >
            <div>
              <img
                src={item.img}
                alt=""
                style={{ height: 168, margin: '10px 20px', width:260 }}
              />
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => articleDetail(item._id)}
                style={{
                  fontWeight: 'bold',
                  color: '#666',
                  fontSize: 18,
                  marginTop: -30,
                  cursor: 'pointer',
                }}
              >
                {item.title}
              </h3>
              <div style={{ marginBottom: 20 }}>
                <Icon
                  style={{ marginRight: 5, color: '#888' }}
                  type="calendar"
                  theme="filled"
                />
                <span style={{ marginRight: 15 }}>
                  {moment(item.date).format('YYYY-MM-DD HH:mm:ss')}
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
              <div dangerouslySetInnerHTML={{__html: marked(item.info)}} style={{ color: '#666', paddingRight: 20 }} />
            </div>
          </List.Item>
        )}
      />
    </Spin>
  );
}
