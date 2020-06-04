/**
 * @fileoverview instagram组件
 * @description 九宫格图
 * @author sellardoor
 * @date 2020/06/04
 */
import React from 'react';
import { Divider } from 'antd';

export default function Instagram() {
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
        <Divider style={{ color: '#666' }}>INSTAGRAM</Divider>
      </div>
      <div style={{ marginLeft: 34 }}>
        <div
          style={{ width: 270, height: 270, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'space-between' }}
        >
            <img src='http://cdn.sellardoor.cn/instagram-sidebar-1.jpeg.jpg' style={{width: 83, height: 83, cursor: 'pointer'}} />
            <img src='http://cdn.sellardoor.cn/instagram-sidebar-2.jpg' style={{width: 83, height: 83, cursor: 'pointer'}} />
            <img src='http://cdn.sellardoor.cn/instagram-sidebar-3.jpeg.jpg' style={{width: 83, height: 83, cursor: 'pointer'}} />
            <img src='http://cdn.sellardoor.cn/instagram-sidebar-4.jpg' style={{width: 83, height: 83, cursor: 'pointer'}} />
            <img src='http://cdn.sellardoor.cn/instagram-sidebar-5.jpeg.jpg' style={{width: 83, height: 83, cursor: 'pointer'}} />
            <img src='http://cdn.sellardoor.cn/instagram-sidebar-6.jpg' style={{width: 83, height: 83, cursor: 'pointer'}} />
            <img src='http://cdn.sellardoor.cn/instagram-sidebar-6.jpg' style={{width: 83, height: 83, cursor: 'pointer'}} />
            <img src='http://cdn.sellardoor.cn/instagram-sidebar-8.jpg' style={{width: 83, height: 83, cursor: 'pointer'}} />
            <img src='http://cdn.sellardoor.cn/instagram-sidebar-9.jpg' style={{width: 83, height: 83, cursor: 'pointer'}} />
        </div>
      </div>
    </div>
  );
}
