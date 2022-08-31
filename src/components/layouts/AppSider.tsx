import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';

const { Header, Content, Footer, Sider } = Layout;

export const AppSider = () => {
    return (
        <Sider
            className={'p-5'}
            theme="light"
            breakpoint="lg"
            collapsedWidth="0"
            style={{padding: '100px 0'}}
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo"/>
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={[UserOutlined].map(
                    (icon, index) => ({
                        key: String(index + 1),
                        icon: React.createElement(icon),
                        label: `nav ${index + 1}`,
                    }),
                )}
            />
        </Sider>
    )
}