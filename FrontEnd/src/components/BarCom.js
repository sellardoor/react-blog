import React from 'react';
import { Avatar, Divider, Tooltip, Icon } from 'antd';

export default function BarCom() {
  return (
    <div style={{ background: '#fff', borderRadius: 10, textAlign: 'center' }}>
      <div style={{ padding: '0px 70px 0px 70px' }}>
        <Divider style={{ color: '#666' }}>ABOUT ME</Divider>
      </div>
      <Avatar src='http://cdn.sellardoor.cn/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200606102302.jpg' style={{ width: 200, height: 200 }} />
      <div style={{  color: '#666', fontSize: 12, padding: '0 50px', marginTop: 20, }}>
      每天努力一点点
      </div>
      <div style={{ marginBottom: 50, color: '#666', fontSize: 12, padding: '0 50px', marginTop: 8, }}>
      一个菜鸟前端的爬坑之路
      </div>
      <div style={{ padding: '0px 70px 0px 70px' }}>
        <Divider style={{ color: '#666' }}>FOLLOW ME</Divider>
      </div>
      <p style={{ paddingBottom: 30 }}>
      <span
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#000'
            }}
          >
            <Icon id='hj-icon1' style={{marginRight: 25}} type="github" theme="filled" />
            <Icon id='hj-icon2' style={{marginRight: 25}} type="wechat" theme="filled" />
            <Icon id='hj-icon3' style={{marginRight: 25}} type="instagram" theme="filled" />
            <Icon id='hj-icon4' style={{marginRight: 25}} type="yuque" theme="filled" />
            <Icon id='hj-icon5' type="weibo-circle" theme="filled" />
          </span>
      </p>
    </div>
  );
}
