import { Menu, Button, Dropdown } from 'antd';
import { UserOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {useState} from "react";
import DashboardIcon from '../Assets/NavBar Assets/dashboardicon2.png';
import FlowsIcon from '../Assets/NavBar Assets/flowsicon.png';
import StrategiesIcon from '../Assets/NavBar Assets/strategyicon.png';
import CustomMetricsIcon from '../Assets/NavBar Assets/custommetricsicon2.png';
import ReportsIcon from '../Assets/NavBar Assets/analyticsicon.png';
import { useNavigate } from 'react-router-dom';





const SidebarMenu = () => {

    const [selectedKeys, setSelectedKeys] = useState(['mail']);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const handleMenuItemClick = ({ key }) => {
        setSelectedKeys([]);
    };


    const navigate = useNavigate();




    return (
        <Menu
            mode="inline"
            style={{ width: 256, position: 'fixed', top: 71, left: 0 }}
            selectedKeys={selectedKeys}
            onClick={handleMenuItemClick}
        >
            <div style={{ position: 'relative', marginTop:'20px'}}>

                <Menu.Item onClick={() => navigate('../dashboard', { replace: true })}
                           style={{ textAlign: 'left', height:48  }}
                           icon={<img src={DashboardIcon} style={{marginLeft:12, height: 28}} />}>
                    <span style={{ marginLeft: '10px', fontSize: '14px' }}>Dashboard</span>
                </Menu.Item>

                <Menu.Item onClick={() => navigate('../flows', { replace: true })}
                           style={{ textAlign: 'left', height:48 }}
                           icon={<img src={FlowsIcon} style={{marginLeft:12, height: 28}} />}>
                    <span style={{ marginLeft: '10px' }}>Flows</span>

                </Menu.Item>

                <Menu.Item onClick={() => navigate('../strategies', { replace: true })}  style={{ textAlign: 'left', height:48 }}
                           icon={<img src={StrategiesIcon} style={{marginLeft:12, height: 28}} />}>

                    <span style={{ marginLeft: '10px' }}>Strategies</span>

                </Menu.Item>

                <Menu.Item onClick={() => navigate('../custommetrics', { replace: true })}  style={{ textAlign: 'left', height:48 }}
                           icon={<img src={CustomMetricsIcon} style={{marginLeft:16, height: 24}} />}>

                    <span style={{ marginLeft: '10px' }}>Custom Metrics</span>

                </Menu.Item>

                <Menu.Item onClick={() => navigate('../reports', { replace: true })}  style={{ textAlign: 'left', height:48 }}
                           icon={<img src={ReportsIcon} style={{marginLeft:15, height: 25}} />}>

                    <span style={{ marginLeft: '10px' }}>Reports</span>

                </Menu.Item>
            </div>

            <div style={{ height: 'calc(100vh - 64px - 55px)' }} />

            <Menu.Item
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'fixed',
                    bottom: 0,
                    width: 251,
                    textAlign: 'left',
                    height: 70,
                    borderRadius: 0,
                    padding: 10,
                    borderTop: '1px solid #dee2e6',
                }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <Dropdown

                    overlay={
                        <Menu
                            selectedKeys={selectedKeys}
                            onClick={handleMenuItemClick}
                            style=
                                {{opacity:'70%',
                                position: 'relative',}}

                        >
                            <Menu.Item onClick={() => navigate('../account', { replace: true })}  style={{ textAlign: 'left', alignItems:'center'}}>
                                <UserOutlined />
                                My Account
                            </Menu.Item>

                            <Menu.Item onClick={() => navigate('../settings', { replace: true })}  style={{ textAlign: 'left' }}>
                                <CalendarOutlined />
                                Settings
                            </Menu.Item>

                            <Menu.Item onClick={() => navigate('../billing', { replace: true })}  style={{ textAlign: 'left' }}>
                                <AppstoreOutlined />
                                Account & Billing
                            </Menu.Item>

                            <Menu.Item onClick={() => navigate('../integrations', { replace: true })}  style={{ textAlign: 'left' }}>
                                <SettingOutlined />
                                Integrations
                            </Menu.Item>
                        </Menu>
                    }
                    open={isDropdownOpen}
                    placement={'topRight'}
                >
                    <div style={{ display: 'flex', alignItems:'center'}}>
                        <img
                            src={require('../Assets/Singup/tik-tok-tiktok-logo-app-trend-1.png')}
                            alt="Profile"
                            style={{
                                width: 32,
                                height: 32,
                                borderRadius: '50%',
                                marginRight: 8,
                            }}
                        />
                        <div style={{lineHeight: 1, marginLeft:10,display: 'flex', flexDirection: 'column' }}>
                            <span style={{ maxWidth:150,whiteSpace: "nowrap", overflow:"hidden",textOverflow:"ellipsis", fontWeight:"bold", marginBottom:5 }}>John DoeDoeDoeDoeDoeDoe</span>
                            <span style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.45)' }}>
                            Oldschoolee LTD
                            </span>
                        </div>
                    </div>
                </Dropdown>
            </Menu.Item>

        </Menu>
    );
};

export default SidebarMenu;