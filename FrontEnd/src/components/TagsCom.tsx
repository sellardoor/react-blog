/**
 * @description tags组件, 点击对应文章分类跳转对应文章类目
 * @author sellardoor
 * @date 2020/06/13
 */
import React, { useEffect, useState } from 'react';
import { Divider, Tag, Badge } from 'antd';
import { initTagsApi } from '@/services/tags';
import styles from './index.less';
import { Link } from 'umi';


interface DataProps {
  [key: string]: number;
}

export default function TagsCom() {
  const [data, setData] = useState<DataProps>({});
  useEffect(() => {
    initTagsApi().then(res => {
      if (res?.success) {
        setData(res.result);
      }
    });
  }, []);
  return (
    <div
      className={styles.tagsCom}
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
        {Object.keys(data).map((item, idx) => {
          return (
            <Badge key={idx} count={data[item]} offset={[-5, 0]}>
              <Link to={`/articlelist?type=${item}`} target="_self">
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
