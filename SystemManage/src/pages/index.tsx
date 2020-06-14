import React from 'react';
import { Row, Breadcrumb, Col } from 'antd';

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
        <Col>
        后续补上可视化数据
        </Col>
      </Row>
    </div>
  );
};
