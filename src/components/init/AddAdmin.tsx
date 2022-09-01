import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import { AdminType } from "../../interfaces";

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

interface AddAdminInterface {
  createAdmin?: (data: AdminType) => void;
}

export const AddAdmin: React.FC = ({ createAdmin }: AddAdminInterface) => {
  const onFinish = useCallback(
    (values: AdminType) => {
      if (createAdmin) {
        createAdmin(values);
      }
    },
    [createAdmin]
  );

  return (
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
        required
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
        required
      >
        <Input type={"email"} />
      </Form.Item>
      <Form.Item name={["user", "phone"]} label="Phone" required>
        <Input type={"number"} />
      </Form.Item>
      <Form.Item name={["user", "website"]} label="Website">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
