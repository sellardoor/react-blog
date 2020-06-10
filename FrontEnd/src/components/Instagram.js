/**
 * @fileoverview instagram组件
 * @description 九宫格图
 * @author sellardoor
 * @date 2020/06/04
 */
import React from 'react';
import { Divider } from 'antd';
import styles from './index.less';
import { INSTAGRAM } from '@/utils/constants';

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
      <div style={{ padding: '0px 28px 0px 28px', marginBottom: 30 }}>
        <Divider style={{ color: '#666' }}>INSTAGRAM</Divider>
      </div>
      <div>
        <div
          style={{
            width: '100%',
            height: '300px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignContent: 'space-around',
          }}
        >
          {INSTAGRAM.map(url => (
            <div
              className={styles.ins}
              style={{ width: '33%', height: '100px', cursor: 'pointer' }}
            >
                <img
                  style={{
                    display: 'inline-block',
                  }}
                  src={url}
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
