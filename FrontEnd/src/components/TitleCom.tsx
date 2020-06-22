/**
 * @description 顶栏组件
 * @author sellardoor
 * @date 2020/06/13
 */
import React from 'react';
import { Row, Col } from 'antd';

export default function TitleCom() {
  return (
    <Row>
      <Col
        xs={{ span: 0 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 24 }}
        style={{
          height: '200px',
          lineHeight: '200px',
          textAlign: 'center',
          fontSize: '4rem',
          color: '#24c2cb',
          fontWeight: 300,
          textTransform: 'uppercase',
          fontFamily: 'Josefin Sans',
        }}
      >
        sellardoor
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 0 }}
        md={{ span: 0 }}
        lg={{ span: 0 }}
        xl={{ span: 0 }}
        style={{
          height: '100px',
          lineHeight: '100px',
          textAlign: 'center',
          fontSize: '2rem',
          color: '#24c2cb',
          fontWeight: 300,
          textTransform: 'uppercase',
          fontFamily: 'Josefin Sans',
        }}
      >
        sellardoor
      </Col>
    </Row>
  );
}
