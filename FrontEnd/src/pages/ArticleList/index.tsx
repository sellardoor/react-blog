/**
 * @description tags分类文章列表
 * @author sellardoor
 * @date 2020/06/13
 */
import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Breadcrumb,
  List,
  Spin,
  Divider,
  Icon,
  Badge,
  Tag,
} from 'antd';
import HeadCom from '@/components/HeadCom';
import BarCom from '@/components/BarCom';
import HotCom from '@/components/HotCom';
import FooterCom from '@/components/FooterCom';
import TitleCom from '@/components/TitleCom';
import UserCom from '@/components/UserCom';
import Instagram from '@/components/Instagram';
import {
  initIndexArticleListApi,
  checkTagArticleApi,
} from '@/services/article';
import moment from 'moment';
import styles from './index.less';
import { IRouteComponentProps } from '@/models/connect';
import { ArticleType } from '../File/index';

const { CheckableTag } = Tag;

interface MapType {
  [key: string]: boolean;
}

interface TagsCompType {
  item: string;
  clickTags: (item: string) => void;
  map: MapType;
}

const TagsComp: React.FC<TagsCompType> = props => {
  const tagsChange = () => {
    props.clickTags(props.item);
  };
  return (
    <CheckableTag
      checked={props.map[props.item]}
      onChange={tagsChange}
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
      {props.item}
    </CheckableTag>
  );
};

type Iprops = IRouteComponentProps;
interface TagsType {
  [key: string]: number;
}

const ArticleList: React.FC<Iprops> = props => {
  // 列表数据
  const [data, setData] = useState<ArticleType[]>([]);
  // { tags名字: 数量 }
  const [tags, setTags] = useState<TagsType>({});
  // loading状态
  const [load, setLoad] = useState<boolean>(false);
  // { tags名字 : boolean } 是否是激活状态
  const [map, setMap] = useState<MapType>({});
  useEffect(() => {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    setLoad(true);
    const { type = '' }: any = props.location.query;
    initIndexArticleListApi().then(res => {
      setData(res.result.list);
      setTags({ All: 0, ...res.result.tags });
      let map = { ...res.result.tags };
      for (let key in map) {
        map[key] = false;
        map.All = false;
      }
      if (type) {
        checkTagArticleApi({ type }).then(result => {
          if (result?.success) {
            setData(result.result);
            map[type] = true;
            setMap(map);
            setLoad(false);
          }
        });
      } else {
        setMap(map);
        setLoad(false);
      }
    });
  }, []);
  const handleDetail = (id: string) => {
    props.history.push(`/articledetail?_id=${id}`);
  };
  const clickTags = (item: string) => {
    const mapobj = map;
    for (let key in mapobj) {
      mapobj[key] = false;
    }
    mapobj[item] = true;
    setMap({ ...mapobj });
    setLoad(true);
    checkTagArticleApi({ type: item }).then(res => {
      if (res?.success) {
        setData(res.result);
        setLoad(false);
      }
    });
  };
  return (
    <div>
      <TitleCom />
      <HeadCom />
      <Row style={{ background: '#fff', paddingTop: 20, paddingBottom: 100 }}>
        <Col xs={0} sm={0} md={0} lg={1} xl={4}></Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={12}
          style={{ background: '#fff', borderRadius: 10, marginRight: 20 }}
        >
          <div style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
            <div
              style={{
                borderRadius: 10,
                padding: '5px 10px',
                marginBottom: 30,
              }}
            >
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>文章列表</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div
              className={styles.tags}
              style={{
                marginBottom: 100,
                width: '100%',
                textAlign: 'center',
              }}
            >
              {Object.keys(tags).map((item, idx) => {
                return (
                  <Badge key={idx} count={tags[item]} offset={[-5, 0]}>
                    <TagsComp map={map} clickTags={clickTags} item={item} />
                  </Badge>
                );
              })}
            </div>
            <Spin spinning={load} size="large">
              <List
                style={{
                  marginBottom: 50,
                  borderRadius: 10,
                  background: '#fff',
                  marginRight: 20,
                }}
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 10,
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
              <Divider style={{ color: '#666' }}>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#000',
                  }}
                >
                  <Icon
                    className="hj-icon1"
                    style={{ marginRight: 25 }}
                    type="github"
                    theme="filled"
                  />
                  <Icon
                    className="hj-icon2"
                    style={{ marginRight: 25 }}
                    type="wechat"
                    theme="filled"
                  />
                  <Icon
                    className="hj-icon3"
                    style={{ marginRight: 25 }}
                    type="instagram"
                    theme="filled"
                  />
                  <Icon
                    className="hj-icon4"
                    style={{ marginRight: 25 }}
                    type="yuque"
                    theme="filled"
                  />
                  <Icon
                    className="hj-icon5"
                    type="weibo-circle"
                    theme="filled"
                  />
                </span>
              </Divider>
            </Spin>
          </div>
        </Col>
        <Col xs={24} sm={0} md={0} lg={6} xl={4}>
          <BarCom />
          <div style={{ textAlign: 'center' }}>
            <img src="http://cdn.sellardoor.cn/banner-spot.jpg" alt="" />
          </div>
          <UserCom />
          <HotCom />
          <Instagram />
        </Col>
        <Col xs={0} sm={0} md={0} lg={1} xl={4}></Col>
      </Row>
      <FooterCom />
    </div>
  );
};
export default ArticleList;
