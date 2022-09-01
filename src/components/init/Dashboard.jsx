import React from "react";
import { Button, Row, Table } from "antd";
import { UseAdminsStore } from "../../hooks/useAdminsStore";
import { AppDrawer } from "../layouts";
import { AddAdmin } from "./AddAdmin";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name.length - b.name.length,
    render: (value, data) => {
      return <Link to={`/admin/${data.id}/edit`}>{value}</Link>;
    },
  },
  {
    title: "Username",
    dataIndex: "username",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
];

export const Dashboard = () => {
  const { admins, createAdmin, toggleSider, showSider } = UseAdminsStore();

  return (
    <>
      <AppDrawer showSider={showSider} toggleSider={toggleSider}>
        <AddAdmin createAdmin={createAdmin} />
      </AppDrawer>
      <Row end={"ls"}>
        <Button type="primary" onClick={toggleSider}>
          Add Admin User
        </Button>
      </Row>
      <Table
        columns={columns}
        dataSource={admins}
        pagination={true}
        rowKey="name"
      />
    </>
  );
};
