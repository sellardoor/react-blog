import React, { useState, useEffect } from 'react';
import { Row, Col, Breadcrumb, List, Spin } from 'antd';
import HeadCom from '@/components/HeadCom';
import BarCom from '@/components/BarCom';
import HotCom from '@/components/HotCom';
import FooterCom from '@/components/FooterCom';
import { initIndexArticleListApi } from '@/services/article';
import TitleCom from '@/components/TitleCom';
import moment from 'moment';

export default function index(props) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    initIndexArticleListApi().then(res => {
      setData(res.result);
      setLoad(false);
    });
  }, []);
  const handleDetail = id => {
      props.history.push(`/articledetail?_id=${id}`)
  }
  return (
    <div>
      <TitleCom />
      <HeadCom />
      <Row
        style={{ background: '#fff', paddingTop: 20, paddingBottom: 100 }}
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
                marginBottom: 30,
              }}
            >
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>文章列表</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Spin spinning={load} size="large">
              <List
                style={{
                  marginBottom: 50,
                  borderRadius: 10,
                  background: '#fff',
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
                    onClick={() => handleDetail(item._id)}
                    style={{
                      background: '#fff',
                      borderBottom: '1px solid #f2f2f2',
                      justifyContent: 'space-between',
                      paddingLeft: 10,
                      cursor: 'pointer'
                    }}
                  >
                    <div>{item.title}</div>
                    <div>{moment(item.date).format('YYYY-MM-DD HH:mm:ss')}</div>
                  </List.Item>
                )}
              />
            </Spin>
          </div>
        </Col>
        <Col span={4}>
          <BarCom />
          <HotCom />
        </Col>
        <Col span={2}></Col>
      </Row>
      <FooterCom />
    </div>
  );
}
