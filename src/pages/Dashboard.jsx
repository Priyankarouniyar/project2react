import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import {
  UserOutlined,
  TeamOutlined,
  BookOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const stats = [
  {
    title: 'Students',
    value: 950,
    icon: <UserOutlined />,
    color: '#1890ff',
  },
  {
    title: 'Teachers',
    value: 35,
    icon: <TeamOutlined />,
    color: '#52c41a',
  },
  {
    title: 'Courses',
    value: 5,
    icon: <BookOutlined />,
    color: '#faad14',
  },
  {
    title: "Today's Attendance",
    value: '842 / 950',
    icon: <CheckCircleOutlined />,
    color: '#f5222d',
  },
];

const Dashboard = () => {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ marginBottom: 24 }}>📊 Dashboard</h2>
      <Row gutter={[16, 16]}>
        {stats.map((item, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card hoverable style={{ textAlign: 'center' }}>
              <Statistic
                title={item.title}
                value={item.value}
                prefix={item.icon}
                valueStyle={{ color: item.color }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
