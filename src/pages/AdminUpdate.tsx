import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { UseAdminsStore } from "../hooks/useAdminsStore";
import { AdminType } from "../interfaces";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const AdminUpdate: React.FC = () => {
  const { updateAdmin, admin } = UseAdminsStore();

  const onFinish = (values: AdminType) => {
    updateAdmin(values);
  };

  return (
    <>
      {admin && (
        <Row>
          <Col span={12} style={{ height: "70vh" }}>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[{ required: true }]}
                initialValue={admin.name}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
                initialValue={admin.email}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "phone"]}
                label="Phone"
                initialValue={admin.phone}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "website"]}
                label="Website"
                initialValue={admin.website}
              >
                <Input />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      )}
    </>
  );
};

export default AdminUpdate;
