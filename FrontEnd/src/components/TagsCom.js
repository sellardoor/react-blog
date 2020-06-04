/**
 * @fileoverview tags组件
 * @description 点击对应文章分类跳转对应文章类目
 * @author sellardoor
 * @date 2020/06/04
 */
import React from 'react';
import { Divider, Tag } from 'antd';

export default function TagsCom() {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 40,
      }}
    >
      <div style={{ padding: '0px 70px 0px 70px', marginBottom: 30 }}>
        <Divider style={{ color: '#666' }}>TAGS</Divider>
      </div>
      <div>
        <Tag style={{padding: '2px 15px',borderRadius: 0, background: '#fff', border: '1px solid #24c2cb', color:'#24c2cb', marginBottom: 8, cursor: 'pointer'}}>React</Tag>
        <Tag style={{padding: '2px 15px',borderRadius: 0, background: '#fff', border: '1px solid #24c2cb', color:'#24c2cb', marginBottom: 8, cursor: 'pointer'}}>Vue</Tag>
        <Tag style={{padding: '2px 15px',borderRadius: 0, background: '#fff', border: '1px solid #24c2cb', color:'#24c2cb', marginBottom: 8, cursor: 'pointer'}}>JavaScript</Tag>
        <Tag style={{padding: '2px 15px',borderRadius: 0, background: '#fff', border: '1px solid #24c2cb', color:'#24c2cb', marginBottom: 8, cursor: 'pointer'}}>Umi</Tag>
        <Tag style={{padding: '2px 15px',borderRadius: 0, background: '#fff', border: '1px solid #24c2cb', color:'#24c2cb', marginBottom: 8, cursor: 'pointer'}}>Egg</Tag>
        <Tag style={{padding: '2px 15px',borderRadius: 0, background: '#fff', border: '1px solid #24c2cb', color:'#24c2cb', marginBottom: 8, cursor: 'pointer'}}>magenta</Tag>
      </div>
    </div>
  );
}
