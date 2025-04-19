
import React, { useState } from 'react';
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Popconfirm,
  Dropdown,
  Menu,
} from 'antd';
import { MoreOutlined } from '@ant-design/icons';

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
        setStudents((prev) =>
          prev.map((stu) =>
            stu.id === editingStudent.id ? { ...stu, ...values } : stu
          )
        );
      } else {
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
      render: (record) => {
        const menu = (
          <Menu>
            <Menu.Item onClick={() => showModal(record)}>Edit</Menu.Item>
            <Menu.Item>
              <Popconfirm
                title="Are you sure to delete this student?"
                onConfirm={() => handleDelete(record.id)}
                okText="Yes"
                cancelText="No"
              >
                <span>Delete</span>
              </Popconfirm>
            </Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} trigger={['click']}>
            <Button type="text" icon={<MoreOutlined />} />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <h2 style={{ margin: 0 }}>Student Management</h2>
        <Button type="primary" onClick={() => showModal()}>
          + Add Student
        </Button>
      </div>

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
