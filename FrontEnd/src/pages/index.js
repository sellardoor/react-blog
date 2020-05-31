import React from 'react';
import { Row, Col } from 'antd'
import HeadCom from '@/components/HeadCom';
import BarCom from '@/components/BarCom';
import ListCom from '@/components/ListCom';
import SystemCom from '@/components/SystemCom';
import HotCom from '@/components/HotCom';
import FooterCom from '@/components/FooterCom';
import Advert from '@/components/Advert';
import styles from './index.less';

export default function index() {
    return (
        <div>
            <HeadCom />
            <div className={styles.banner} style={{height: 400, color: '#fff',paddingTop: 80, paddingLeft: 170}}>
                <div style={{fontSize: 30, fontWeight: 'bold'}}>SellarDoor</div>    
                <div>&emsp;&emsp;Talk is cheap. Show me the code.</div>
            </div> 
            <Row style={{paddingTop: 20, background: '#f2f2f2', paddingBottom: 100}}>
                <Col span={2}></Col>
                <Col span={16}>
                    <ListCom />
                </Col>
                <Col span={4}>
                    <BarCom />
                    <SystemCom />
                    <Advert />
                    <HotCom />
                </Col>
                <Col span={2}></Col>
            </Row>
            <FooterCom />
        </div>
    )
}
