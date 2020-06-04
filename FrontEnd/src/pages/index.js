import React from 'react';
import { Row, Col, BackTop } from 'antd';
import HeadCom from '@/components/HeadCom';
import BarCom from '@/components/BarCom';
import ListCom from '@/components/ListCom';
import HotCom from '@/components/HotCom';
import FooterCom from '@/components/FooterCom';
import TitleCom from '@/components/TitleCom';
import UserCom from '@/components/UserCom';
import TagsCom from '@/components/TagsCom';
import Instagram from '@/components/Instagram';
import styles from './index.less';

export default function index() {
  return (
    <div>
      <BackTop>
        <div style={{width: 40, height: 40, background: '#24c2cb', lineHeight: '40px', borderRadius: 4, textAlign: 'center', fontSize: 20, color: '#fff'}}>UP</div>
      </BackTop>
      <TitleCom />
      <HeadCom />
      <div
        className={styles.banner}
        style={{
          height: 600,
          color: '#fff',
          textAlign: 'center',
          paddingTop: 170,
        }}
      >
        <div>&emsp;</div>
        <div
          style={{
            fontSize: 18,
            fontFamily: `'Josefin Sans', sans-serif`,
            marginBottom: 20,
          }}
        >
          LIFESTYLE
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              height: 20,
              borderBottom: '2px solid #fff',
              width: 50,
              height: 5,
            }}
          ></div>
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            fontFamily: `'Josefin Sans', sans-serif`,
          }}
        >
          TALK IS CHEAP
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            fontFamily: `'Josefin Sans', sans-serif`,
            marginBottom: 30,
          }}
        >
          SHOW ME THE CODE
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            fontFamily: `'Josefin Sans', sans-serif`,
          }}
        >
          17 JUNE 2020
        </div>
      </div>
      <Row style={{ paddingTop: 100, background: '#fff', paddingBottom: 100 }}>
        <Col span={4}></Col>
        <Col span={12}>
          <ListCom />
        </Col>
        <Col span={4}>
          <BarCom />
          <div style={{ textAlign: 'center' }}>
            <img src="http://cdn.sellardoor.cn/banner-spot.jpg" alt="" />
          </div>
          <UserCom />
          <HotCom />
          <TagsCom />
          <Instagram />
        </Col>
        <Col span={4}></Col>
      </Row>
      <FooterCom />
    </div>
  );
}
