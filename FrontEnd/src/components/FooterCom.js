import React from 'react';
import { Icon, Row, Col } from 'antd';

export default function FooterCom() {
  return (
    <div
      style={{
        background: '#fff',
        color: '#666',
        marginTop: 30,
        textAlign: 'center',
        fontSize: 12,
      }}
    >
      <div
        style={{
          color: '#24c2cb',
          fontSize: 16,
          padding: '45px 0',
          borderTop: '1px solid #e8e8e8',
        }}
      >
        FOLLOW ON INSTAGRAM
      </div>
      <Row>
        <Col span={3}>
          <img
            style={{ width: '100%', height: '100%', display: 'inline-block' }}
            src="http://cdn.sellardoor.cn/inst-1.jpeg.jpg"
            alt=""
          />
        </Col>
        <Col span={3}>
          <img
            style={{ width: '100%', height: '100%', display: 'inline-block' }}
            src="http://cdn.sellardoor.cn/inst-2.jpg"
            alt=""
          />
        </Col>
        <Col span={3}>
          <img
            style={{ width: '100%', height: '100%', display: 'inline-block' }}
            src="http://cdn.sellardoor.cn/inst-3.jpeg.jpg"
            alt=""
          />
        </Col>
        <Col span={3}>
          <img
            style={{ width: '100%', height: '100%', display: 'inline-block' }}
            src="http://cdn.sellardoor.cn/inst-4.jpg"
            alt=""
          />
        </Col>
        <Col span={3}>
          <img
            style={{ width: '100%', height: '100%', display: 'inline-block' }}
            src="http://cdn.sellardoor.cn/inst-5.jpeg.jpg"
            alt=""
          />
        </Col>
        <Col span={3}>
          <img
            style={{ width: '100%', height: '100%', display: 'inline-block' }}
            src="http://cdn.sellardoor.cn/inst-6.jpg"
            alt=""
          />
        </Col>
        <Col span={3}>
          <img
            style={{ width: '100%', height: '100%', display: 'inline-block' }}
            src="http://cdn.sellardoor.cn/inst-7.jpeg.jpg"
            alt=""
          />
        </Col>
        <Col span={3}>
          <img
            style={{ width: '100%', height: '100%', display: 'inline-block' }}
            src="http://cdn.sellardoor.cn/inst-8.jpg"
            alt=""
          />
        </Col>
      </Row>

      <div style={{backgroundColor: '#fff', paddingTop: 50, paddingBottom: 50}}>
        <p style={{ paddingTop: 20 }}>基于React-Umi, NodeJs-Egg, Mongodb</p>
        <p>Powered By SellarDoor</p>
        <p>
          <Icon type="github" theme="filled" />
          &nbsp; https://github.com/sellardoor
        </p>
        <p style={{}}>
          ICP主体备案号:{' '}
          <a
            style={{ color: '#666' }}
            href="http://www.beian.miit.gov.cn"
            target="_blank"
          >
            蜀ICP备20016349号
          </a>
        </p>
        <p style={{ paddingBottom: 20 }}>
          <img src="http://cdn.sellardoor.cn/%E5%A4%87%E6%A1%88%E5%9B%BE%E6%A0%87%20%281%29.png"></img>
          &nbsp;
          <a
            style={{ color: '#666' }}
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51010702001910"
            target="_blank"
          >
            川公网安备 51010702001910号
          </a>
        </p>
      </div>
    </div>
  );
}
