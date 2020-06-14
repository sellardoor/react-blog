import React, { useEffect, useState } from 'react';
import { Form, Icon, Input, Button, Row, Col, Spin } from 'antd';
import { connect } from 'dva';
import ParticlesBg from 'particles-bg';
import styles from './index.less';
import { FormType, DispatchType, IRouteComponentProps } from '@/models/connect';

function hasErrors(fieldsError: any) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

type Iprops = FormType &
  DispatchType &
  IRouteComponentProps & {
    [key: string]: any;
  };

const Login: React.FC<Iprops> = props => {
  const { dispatch } = props;
  const [loading, setloading] = useState<boolean>(false);
  useEffect(() => {
    document.getElementById('root')!.style.height = '100%';
    props.form.validateFields();
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        dispatch({ type: 'login/handleLogin', payload: values }).then(() => {
          setloading(true);
          if (localStorage.getItem('Authorization')) {
            setTimeout(() => {
              props.history.push('/');
            }, 1000);
          } else {
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

  return (
    <div className={styles.container}>
      <ParticlesBg type="thick" bg={true} />
      <Spin
        indicator={<Icon type="loading" style={{ fontSize: 60, color: '#fff' }} spin />}
        size="large"
        spinning={loading}
        style={{
          position: 'absolute',
          zIndex: 99,
          marginTop: '-300px',
          color: '#fff',
          fontSize: 20,
        }}
      >
        <Form
          layout="inline"
          onSubmit={handleSubmit}
          style={{ width: '350px' }}
        >
          <Row justify="center" align="middle" style={{ width: '350px' }}>
            <Col style={{ textAlign: 'center' }}>
              <Icon
                style={{ color: '#fff', fontSize: '70px' }}
                type="apple"
                theme="filled"
              />
            </Col>
            <Col>
              <h1
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  marginTop: '20px',
                }}
              >
                Management Systems
              </h1>
            </Col>
            <Form.Item
              validateStatus={usernameError ? 'error' : ''}
              help={usernameError || ''}
            >
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              })(
                <Input
                  style={{ width: '350px', marginTop: '20px' }}
                  size="large"
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              })(
                <Input
                  style={{ width: '350px', marginTop: '20px' }}
                  size="large"
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button
                size="large"
                style={{ width: '350px', marginTop: '30px' }}
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                Log in
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Spin>
    </div>
  );
};
export default connect()(Form.create({ name: 'horizontal_login' })(Login));
