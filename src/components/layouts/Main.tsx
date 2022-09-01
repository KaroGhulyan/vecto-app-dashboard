import { Layout } from "antd";
import React from "react";
import { PageHeader } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const { Content, Footer } = Layout;

interface MainInterface {
  children: React.ReactElement;
}

export const Main = ({ children }: MainInterface) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/dashboard");
  };
  return (
    <Layout>
      {pathname !== "/dashboard" && (
        <PageHeader
          className="site-page-header"
          onBack={onBack}
          title={"Dashboard"}
          subTitle="Admins"
        />
      )}

      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
