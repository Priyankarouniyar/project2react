import React, { useState } from 'react';
import { Layout} from 'antd';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import StudentManagement from './pages/StudentManagement';

import { GlobalStateProvider } from './provider/GlobalStateContext';


const {  Sider, Content } = Layout;
const Project = () => {
const [collapsed] = useState(false);
  return (
    <GlobalStateProvider>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} trigger={null}>
        <Sidebar />
      </Sider>
      <Layout>
          <h2 style={{ margin: '16px',textAlign:'center', padding:'5px'}}>Himalaya Darshan College</h2>
        <Content style={{ margin: '16px', textAlign:'center',padding: '20px', background: 'white' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={< Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/students" element={<StudentManagement />} />

          </Routes>
        </Content>
      </Layout>
    </Layout>
    </GlobalStateProvider>
  );
};

export default Project;
