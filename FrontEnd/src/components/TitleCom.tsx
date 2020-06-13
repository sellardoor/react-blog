/**
 * @description 顶栏组件
 * @author sellardoor
 * @date 2020/06/13
 */
import React from 'react';
import { Row, Col } from 'antd'

export default function TitleCom() {
    return (
        <Row style={{height: 200}}>
            <Col style={{height: '100%', lineHeight: '200px', textAlign: 'center', fontSize: 62, color: '#24c2cb', fontWeight: 300, textTransform: 'uppercase', fontFamily: 'Josefin Sans'}}>
            sellardoor
            </Col>
        </Row>
    )
}
