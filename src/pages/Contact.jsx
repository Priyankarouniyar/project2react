import React from 'react';
import { Form, Input, Button, Typography, message } from 'antd';

const { Title } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('Message sent successfully!');
  };

  return (
    <div>
      <Title>Contact Us</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Full Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Enter valid email' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter a message' }]}>
          <Input.TextArea/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Send Message</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
