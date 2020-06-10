import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Breadcrumb,
  List,
  Spin,
  Divider,
  Icon,
  Timeline,
  Tooltip,
} from 'antd';
import HeadCom from '@/components/HeadCom';
import BarCom from '@/components/BarCom';
import HotCom from '@/components/HotCom';
import FooterCom from '@/components/FooterCom';
import TitleCom from '@/components/TitleCom';
import UserCom from '@/components/UserCom';
import TagsCom from '@/components/TagsCom';
import Instagram from '@/components/Instagram';
import { initIndexArticleListApi } from '@/services/article';
import moment from 'moment';
import { Link } from 'umi';

export default function index(props) {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setLoad(true);
    initIndexArticleListApi().then(res => {
      if (res?.success) {
        setTotal(res.result.list.length);
        /**
         * @description 将返回的所有文章数组,转为key为年份, value为当前年份数组的对象
         * @description 这里为啥年份额外加个字符串key是因为, 数字或者字符串数字的key即使排序也只会按从小到大排,无法改变顺序
         */
        let obj = {};
        res.result.list.forEach(item => {
          let year = moment(item.date).format('YYYY');
          obj[year + 'key'] = [
            ...(obj[year + 'key'] || (obj[year + 'key'] = [])),
            item,
          ];
        });
        /**
         * @description 将上述对象按key的年份顺序倒序
         */
        let orderObj = {};
        Object.keys(obj)
          .sort((a, b) => parseInt(b) - parseInt(a))
          .forEach(key => {
            orderObj[key] = obj[key];
          });
        /**
         * @description 将对象value的数组按时间倒序排列
         */
        Object.keys(orderObj).forEach(keys => {
          orderObj[keys].sort((a, b) => b.date - a.date);
        });
        setData(obj);
        setLoad(false);
      }
    });
  }, []);
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
                <Breadcrumb.Item>归档</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Spin spinning={load} size="large">
              <Timeline style={{ marginBottom: 100 }}>
                <Timeline.Item
                  color="#24c2cb"
                  style={{ fontSize: 18, paddingBottom: 20 }}
                >
                  <span>Total {total} items</span>
                </Timeline.Item>
                {Object.keys(data).map(item => {
                  return (
                    <>
                      <Timeline.Item
                        color="#24c2cb"
                        dot={
                          <Icon
                            type="clock-circle-o"
                            style={{ fontSize: 20 }}
                          />
                        }
                        color="red"
                        style={{ fontSize: 20, paddingBottom: 40 }}
                      >
                        <p style={{ margin: 0, lineHeight: '20px' }}>
                          {parseInt(item)}...
                        </p>
                      </Timeline.Item>
                      {data[item].map(items => {
                        return (
                          <Timeline.Item color="#24c2cb">
                            <span style={{ fontSize: 12, marginRight: 16 }}>
                              {moment(items.date).format('MM-DD')}
                            </span>
                            <Link to={`/articledetail?_id=${items._id}`}>
                              {items.title}
                            </Link>
                          </Timeline.Item>
                        );
                      })}
                    </>
                  );
                })}
              </Timeline>
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
                    <Icon id="hj-icon5" type="weibo-circle" theme="filled" />
                  </Tooltip>
                </span>
              </Divider>
            </Spin>
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
