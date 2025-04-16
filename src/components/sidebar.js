import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  BookOutlined,
  PhoneOutlined,
  MenuOutlined
} from '@ant-design/icons';
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
          <Menu.Item key="/" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="/about" icon={<InfoCircleOutlined />}>About</Menu.Item>
          <Menu.Item key="/courses" icon={<BookOutlined />}>Courses</Menu.Item>
          <Menu.Item key="/contact" icon={<PhoneOutlined />}>Contact</Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
