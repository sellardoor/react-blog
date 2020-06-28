/**
 * @description 首页List文章组件
 * @author sellardoor
 * @date 2020/06/04
 */
import React, { useEffect, useState } from 'react';
import { Icon, Spin, Card, Col, Row, Tag } from 'antd';
import { hotArticleApi } from '@/services/article';
import './index.less';
import moment from 'moment';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import styles from '../pages/index.less';
import LazyLoad from 'react-lazyload';
import CountUp from 'react-countup';

interface DataProps {
  date: number;
  img: string;
  info: string;
  msg: number;
  title: string;
  type: string;
  view: number;
  _id: string;
  [key: string]: any;
}

export default function ListCom() {
  const [data, setData] = useState<DataProps[]>([]);
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => {
    setLoad(true);
    hotArticleApi().then(res => {
      if (res?.success) {
        setData(res.result);
        setLoad(false);
      }
    })
  }, []);

  const articleDetail = (_id: string) => {
    window.open(`/articledetail?_id=${_id}`, '_self');
  };

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
    <Spin spinning={load} size="large">
      {data.length &&
        data.map(item => {
          return (
            <Card
              onClick={() => articleDetail(item._id)}
              hoverable={true}
              bordered={false}
              style={{ marginBottom: 20, marginRight: 20 }}
              className={styles.cardCss}
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
                    <Tag color="#24c2cb">
                      <Icon
                        style={{ marginRight: 5, color: '#fff' }}
                        type="eye"
                        theme="filled"
                      />
                      <span>
                        <LazyLoad offset={0}>
                          <CountUp duration={3} start={0} end={item.view} />
                        </LazyLoad>
                      </span>
                    </Tag>
                    <Tag color="#2db7f5">
                      <Icon
                        style={{
                          marginRight: 5,
                          color: '#fff',
                        }}
                        type="wechat"
                        theme="filled"
                      />
                      <span>
                        <LazyLoad offset={0}>
                          <CountUp duration={3} start={0} end={item.msg} />条
                        </LazyLoad>
                      </span>
                    </Tag>
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
