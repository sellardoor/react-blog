import React from 'react';
import { Form, Row, Col, Button, Input, Select, DatePicker, Spin } from 'antd';
import { FormType, DispatchType } from '@/models/connect';
import moment from 'moment';
import { connect } from 'umi';
import { connectState } from '@/models/connect';
import { searchArticleApi } from '@/services/articleList';
import { ResultItemType } from '../index.d';

type Iprops = FormType & ReturnType<typeof mapStateToProps> & DispatchType;

const ArticleListForm: React.FC<Iprops> = props => {
  const { dispatch } = props;
  const { getFieldDecorator } = props.form;
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'article/setload', payload: { load: true } });
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values = {
          ...values,
          date: values.date
            ? [values.date[0].valueOf(), values.date[1].valueOf()]
            : undefined,
          editDate: values.editDate
            ? [values.editDate[0].valueOf(), values.editDate[1].valueOf()]
            : undefined,
        };
        searchArticleApi(values).then(res => {
          if (res?.success) {
            const resData = res.result.map((item: ResultItemType) => {
              return {
                key: item._id,
                title: item.title,
                type: item.type,
                date: moment(item.date).format('YYYY-MM-DD HH:mm:ss'),
                hot: item.hot,
                editDate: item.editDate
                  ? moment(item.editDate).format('YYYY-MM-DD HH:mm:ss')
                  : '',
              };
            });
            dispatch({
              type: 'article/initArticle',
              payload: {
                data: resData,
              },
            });
            dispatch({ type: 'article/setload', payload: { load: false } });
          }
        });
      }
    });
  };
  const reset = () => {
    const { resetFields } = props.form;
    resetFields();
  };
  return (
    <div>
      <Form
        wrapperCol={{ span: 16 }}
        labelCol={{ span: 3 }}
        labelAlign="left"
        onSubmit={handleSubmit}
      >
        <Row>
          <Col span={8}>
            <Form.Item label="文章标题">
              {getFieldDecorator('title')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="热门文章">
              {getFieldDecorator('hot', {
                initialValue: 'all',
              })(
                <Select>
                  <Option value="all">全部</Option>
                  <Option value="true">是</Option>
                  <Option value="false">否</Option>
                </Select>,
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="文章类型">
              {getFieldDecorator('type', {
                initialValue: '全部',
              })(
                <Select>
                  {props.type.map(item => {
                    return <Option value={item}>{item}</Option>;
                  })}
                </Select>,
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="创建时间">
              {getFieldDecorator('date')(
                <RangePicker
                  style={{ width: '100%' }}
                  showTime={{
                    defaultValue: [
                      moment('00:00:00', 'HH:mm:ss'),
                      moment('23:59:59', 'HH:mm:ss'),
                    ],
                  }}
                  format="YYYY-MM-DD HH:mm:ss"
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="修改时间">
              {getFieldDecorator('editDate')(
                <RangePicker
                  style={{ width: '100%' }}
                  showTime={{
                    defaultValue: [
                      moment('00:00:00', 'HH:mm:ss'),
                      moment('23:59:59', 'HH:mm:ss'),
                    ],
                  }}
                  format="YYYY-MM-DD HH:mm:ss"
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item wrapperCol={{ span: 19 }} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">
                搜索
              </Button>
              <Button onClick={reset} style={{ marginLeft: 20 }}>
                重置
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ article }: connectState) => ({
  type: article.type,
});
export default connect(mapStateToProps)(Form.create<Iprops>()(ArticleListForm));
