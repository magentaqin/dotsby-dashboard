import React from 'react';
import { Icon, Input, Button, Form } from 'antd';
import { Link } from 'react-router-dom';

export default class AuthForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onSubmit(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={{ minWidth: '360px', maxWidth: '360px' }}>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Please input your email.' },
              { type: 'email', message: 'Invalid email format'},
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: 'Please input your password.' },
              { pattern: /^[a-zA-Z0-9]{6,20}$/, message: 'Only letters and numbers are allowed. Must have 6-20 charaters.'}
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%', height: '40px' }}>
            {this.props.submitText}
          </Button>
          <Link to={this.props.navToPath}>
            <Button type="link" style={{ float: 'right'}}>{this.props.navToText}</Button>
          </Link>
        </Form.Item>
      </Form>
    );
  }
}
