/**
 * @description 热门文章展示组件
 * @author sellardoor
 * @date 2020/6/13
 */
import React, { useEffect, useState } from 'react';
import { Divider, List } from 'antd';
import { hotArticleApi } from '@/services/article';

interface DataProps {
  _id: string;
  title: string;
  [key: string]: any;
}

export default function HotCom() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    hotArticleApi().then(res => {
      setData(res.result);
    });
  }, []);

  const handleDetail = (id: string) => {
    window.open(`/articledetail?_id=${id}`, '_self');
  };
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 40,
      }}
    >
      <div style={{ padding: '0px 30px 0px 30px' }}>
        <Divider style={{ color: '#666' }}>ARTICLES</Divider>
      </div>
      <List
        style={{
          marginBottom: 50,
          borderRadius: 10,
          background: '#fff',
          marginRight: 20,
          fontSize: 12,
        }}
        dataSource={data}
        split={false}
        renderItem={item => (
          <List.Item
            onClick={() => handleDetail(item._id)}
            style={{
              background: '#fff',
              borderBottom: '1px solid #f2f2f2',
              justifyContent: 'space-between',
              paddingLeft: 10,
              cursor: 'pointer',
            }}
          >
            <div style={{ width: '100%', textAlign: 'center' }}>
              {item.title}
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
