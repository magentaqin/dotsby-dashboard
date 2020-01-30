import React from 'react';
import { Icon, Input, Form } from 'antd';

class NewDocForm extends React.Component {

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('title', {
            rules: [
              { required: true, message: 'Please input your API document title.' },
            ],
          })(
            <Input
              prefix={<Icon type="read" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="API Document Title"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('version', {
            rules: [
              { required: true, message: 'Please input your document inital version.' },
              { pattern: /^[0-9]{1,5}\.[0-9]{1,3}\.[0-9]{1,3}$/, message: 'Invalid version format. Version should be like: 0.1.0'}
            ],
          })(
            <Input
              prefix={<Icon type="tag" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Document Initial Version"
            />,
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'create-new-doc' })(NewDocForm);
