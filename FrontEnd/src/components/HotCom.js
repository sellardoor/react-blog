import React, { useEffect, useState } from 'react';
import { Icon } from 'antd';
import moment from 'moment';
import { hotArticleApi } from '@/services/article';

export default function HotCom() {
  const [hotarticle, setHotarticle] = useState([]);

  useEffect(() => {
    hotArticleApi().then(res => {
      if (res?.success) {
        setHotarticle(res.result);
      }
    });
  }, []);
  const handleDetail = id => {
    window.open(`/articledetail?_id=${id}`, '_self');
  }
  const Artical = props => (
    <div style={{ textAlign: 'left', marginLeft: 20, marginRight: 20 }}>
      <div  onClick={() => handleDetail(props.id)} style={{ height: 30, marginTop: 20, cursor: 'pointer' }}>
        <Icon type="tag" theme="filled" style={{ color: '#888' }} />
        <span style={{ marginLeft: 5 }}>{props.content}</span>
      </div>
      <div style={{ borderBottom: '1px dashed #eaeaea ', paddingBottom: 10 }}>
        <Icon
          style={{ marginRight: 5, color: '#888' }}
          type="calendar"
          theme="filled"
        />
        <span style={{ marginRight: 15 }}>
          {moment(props.date).format('YYYY-MM-DD')}
        </span>
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
      {hotarticle.map(item => {
        return <Artical key={item._id} content={item.title} date={item.date} id={item._id} />;
      })}
    </div>
  );
}
