import React, { useState } from 'react';
import { Typography, Button, Drawer, Collapse, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const Home = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const studentReviews = [
    {
      name: ' Rukhshar Zeba',
      feedback: 'The faculty is very supportive and friendly.',
    },
    {
      name: 'Bhumika shrestha',
      feedback: 'I love the learning environment here.',
    },
    {
      name: 'Ritika Chaudhary',
      feedback: 'Excellent infrastructure and campus!',
    },
    {
      name: 'Swastiks Timalsina',
      feedback: 'Best IT courses with practical exposure.',
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Welcome to Himalaya Darshan College</Title>
      <Paragraph>
        We are committed to academic excellence, innovation, and all-round development of our students.
      </Paragraph>

      <Button type="primary" onClick={showDrawer}>
        What Students Say
      </Button>

      <Drawer
        title="Student Testimonials"
        placement="right"
        onClose={closeDrawer}
        open={open}
        width={400}
      >
        <Collapse accordion>
          {studentReviews.map((item, index) => (
            <Panel
              header={
                <span>
                  <Avatar
                    size="small"
                    icon={<UserOutlined />}
                    style={{ marginRight: 8 }}
                  />
                  {item.name}
                </span>
              }
              key={index}
            >
              <p>{item.feedback}</p>
            </Panel>
          ))}
        </Collapse>
      </Drawer>
    </div>
  );
};

export default Home;
