import React from 'react';
import { Row, Breadcrumb } from 'antd';

export default () => {
  return (
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
        </Breadcrumb>
      </Row>
    </div>
  );
};
