import React from 'react';
import { Collapse, Typography } from 'antd';
const { Title } = Typography;
const { Panel } = Collapse;
const Courses = () => {
  return (
    <div>
      <Title>Our Courses</Title>

      <Collapse accordion>
        <Panel header="BSc CSIT">
          A course designed for students interested in computer science and IT, focusing on programming, databases, and networks.
        </Panel>
        <Panel header="BIM">
          Combines IT and management, perfect for those who want to build a career in tech business and system management.
        </Panel>
        <Panel header="BBM">
          Bachelor of Business Management — prepares students for leadership roles in the corporate world.
        </Panel>
        <Panel header="BCA" >
          Bachelor in Computer Application — focuses on app development, software engineering, and data handling.
        </Panel>
        <Panel header="BBS" >
          Bachelor of Business Studies — provides a strong foundation in business, accounting, and economics.
        </Panel>
      </Collapse>
    </div>
  );
};

export default Courses;
