import React from 'react';
import { Button } from 'antd';

export default function SystemCom() {
  const ToSystems = () => {
    window.open('http://59.110.43.170:81');
  };
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        paddingBottom: 20,
      }}
    >
      <div
        style={{
          margin: '0px 20px 20px 20px',
          borderBottom: '1px solid #eaeaea',
        }}
      >
        <p
          style={{
            textAlign: 'left',
            paddingTop: 20,
            fontSize: 18,
            color: '#666',
          }}
        >
          后台管理
        </p>
      </div>
      <div style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Button onClick={ToSystems} style={{ width: '100%' }} type="primary">
          后台入口
        </Button>
      </div>
    </div>
  );
}
