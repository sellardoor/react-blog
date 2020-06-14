import React, { useEffect } from 'react';
import { Layout, Icon, Badge, Affix, Dropdown, Menu } from 'antd';
import Sider from './components/Sider';
import './index.less';
import { IRouteComponentProps } from '@/models/connect';

const { Header, Content } = Layout;

type Iprops = IRouteComponentProps;

const Layouts: React.FC<Iprops> = props => {
  useEffect(() => {
    document.getElementById('root')!.style.height = '100%';
  }, []);
  const handleOut = () => {
    localStorage.removeItem('Authorization');
    props.history.push('/login');
  };
  const handleHome = () => {
    props.history.push('/');
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={handleOut}>退出</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout style={{ height: '100%' }}>
      <Sider idx={`/${props.location.pathname.split('/')[1]}`} />
      <Layout>
        <Affix>
          <Header>
            <div style={{ textAlign: 'right' }}>
              <Icon
                style={{
                  color: '#fff',
                  fontSize: 20,
                  marginRight: 10,
                  cursor: 'pointer',
                }}
                type="home"
                onClick={handleHome}
              />
              <Dropdown overlay={menu}>
                <Badge dot>
                  <Icon
                    style={{ color: '#fff', fontSize: 20, cursor: 'pointer' }}
                    type="setting"
                    theme="filled"
                  />
                </Badge>
              </Dropdown>
            </div>
          </Header>
        </Affix>
        <Content style={{ background: '#f0f2f5' }}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
