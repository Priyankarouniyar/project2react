import React from 'react';
import { Form, Input, Button, Typography, message, Card } from 'antd';

const { Title } = Typography;

const Contact = () => {
  const [form] = Form.useForm(); 

  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('Message sent successfully!');
    form.resetFields();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '40px 20px',
        background: '',
        minHeight: '100vh',
      }}
    >
      <Card
        style={{ width: '100%', maxWidth: 600 }}
      >
        <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
          Contact Us
        </Title>
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}
          >
            <Input placeholder="Enter your email address" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Please enter a message' }]}
          >
            <Input.TextArea rows={4} placeholder="Write your message here..." />
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Contact;
