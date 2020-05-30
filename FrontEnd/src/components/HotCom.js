import React from 'react';
import { Icon } from 'antd';

export default function HotCom() {
  const Artical = props => (
    <div style={{ textAlign: 'left', marginLeft: 20, marginRight: 20 }}>
      <div style={{ height: 30, marginTop: 20 }}>
        <Icon type="tag" theme="filled" style={{ color: '#888' }} />
        <span style={{ marginLeft: 5 }}>{props.content}</span>
      </div>
      <div style={{ borderBottom: '1px dashed #eaeaea ', paddingBottom: 10 }}>
        <Icon
          style={{ marginRight: 5, color: '#888' }}
          type="calendar"
          theme="filled"
        />
        <span style={{ marginRight: 15 }}>2019-12-13</span>
        <Icon
          style={{ marginRight: 5, color: '#888' }}
          type="eye"
          theme="filled"
        />
        <span style={{ marginRight: 15 }}>144</span>
      </div>
    </div>
  );
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
          热门文章
        </p>
      </div>
      {new Array(3).fill('').map((item, index) => {
        return <Artical key={index} content="无语的同时那是相当的无奈" />;
      })}
    </div>
  );
}
