import React, { useState } from 'react';
import { Typography, Button, Alert } from 'antd';

const { Title, Paragraph } = Typography;

const About = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAdmissionAlert = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <Title>About Us</Title>
      <Paragraph>
        Himalaya Darshan College is a premier institution providing higher education in Nepal.
        Since its establishment, we have aimed to uplift the educational standards and produce skilled graduates who can compete globally.
      </Paragraph>
      <Paragraph>
        Our college provides a welcoming learning environment, combining academics with extracurricular activities to support overall development.
      </Paragraph>
      <Title>Contact Information</Title>
      <Paragraph>
        <strong>Location:</strong> Biratnagar,Koshi Province, Nepal
      </Paragraph>
      <Paragraph>
        <strong>Address:</strong> Himalaya Darshan College, Main Road
      </Paragraph>
      <Paragraph>
        <strong>Contact:</strong> +977 1 2345678 | info@himalayadarshan.edu.np
      </Paragraph>
      <Button type="primary" onClick={handleAdmissionAlert}>
      Alert Message
      </Button>
      {showAlert && (
        <Alert
          message="Admission Open Now!"
          type="success"
          showIcon
          closable
          style={{ marginTop: 16 }}
        />
      )}
    </div>
  );
};

export default About;
