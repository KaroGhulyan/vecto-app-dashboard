import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import {AppSider,Main,AppRoutes} from './components/layouts'
import Dashboard from './components/Dashboard'
import { BrowserRouter } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => (
    <Layout style={{height: '100vh'}}>
        <BrowserRouter>
        <AppSider/>
        <AppRoutes/>
        <Main>
            <Dashboard/>
        </Main>
        </BrowserRouter>
    </Layout>
);

export default  App