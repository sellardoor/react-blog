/**
 * @fileoverview 用户组件
 * @description 用户登录注册或者第三方登录组件
 * @author sellardoor
 * @date 2020/06/04
 */
import React, { useState } from 'react';
import {
  Divider,
  Button,
  Card,
  Skeleton,
  Avatar,
  Icon,
  Modal,
  Form,
  Input,
} from 'antd';
import styles from './index.less';
const Login = props => {
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  return (
    <Form
      style={{ paddingLeft: 50, paddingRight: 50,display: props.registershow === true ? 'none' : 'block' }}
      onSubmit={handleSubmit}
      className="login-form"
    >
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [
            { required: true, message: '请输入账号' },
            { max: 6, message: '最多6字符' },
            { min: 2, message: '最少2字符' },
          ],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: '请输入密码' },
            { max: 6, message: '最多6字符' },
            { min: 2, message: '最少2字符' },
          ],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
const LoginForm = Form.create()(Login);
const Register = props => {
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  return (
    <Form
      style={{ paddingLeft: 50, paddingRight: 50, display: props.registershow === true ? 'block' : 'none' }}
      onSubmit={handleSubmit}
      className="login-form"
    >
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [
            { required: true, message: '请输入账号' },
            { max: 6, message: '最多6字符' },
            { min: 2, message: '最少2字符' },
          ],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: '请输入密码' },
            { max: 6, message: '最多6字符' },
            { min: 2, message: '最少2字符' },
          ],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
const RegisterForm = Form.create()(Register);
const UserCom = props => {
  /**
   * @description 模态框显隐逻辑
   * @param {Boolean} visible
   */
  const [visible, setVisible] = useState(false);
  /**
   * @description 模态框注册登录切换显隐逻辑
   * @param {Boolean} registershow
   */
  const [registershow, setRegistershow] = useState(false);
  const checkRegister = () => setRegistershow(!registershow)
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    setIslogin(true);
    // setVisible(false);
  };

  const handleCancel = e => {
    setIslogin(false);
    // setVisible(false);
  };
  
  const { getFieldDecorator } = props.form;
  return (
    <div
      className={styles.uesr}
      style={{
        background: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 40,
      }}
    >
      <Modal title={registershow ? '注册' : '登录'} visible={visible} footer={null}>
        <LoginForm  registershow={registershow} />
        <RegisterForm registershow={registershow} />
        <div style={{padding: '0 50px'}}>
          <span onClick={checkRegister} style={{color: '#24c2cb', cursor: 'pointer'}}>
            {
              registershow ? '返回登录' : '没有账号? 前往注册'
            }
          </span>
        </div>
      </Modal>
      <div style={{ padding: '0px 70px 0px 70px', marginBottom: 20 }}>
        <Divider style={{ color: '#666' }}>USER</Divider>
      </div>
      <Card style={{ marginTop: 16 }} bordered={false}>
        <Skeleton loading={true} avatar active>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <Avatar
              style={{ marginBottom: 10 }}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <p>NAME</p>
          </div>
        </Skeleton>
      </Card>
      <div>
        <button
          style={{
            width: '100%',
            borderRadius: '0',
            background: '#fff',
            outline: 'none',
            border: '1px solid #24c2cb',
            fontSize: 12,
            padding: 9,
            cursor: 'pointer',
            marginBottom: 20,
            color: '#24c2cb',
          }}
          onClick={showModal}
        >
          登录
        </button>
        <button
          style={{
            width: '100%',
            borderRadius: '0',
            background: '#24c2cb',
            outline: 'none',
            border: '1px solid #24c2cb',
            fontSize: 12,
            padding: 9,
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          GITHUB LOGIN
        </button>
      </div>
    </div>
  );
};

export default UserCom |> Form.create();
