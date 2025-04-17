// src/pages/StudentManagement.jsx
import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Space, Popconfirm } from 'antd';

const StudentManagement = () => {
  const [form] = Form.useForm();
  const [students, setStudents] = useState([
    { id: 1, name: 'Sita Sharma', email: 'sita@example.com', course: 'BIM' },
    { id: 2, name: 'Ram Thapa', email: 'ram@example.com', course: 'BBA' },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const showModal = (student = null) => {
    setEditingStudent(student);
    form.setFieldsValue(student || { name: '', email: '', course: '' });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (editingStudent) {
        // Update existing
        setStudents((prev) =>
          prev.map((stu) =>
            stu.id === editingStudent.id ? { ...stu, ...values } : stu
          )
        );
      } else {
        // Add new
        const newStudent = { ...values, id: Date.now() };
        setStudents([...students, newStudent]);
      }
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Course',
      dataIndex: 'course',
    },
    {
      title: 'Actions',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => showModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this student?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Student Management</h2>
      <Button type="primary" onClick={() => showModal()} style={{ marginBottom: 16 }}>
        + Add Student
      </Button>
      <Table dataSource={students} columns={columns} rowKey="id" />

      <Modal
        title={editingStudent ? 'Edit Student' : 'Add Student'}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
        okText="Save"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Student Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item name="course" label="Course" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default StudentManagement;
