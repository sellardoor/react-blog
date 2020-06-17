/**
 * @description 留言组件
 * @author sellardoor
 * @date 2020/06/13
 */
import React, { Component } from 'react';
import HeadCom from '@/components/HeadCom';
import BarCom from '@/components/BarCom';
import HotCom from '@/components/HotCom';
import FooterCom from '@/components/FooterCom';
import TitleCom from '@/components/TitleCom';
import UserCom from '@/components/UserCom';
import TagsCom from '@/components/TagsCom';
import Instagram from '@/components/Instagram';
import { AboutBlog } from '@/utils/constants';
import {
  Row,
  Col,
  Breadcrumb,
  Divider,
  Icon,
  Tooltip,
  Descriptions,
  Timeline,
} from 'antd';
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
                  <Breadcrumb.Item>关于</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: '0px 40px' }}>
                  <p
                    style={{
                      marginTop: 50,
                      fontSize: 20,
                      borderLeft: '2px solid #24c2cb',
                      padding: '6px 20px',
                      background: '#f2f2f2',
                    }}
                  >
                    关于
                  </p>
                  <Descriptions layout="vertical">
                    <Descriptions.Item label="姓名">陈恒军</Descriptions.Item>
                    <Descriptions.Item label="职业">web前端</Descriptions.Item>
                    <Descriptions.Item label="地址">
                      成都, 四川
                    </Descriptions.Item>
                    <Descriptions.Item label="关于">
                      <p style={{textIndent: 28}}>
                      •&nbsp;该网站技术栈主要包括: umi, dva, antd, hooks,
                        typescript,egg, mongodb
                      </p>
                      <p style={{textIndent: 28}}>
                      •&nbsp;博客功能包括: 文章浏览, 搜索, 评论,
                        用户登录注册,支持Oauth第三方github登录, 优化包括:
                        external,nginx代码压缩, 图片压缩, 静态资源CDN.
                      </p>
                      <p style={{textIndent: 28}}>
                      •&nbsp;后台管理功能包括: 文章浏览, 搜索, 删除, 修改,
                        新增,热门文章管理等, 用户管理操作, 支持markdown.
                      </p>
                      <p style={{textIndent: 28}}>
                      •&nbsp;后端功能包括: 提供相应接口, Jwt鉴权,
                        CDN图片上传,egg-cors跨域处理, egg-mongoose数据库处理.
                      </p>
                    </Descriptions.Item>
                  </Descriptions>
                  <Timeline>
                    <Timeline.Item
                      dot={
                        <Icon
                          type="clock-circle-o"
                          style={{ fontSize: '16px' }}
                        />
                      }
                      color="red"
                    >
                      网站建设时间线
                    </Timeline.Item>
                    {AboutBlog.map(item => {
                      return (
                        <Timeline.Item color="#24c2cb">
                          <span style={{ fontSize: 12, marginRight: 16 }}>
                            {item.date}
                          </span>
                          <span>{item.content}</span>
                        </Timeline.Item>
                      );
                    })}
                  </Timeline>
                </div>
                <Divider
                  orientation="left"
                  style={{ color: '#666', marginTop: 100 }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: '#666',
                    }}
                  >
                    评论区
                  </span>
                </Divider>
                <div>
                  <CommentsComp />
                  <Divider style={{ color: '#666' }}>
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: '#000',
                      }}
                    >
                      <Tooltip title="https://github.com/sellardoor">
                        <Icon
                          className="hj-icon1"
                          style={{ marginRight: 25 }}
                          type="github"
                          theme="filled"
                        />
                      </Tooltip>
                      <Tooltip title="18584812344">
                        <Icon
                          className="hj-icon2"
                          style={{ marginRight: 25 }}
                          type="wechat"
                          theme="filled"
                        />
                      </Tooltip>
                      <Tooltip title="248833990">
                        <Icon
                          className="hj-icon3"
                          style={{ marginRight: 25 }}
                          type="qq-circle"
                          theme="filled"
                        />
                      </Tooltip>
                      <Tooltip title="https://www.yuque.com/gensan">
                        <Icon
                          className="hj-icon4"
                          style={{ marginRight: 25 }}
                          type="yuque"
                          theme="filled"
                        />
                      </Tooltip>
                      <Tooltip title="文明人不看微博">
                        <Icon
                          className="hj-icon5"
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
