import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    OrderedListOutlined,
    HomeOutlined,
    UserOutlined,
    CarOutlined,
    SettingOutlined,
    LogoutOutlined,
    MoneyCollectOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';
import '../../css/admin/SideBar.css'
import { Layout, Menu, theme } from 'antd';
import {NavLink,Outlet} from "react-router-dom";
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const LogoutHandle = () => {
        localStorage.removeItem("token");
        window.location.reload()
    }
    return (
        <Layout>
            <Sider style={{backgroundColor:'#1e1e1e'}} trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    style={{backgroundColor:'#1e1e1e'}}
                    clasName="asd"
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <NavLink to="/admin"><HomeOutlined /></NavLink>,
                            label: 'Anasayfa',
                        },
                        {
                            key: '2',
                            icon: <NavLink to="hizmetler"><OrderedListOutlined /></NavLink>,
                            label: 'Hizmetler',
                        },
                        {
                            key: '3',
                            icon: <NavLink to="referanslar"><CheckCircleOutlined /></NavLink>,
                            label: 'Referanslar',
                        },
                        {
                            key: '4',
                            icon: <NavLink to="araclar"><CarOutlined /></NavLink>,
                            label: 'Araçlar',
                        },
                        {
                            key: '5',
                            icon: <NavLink to="sorular"><UserOutlined /></NavLink>,
                            label: 'Kullanıcı Soruları',
                        },
                        {
                            key: '6',
                            icon: <NavLink to="online-teklif"><MoneyCollectOutlined /></NavLink>,
                            label: 'Teklifler',
                        },
                        {
                            key: '7',
                            icon: <NavLink to="ayarlar"><SettingOutlined /></NavLink>,
                            label: 'Genel Ayarlar',
                        },
                        {
                            key: '8',
                            icon: <LogoutOutlined onClick={LogoutHandle} />,
                            label: <a onClick={LogoutHandle}>Çıkış Yap</a> ,
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="admin-content"
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default Sidebar;