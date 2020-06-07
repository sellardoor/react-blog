/**
 * @fileoverview 用户组件
 * @description 用户登录注册或者第三方登录组件
 * @author sellardoor
 * @date 2020/06/04
 */
import React, { useState, useEffect } from 'react';
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
  message,
} from 'antd';
import styles from './index.less';
import {
  registerApi,
  loginApi,
  checkUsernameApi,
  githubLoginApi,
} from '@/services/users';
import { connect } from 'dva';
import { getQueryVariable } from '@/utils/utils';
import { LOGINLOCALPROD, GITHUBOAUTH } from '@/utils/constants'

/**
 * @description 模态框登录控件
 * @param {*} props
 */
const Login = props => {
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        loginApi(values).then(res => {
          if (res?.success) {
            message.success('登录成功');
            props.closeModal();
            props.initUser(res.result);
            localStorage.setItem('login', JSON.stringify(res.result));
            window.open(LOGINLOCALPROD, '_self');
          } else {
            message.error('登录失败');
          }
        });
      }
    });
  };
  return (
    <Form
      style={{
        paddingLeft: 50,
        paddingRight: 50,
        display: props.registershow === true ? 'none' : 'block',
      }}
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
const loginmapDispatchFromProps = {
  initUser: payload => ({ type: 'users/initUser', payload }),
};
const loginmapStateFromProps = ({ users }) => ({ users });
const LoginForm = connect(
  loginmapStateFromProps,
  loginmapDispatchFromProps,
)(Form.create()(Login));
/**
 * @description 模态框注册控件
 * @param {*} props
 */
const Register = props => {
  const [confirmDirty, setconfirmDirty] = useState(false);
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        registerApi(values).then(res => {
          if (res?.success) {
            message.success(res.message);
            props.closeModal();
          }
        });
      }
    });
  };
  const handleConfirmBlur = e => {
    const { value } = e.target;
    setconfirmDirty(!!value);
  };
  const validateToNextPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不一致');
    } else {
      callback();
    }
  };
  /**
   * @description 检查用户名是否重复
   */
  const checkUsername = () => {
    const theName = props.form.getFieldValue('username');
    if (theName) {
      checkUsernameApi({ username: theName }).then(res => {
        if (res?.success === false) {
          props.form.setFields({
            username: {
              value: theName,
              errors: [new Error(res.message)],
            },
          });
        }
      });
    }
  };
  return (
    <Form
      style={{
        paddingLeft: 50,
        paddingRight: 50,
        display: props.registershow === true ? 'block' : 'none',
      }}
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
            onBlur={checkUsername}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item hasFeedback>
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: '请输入密码',
            },
            {
              validator: validateToNextPassword,
            },
            { max: 6, message: '最多6字符' },
            { min: 2, message: '最少2字符' },
          ],
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            {
              required: true,
              message: '请再次输入密码',
            },
            {
              validator: compareToFirstPassword,
            },
            { max: 6, message: '最多6字符' },
            { min: 2, message: '最少2字符' },
          ],
        })(
          <Input.Password
            onBlur={handleConfirmBlur}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Confirm Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: '邮箱格式不正确',
            },
            {
              required: true,
              message: '请输入邮箱',
            },
          ],
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="mail"
            placeholder="E-mail"
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
};
const RegisterForm = Form.create()(Register);
const UserCom = props => {
  useEffect(() => {
    if (getQueryVariable('code')) {
      props.changeGlobaLoading({ load: true });
      githubLoginApi({ code: getQueryVariable('code') }).then(res => {
        if (res?.success) {
          props.initUser(res.result);
          localStorage.setItem('login', JSON.stringify(res.result));
          window.open(LOGINLOCALPROD, '_self')
        } else {
          message.error('网络异常, 请稍后再试')
          props.changeGlobaLoading({ load: false });
        }
      });
    }
    const info = JSON.parse(localStorage.getItem('login'));
    if (info?.avatar && info?.username) props.initUser(info);
  }, []);
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
  const checkRegister = () => setRegistershow(!registershow);
  const showModal = () => setVisible(true);
  const closeModal = () => {
    setRegistershow(false);
    setVisible(false);
  };

  const { getFieldDecorator } = props.form;
  /**
   * @description 退出登录清除本地存储, 刷新页面
   */
  const loginout = () => {
    localStorage.removeItem('login');
    window.open(LOGINLOCALPROD, '_self');
  };

  const toGithub = () => {
    window.open(
      GITHUBOAUTH,
      '_self',
    );
  };
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
      <Modal
        title={registershow ? '注册' : '登录'}
        visible={visible}
        footer={null}
        onCancel={closeModal}
        maskClosable={false}
      >
        <LoginForm closeModal={closeModal} registershow={registershow} />
        <RegisterForm closeModal={closeModal} registershow={registershow} />
        <div style={{ padding: '0 50px' }}>
          <span
            onClick={checkRegister}
            style={{ color: '#24c2cb', cursor: 'pointer' }}
          >
            {registershow ? '返回登录' : '没有账号? 前往注册'}
          </span>
        </div>
      </Modal>
      <div style={{ padding: '0px 40px 0px 40px', marginBottom: 20 }}>
        <Divider style={{ color: '#666' }}>USER</Divider>
      </div>
      <Card style={{ marginTop: 16 }} bordered={false}>
        <Skeleton loading={props.loading} avatar active>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <a
              onClick={loginout}
              style={{
                display: 'block',
                fontSize: 12,
                textAlign: 'right',
                color: '#24c2cb',
                paddingRight: 70,
              }}
            >
              注销
            </a>
            <Avatar
              style={{ marginBottom: 10, width: 50, height: 50 }}
              src={props.avatar}
            />
            <p style={{ color: '#24c2cb' }}>{props.username}</p>
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
          onClick={toGithub}
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

const mapStateFromProps = ({ users }) => ({
  username: users.username,
  avatar: users.avatar,
  loading: users.loading,
});
const mapDispatchFromProps = {
  initUser: payload => ({ type: 'users/initUser', payload }),
  changeGlobaLoading: payload => ({
    type: 'users/changeGlobaLoading',
    payload,
  }),
};

export default UserCom
  |> Form.create()
  |> connect(mapStateFromProps, mapDispatchFromProps);
