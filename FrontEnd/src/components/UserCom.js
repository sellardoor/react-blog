/**
 * @fileoverview 用户组件
 * @description 用户登录注册或者第三方登录组件
 * @author sellardoor
 * @date 2020/06/04
 */
import React from 'react';
import { Divider, Button } from 'antd';

export default function UserCom() {
  return (
    <div style={{ background: '#fff', borderRadius: 10, textAlign: 'center', marginTop: 40 }}>
      <div style={{ padding: '0px 70px 0px 70px', marginBottom: 30 }}>
        <Divider style={{ color: '#666' }}>USER</Divider>
      </div>
      <div>
        <button style={{width: '100%', borderRadius: '0', background: '#fff', outline:'none', border:'1px solid #24c2cb', fontSize: 12, padding: 9, cursor: 'pointer', marginBottom: 20}}>登录</button>
        <button style={{width: '100%', borderRadius: '0', background: '#24c2cb', outline: 'none',border:'1px solid #24c2cb', fontSize: 12, padding: 9, color:'#fff', cursor: 'pointer'}}>GITHUB LOGIN</button>
      </div>
    </div>
  );
}
