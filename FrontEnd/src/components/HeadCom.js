import React, { useState } from 'react';
import { Row, Col, Menu, Icon, Input } from 'antd';
import { Link } from 'umi';
import styles from './index.less';

const { Search } = Input;

export default function HeadCom(props) {
  const [menuKeys, setMenuKeys] = useState(props.idx);

  const handleChange = e => {
    setMenuKeys(e.key);
  };
  return (
    <div>
      <Row style={{ background: '#fff', height: 60, borderTop:'1px solid #e8e8e8', borderTop:'1px solid #e8e8e8' , height: 100}}>
        <Col span={5}></Col>
        <Col span={5}>
          <span
            style={{
              fontSize: 16,
              lineHeight: '100px',
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
        </Col>
        <Col span={9}>
          <Menu
            mode="horizontal"
            onClick={handleChange}
            selectedKeys={menuKeys}
            style={{ borderBottom: 'none', height: 60 }}
          >
            <Menu.Item
              style={{ width: '15%', borderBottom: 'none', lineHeight: '100px', textAlign:'center' }}
              key="index"
            >
              <Link to="/" style={{color: '#000'}}>
                <span id='hj-menu1' style={{ fontSize: '16px' }}>HOME</span>
              </Link>
            </Menu.Item>
            <Menu.Item
              style={{ width: '15%', borderBottom: 'none', lineHeight: '100px', textAlign:'center' }}
              key="artical"
            >
              <Link to="/articlelist" style={{color: '#000'}}>
                <span id='hj-menu2' style={{ fontSize: '16px' }}>ARTICAL</span>
              </Link>
            </Menu.Item>
            <Menu.Item
              style={{ width: '15%', borderBottom: 'none', lineHeight: '100px', textAlign:'center' }}
              key="artical"
            >
              <Link to="/articlelist" style={{color: '#000'}}>
                <span id='hj-menu2' style={{ fontSize: '16px' }}>LIFESTYLE</span>
              </Link>
            </Menu.Item>
            <Menu.Item
              style={{ width: '15%', borderBottom: 'none', lineHeight: '100px', textAlign:'center' }}
              key="artical"
            >
              <Link to="/articlelist" style={{color: '#000'}}>
                <span id='hj-menu2' style={{ fontSize: '16px' }}>ABOUT</span>
              </Link>
            </Menu.Item>
            <Menu.Item
              style={{ width: '15%', borderBottom: 'none', lineHeight: '100px', textAlign:'center' }}
              key="artical"
            >
              <Link to="/articlelist" style={{color: '#000', borderTop: '2px solid #fff'}}>
                <span id='hj-menu2' style={{ fontSize: '16px' }}>PHOTO</span>
              </Link>
            </Menu.Item>
            <Menu.Item
              style={{ width: '15%', borderBottom: 'none', lineHeight: '100px', textAlign:'center' }}
              key="artical"
            >
              <Link to="/articlelist" style={{color: '#000'}}>
                <span id='hj-menu2' style={{ fontSize: '16px' }}>TRAVEL</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={5}></Col>
      </Row>
    </div>
  );
}
