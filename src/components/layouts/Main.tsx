import {UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import React from 'react';
import { PageHeader } from 'antd';
const {Header, Content, Footer, Sider} = Layout;

interface MainInterface {
    children: React.ReactElement
}

export const Main = ({children}:MainInterface) => {
    return (
        <Layout>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Dashboard"
                subTitle="Users"
            />
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    {children}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

