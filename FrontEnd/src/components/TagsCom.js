/**
 * @fileoverview tags组件
 * @description 点击对应文章分类跳转对应文章类目
 * @author sellardoor
 * @date 2020/06/04
 */
import React, { useEffect, useState } from 'react';
import { Divider, Tag, Badge } from 'antd';
import { initTagsApi } from '@/services/tags';
import styles from './index.less';
import { Link } from 'umi'

export default function TagsCom() {
  const [data, setData] = useState({});
  useEffect(() => {
    initTagsApi().then(res => {
      if (res?.success) {
        setData(res.result);
      }
    });
  }, []);
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 40,
      }}
    >
      <div style={{ padding: '0px 40px 0px 40px', marginBottom: 30 }}>
        <Divider style={{ color: '#666' }}>TAGS</Divider>
      </div>
      <div>
        {Object.keys(data).map(item => {
          return (
            <Badge count={data[item]} offset={[-5, 0]}>
              <Link to={`/articlelist?type=${ item }`} target="_self">
              <Tag
                style={{
                  padding: '2px 20px',
                  borderRadius: 0,
                  background: '#fff',
                  border: '1px solid #24c2cb',
                  color: '#24c2cb',
                  marginBottom: 12,
                  cursor: 'pointer',
                }}
              >
                {item}
              </Tag>
              </Link>
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
