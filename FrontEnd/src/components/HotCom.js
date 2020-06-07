import React, { useEffect, useState } from 'react';
import { Icon, Divider, List } from 'antd';
import moment from 'moment';
import { hotArticleApi } from '@/services/article';

export default function HotCom() {
  const [hotarticle, setHotarticle] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    hotArticleApi().then(res => {
      setData(res.result);
    });
  }, []);

  const handleDetail = id => {
    window.open(`/articledetail?_id=${id}`, '_self')
  }
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
          fontSize: 12
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
            <div>{item.title}</div>
            <div>{moment(item.date).format('YYYY-MM-DD')}</div>
          </List.Item>
        )}
      />
    </div>
  );
}
