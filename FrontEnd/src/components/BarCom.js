import React from 'react';
import { Avatar, Divider, Tooltip } from 'antd';

export default function BarCom() {
  return (
    <div style={{ background: '#fff', borderRadius: 10, textAlign: 'center' }}>
      <div
        style={{
          margin: '0px 20px 20px 20px',
          borderBottom: '1px solid #eaeaea',
        }}
      >
        <p
          style={{
            textAlign: 'left',
            paddingTop: 20,
            fontSize: 18,
            color: '#666',
          }}
        >
          个人资料
        </p>
      </div>
      <Avatar src='http://cdn.sellardoor.cn/imgs/avatar.jpg' style={{ width: 100, height: 100 }} />
      <p style={{ marginTop: 10, marginBottom: 5 }}>SellarDoor</p>
      <p style={{ marginBottom: 0, color: '#666', fontSize: 12 }}>
        前端努力爬坑中...
      </p>
      <div style={{ padding: '0px 20px 0px 20px' }}>
        <Divider style={{ color: '#666' }}>社交</Divider>
      </div>
      <p style={{ paddingBottom: 20 }}>
        <Tooltip title="18584812344">
          <Avatar icon="wechat" />
        </Tooltip>
        <Tooltip title="https://github.com/sellardoor">
          <Avatar style={{ margin: '0px 10px 0px 10px' }} icon="github" />
        </Tooltip>
        <Tooltip title="248833990">
          <Avatar icon="qq" />
        </Tooltip>
      </p>
    </div>
  );
}
