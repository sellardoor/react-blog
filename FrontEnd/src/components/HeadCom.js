import React, { useState } from 'react';
import { Row, Col, Menu, Icon, Input } from 'antd';
import { Link } from 'umi';

const { Search } = Input;

export default function HeadCom(props) {
  const [menuKeys, setMenuKeys] = useState(props.idx);

  const handleChange = e => {
    setMenuKeys(e.key);
  };
  return (
    <div>
      <Row
        style={{ height: 26, background: '#444', color: '#aaa', fontSize: 14 }}
      >
        <Col span={2}></Col>
        <Col span={4}>
          <span style={{ lineHeight: '26px' }}>欢迎访问我的博客</span>
        </Col>
        <Col span={4} offset={12} style={{ textAlign: 'right' }}>
          <span>关于我</span>
          <span style={{ marginLeft: 30, lineHeight: '26px' }}>联系我</span>
        </Col>
        <Col span={2}></Col>
      </Row>
      <Row style={{ background: '#fff', height: 60 }}>
        <Col span={2}></Col>
        <Col span={11}>
          <Icon
            style={{ fontSize: 30, color: '#1890ff' }}
            type="fire"
            theme="filled"
          />
          <span
            style={{
              fontSize: 20,
              lineHeight: '60px',
              fontWeight: '500',
              marginLeft: 15,
              color: '#1890ff',
            }}
          >
            网站制作中...
          </span>
        </Col>
        <Col span={5}>
          <Menu
            mode="horizontal"
            onClick={handleChange}
            selectedKeys={menuKeys}
            style={{ borderBottom: 'none', height: 60 }}
          >
            <Menu.Item
              style={{ width: 95, borderBottom: 'none', lineHeight: '60px' }}
              key="index"
            >
              <Link to="/">
                <Icon type="home" />
                <span style={{ fontSize: '16px', marginLeft: -7 }}>首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item
              style={{ width: 95, borderBottom: 'none', lineHeight: '60px' }}
              key="artical"
            >
              <Link to="/detail">
                <Icon type="youtube" />
                <span style={{ fontSize: '16px', marginLeft: -7 }}>文章</span>
              </Link>
            </Menu.Item>
            <Menu.Item
              style={{ width: 95, borderBottom: 'none', lineHeight: '60px' }}
              key="others"
            >
              <Link to="/crud">
              <Icon type="instagram" />
              <span style={{ fontSize: '16px', marginLeft: -7 }}>crud测试</span>
              </Link>
              
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={4} style={{ lineHeight: '60px', textAlign: 'right' }}>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
}
