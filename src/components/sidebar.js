import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  DashboardOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  BookOutlined,
  MenuOutlined,
  UserOutlined
} from '@ant-design/icons';
import { PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleClick = ({ key }) => {
    navigate(key);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => setCollapsed(!collapsed)}
        icon={<MenuOutlined />}
        style={{ margin: '10px' }}
      />
      <Sider collapsible collapsed={collapsed} trigger={null}>
        <Menu theme="dark" mode="inline" onClick={handleClick}>
          <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
          <Menu.Item key="/" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="/about" icon={<InfoCircleOutlined />}>About</Menu.Item>
          <Menu.Item key="/courses" icon={<BookOutlined />}>Courses</Menu.Item>
          <Menu.Item key="/contact" icon={<PhoneCall size={16} />}>Contact</Menu.Item>

          <Menu.Item key="/students" icon={<UserOutlined />}>Students</Menu.Item>


        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
