import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";

const { Sider } = Layout;

const navItems = [
  {
    key: "dashboard",
    icon: <UserOutlined />,
    label: "Dashboard",
    link: "/dashboard",
  },
];

export const AppSider = () => {
  return (
    <Sider
      className={"p-5"}
      theme="light"
      breakpoint="lg"
      collapsedWidth="0"
      style={{ padding: "100px 0" }}
    >
      <div className="logo" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={navItems}
      />
    </Sider>
  );
};
