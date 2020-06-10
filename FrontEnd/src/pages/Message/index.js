import React, { Component } from 'react';
import HeadCom from '@/components/HeadCom';
import BarCom from '@/components/BarCom';
import HotCom from '@/components/HotCom';
import FooterCom from '@/components/FooterCom';
import TitleCom from '@/components/TitleCom';
import UserCom from '@/components/UserCom';
import TagsCom from '@/components/TagsCom';
import Instagram from '@/components/Instagram';
import { Row, Col, Breadcrumb, Divider, Icon, Tooltip } from 'antd';
import CommentsComp from './components/CommentsComp';

export class Message extends Component {
  render() {
    return (
      <div>
        <TitleCom />
        <HeadCom />
        <Row style={{ background: '#fff', paddingTop: 20, paddingBottom: 100 }}>
          <Col xs={0} sm={0} md={0} lg={1} xl={4}></Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={16}
            xl={12}
            style={{ background: '#fff', borderRadius: 10, marginRight: 20 }}
          >
            <div style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
              <div
                style={{
                  borderRadius: 10,
                  padding: '5px 10px',
                  marginBottom: 30,
                }}
              >
                <Breadcrumb>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                  <Breadcrumb.Item>留言板</Breadcrumb.Item>
                </Breadcrumb>
                <div>
                  <img
                    style={{ width: '100%', marginTop: 50 }}
                    src="http://cdn.sellardoor.cn/about-hero.jpg"
                    alt=""
                  />
                </div>
                <p
                  style={{
                    marginTop: 50,
                    fontSize: 26,
                    borderLeft: '2px solid #24c2cb',
                    padding: '10px 20px',
                    background: '#f2f2f2',
                  }}
                >
                  一个普通的留言板
                </p>
                <div>
                  <CommentsComp />
                  <Divider style={{ color: '#666' }}>
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#000',
                      }}
                    >
                      <Tooltip title="https://github.com/sellardoor">
                        <Icon
                          id="hj-icon1"
                          style={{ marginRight: 25 }}
                          type="github"
                          theme="filled"
                        />
                      </Tooltip>
                      <Tooltip title="18584812344">
                        <Icon
                          id="hj-icon2"
                          style={{ marginRight: 25 }}
                          type="wechat"
                          theme="filled"
                        />
                      </Tooltip>
                      <Tooltip title="248833990">
                        <Icon
                          id="hj-icon3"
                          style={{ marginRight: 25 }}
                          type="qq-circle"
                          theme="filled"
                        />
                      </Tooltip>
                      <Tooltip title="https://www.yuque.com/gensan">
                        <Icon
                          id="hj-icon4"
                          style={{ marginRight: 25 }}
                          type="yuque"
                          theme="filled"
                        />
                      </Tooltip>
                      <Tooltip title="文明人不看微博">
                        <Icon
                          id="hj-icon5"
                          type="weibo-circle"
                          theme="filled"
                        />
                      </Tooltip>
                    </span>
                  </Divider>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 0, offset: 0 }}
            md={{ span: 0, offset: 0 }}
            lg={{ span: 6, offset: 0 }}
            xl={{ span: 4, offset: 0 }}
          >
            <BarCom />
            <div style={{ textAlign: 'center' }}>
              <img src="http://cdn.sellardoor.cn/banner-spot.jpg" alt="" />
            </div>
            <UserCom />
            <HotCom />
            <TagsCom />
            <Instagram />
          </Col>
          <Col xs={0} sm={0} md={0} lg={1} xl={4}></Col>
        </Row>
        <FooterCom />
      </div>
    );
  }
}

export default Message;
