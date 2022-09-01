import { Layout } from "antd";
import React from "react";
import { AppSider, Main, AppRoutes } from "./components/layouts";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => (
  <Layout>
    <BrowserRouter>
      <AppSider />
      <Main>
        <AppRoutes />
      </Main>
    </BrowserRouter>
  </Layout>
);

export default App;
