import { Menu, Button, Dropdown } from 'antd';
import { UserOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import DashboardIcon from '../Assets/NavBar Assets/dashboardicon2.png';
import FlowsIcon from '../Assets/NavBar Assets/flowsicon.png';
import StrategiesIcon from '../Assets/NavBar Assets/strategyicon.png';
import CustomMetricsIcon from '../Assets/NavBar Assets/custommetricsicon2.png';
import ReportsIcon from '../Assets/NavBar Assets/analyticsicon.png';
import PlannerIcon from '../Assets/NavBar Assets/PlannerIcon1.png';
import PlannerIcon2 from '../Assets/NavBar Assets/PlannerIcon2.png';
import PlannerIcon3 from '../Assets/NavBar Assets/PlannerIcon3.png';
import PlannerIcon4 from '../Assets/NavBar Assets/PlannerIcon4.png';
import ReportsIcon1 from '../Assets/NavBar Assets/ReportsIcon1.png';
import ReportsIcon2 from '../Assets/NavBar Assets/ReportsIcon2.png';
import { useNavigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import InitialsAvatar from "react-initials-avatar";





const SidebarMenu = () => {

    const [selectedKeys, setSelectedKeys] = useState(['mail']);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        industry: '',
        email: '',
        companyName:''
    });



    const handleMenuItemClick = ({ key }) => {
        setSelectedKeys([]);
    };

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        fetch('http://localhost:4000/api/get/userinfo', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // Assuming the response data structure matches the keys in userData
                setUserData(data);
            })
            .catch((error) => {
                console.error('Error fetching user info:', error);
            });
    }, []);


    const navigate = useNavigate();

    const StyledInitialsAvatar = styled(InitialsAvatar)`
    border-radius: 12px;
    font-size: 1.5rem;
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #A7A7A7 ;
    color: white;
`;


    return (
        <Container>
        <Menu
            mode="inline"
            style={{ width: 256, position: 'fixed', top: 60, left: 0 }}
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
                           icon={<img src={PlannerIcon} style={{marginLeft:15, height: 25}} />}>

                    <span style={{ marginLeft: '10px' }}>Strategies</span>

                </Menu.Item>


                {/*<Menu.Item onClick={() => navigate('../custommetrics', { replace: true })}  style={{ textAlign: 'left', height:48 }}
                           icon={<img src={CustomMetricsIcon} style={{marginLeft:16, height: 24}} />}>

                    <span style={{ marginLeft: '10px' }}>Custom Metrics</span>

                </Menu.Item>*/}

                <Menu.Item onClick={() => navigate('../analytics', { replace: true })}  style={{ textAlign: 'left', height:48 }}
                           icon={<img src={ReportsIcon} style={{marginLeft:15, height: 25}} />}>

                    <span style={{ marginLeft: '10px' }}>Analytics</span>

                </Menu.Item>

                <Menu.Item onClick={() => navigate('../reports', { replace: true })}  style={{ textAlign: 'left', height:48 }}
                           icon={<img src={ReportsIcon1} style={{marginLeft:13, height: 27}} />}>

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
                        <div style={{marginRight: "1rem"}}>
                            <StyledInitialsAvatar
                                name={userData.firstName}
                            />
                        </div>
                        <div style={{lineHeight: 1, marginLeft:10,display: 'flex', flexDirection: 'column' }}>
                            <span style={{ maxWidth:150,whiteSpace: "nowrap", overflow:"hidden",textOverflow:"ellipsis", fontWeight:"bold", marginBottom:5 }}>{userData.firstName} {userData.lastName}</span>
                            <span style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.45)' }}>
                            {userData.companyName}
                            </span>
                        </div>
                    </div>
                </Dropdown>
            </Menu.Item>

        </Menu>
        </Container>
    );
};

export default SidebarMenu;
