import React, { useEffect, useState } from 'react';
import { Form, Icon, Input, Button, Row, Col, Spin } from 'antd';
import { connect } from 'dva';
import styles from './index.less';
import ParticlesBg from 'particles-bg';
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
const Login = props => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    document.getElementById('root').style.height = '100%';
    props.form.validateFields();
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.handleLogin(values).then(() => {
          setloading(true);
          if (localStorage.getItem('Authorization')) {
            setTimeout(() => {
              props.history.push('/');
            }, 1000);
          }else{
            setloading(false);
          }
        });
      }
    });
  };
  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched,
  } = props.form;
  const usernameError = isFieldTouched('username') && getFieldError('username');
  const passwordError = isFieldTouched('password') && getFieldError('password');
  return React.createElement(
    'div',
    { className: styles.container },
    React.createElement(Spin, {
      indicator: React.createElement(Icon, {
        type: 'loading',
        style: { fontSize: 60, color: '#fff' },
        spin: true,
      }),
      size: 'large',
      tip: 'Loading...',
      spinning: loading,
      style: {
        position: 'absolute',
        zIndex: 99,
        marginTop: '-100px',
        color: '#fff',
        fontSize: 20,
      },
    }),
    React.createElement(ParticlesBg, { type: 'thick', bg: true }),
    React.createElement(
      Form,
      { layout: 'inline', onSubmit: handleSubmit, style: { width: '350px' } },
      React.createElement(
        Row,
        { justify: 'center', align: 'middle', style: { width: '350px' } },
        React.createElement(
          Col,
          { style: { textAlign: 'center' } },
          React.createElement(Icon, {
            type: 'apple',
            theme: 'filled',
            style: { color: '#fff', fontSize: '70px' },
          }),
        ),
        React.createElement(
          Col,
          null,
          React.createElement(
            'h1',
            {
              style: {
                color: '#fff',
                textAlign: 'center',
                marginTop: '20px',
              },
            },
            'Management \u00A0Systems',
          ),
        ),
        React.createElement(
          Col,
          { style: { textAlign: 'center' } },
          React.createElement(
            Form.Item,
            {
              validateStatus: usernameError ? 'error' : '',
              help: usernameError || '',
            },
            getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            })(
              React.createElement(Input, {
                size: 'large',
                style: { width: '350px', marginTop: '20px' },
                prefix: React.createElement(Icon, {
                  type: 'user',
                  style: { color: 'rgba(0,0,0,.25)' },
                }),
                placeholder: 'Username',
              }),
            ),
          ),
        ),
        React.createElement(
          Col,
          { style: { textAlign: 'center' } },
          React.createElement(
            Form.Item,
            {
              validateStatus: passwordError ? 'error' : '',
              help: passwordError || '',
            },
            getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            })(
              React.createElement(Input, {
                size: 'large',
                style: { width: '350px', marginTop: '30px' },
                prefix: React.createElement(Icon, {
                  type: 'lock',
                  style: { color: 'rgba(0,0,0,.25)' },
                }),
                type: 'password',
                placeholder: 'Password',
              }),
            ),
          ),
        ),
        React.createElement(
          Col,
          { style: { textAlign: 'center' } },
          React.createElement(
            Form.Item,
            null,
            React.createElement(
              Button,
              {
                size: 'large',
                style: { width: '350px', marginTop: '30px' },
                type: 'primary',
                htmlType: 'submit',
                disabled: hasErrors(getFieldsError()),
              },
              'Log in',
            ),
          ),
        ),
      ),
    ),
  );
};
const mapStateFromProps = ({ login }) => ({
  isLogin: login.isLogin,
});
const mapDispatchFromProps = {
  handleLogin: payload => ({ type: 'login/handleLogin', payload }),
};
// export default Login |> Form.create({ name: 'horizontal_login' }) |> connect(mapStateFromProps, mapDispatchFromProps)
export default connect(
  mapStateFromProps,
  mapDispatchFromProps,
)(Form.create({ name: 'horizontal_login' })(Login));
