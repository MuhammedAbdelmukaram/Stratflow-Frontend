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
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedElement } from '../Redux/SidebarSlice.js';
import {StyledInitialsAvatar} from '../Assets/CSS/SideNavBar/StyledInitialsAvatar'



const SidebarMenu = () => {

    const [selectedKeys, setSelectedKeys] = useState(['mail']);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const selectedElement = useSelector(state => state.sidebar.selectedElement);


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


    const navigateAndDispatch = (route) => {
        dispatch(setSelectedElement(route)); // Dispatch the route name
        navigate(route, { replace: true });

    };



    return (
        <Container>
        <Menu
            mode="inline"
            style={{ width: 256, position: 'fixed', top: 60, left: 0 }}
            selectedKeys={selectedKeys}
            onClick={handleMenuItemClick}
        >
            <div style={{ position: 'relative', marginTop: '20px' }}>
                <Menu.Item
                    onClick={() => navigateAndDispatch('../dashboard')}
                    style={{
                        textAlign: 'left',
                        height: 48,
                        background: selectedElement === '../dashboard' ? '#e7fff4' : '', // Change the background color for the selected item
                    }}
                    icon={<img src={DashboardIcon} style={{ marginLeft: 12, height: 28 }} />}
                >
                    <span style={{ marginLeft: '10px', fontSize: '14px' }}>Dashboard</span>
                </Menu.Item>

                <Menu.Item
                    onClick={() => navigateAndDispatch('../flows')}
                    style={{
                        textAlign: 'left',
                        height: 48,
                        background: selectedElement === '../flows' ? '#e7fff4' : '', // Change the background color for the selected item
                    }}
                    icon={<img src={FlowsIcon} style={{ marginLeft: 12, height: 28 }} />}
                >
                    <span style={{ marginLeft: '10px' }}>Flows</span>
                </Menu.Item>

                <Menu.Item
                    onClick={() => navigateAndDispatch('../strategies')}
                    style={{
                        textAlign: 'left',
                        height: 48,
                        background: selectedElement === '../strategies' ? '#e7fff4' : '', // Change the background color for the selected item
                    }}
                    icon={<img src={StrategiesIcon} style={{ marginLeft: 15, height: 25 }} />}>
                    <span style={{ marginLeft: '10px' }}>Strategies</span>
                </Menu.Item>

                <Menu.Item onClick={() => navigateAndDispatch('../scheduler')}
                           style={{
                               textAlign: 'left',
                               height: 48,
                               background: selectedElement === '../scheduler' ? '#e7fff4' : '', // Change the background color for the selected item
                           }}
                           icon={<img src={CustomMetricsIcon} style={{ marginLeft: 16, height: 24 }} />}>
                    <span style={{ marginLeft: '10px' }}>Scheduler</span>
                </Menu.Item>

                <Menu.Item onClick={() => navigateAndDispatch('../custommetrics')}
                           style={{
                                textAlign: 'left',
                                height: 48,
                                background: selectedElement === '../custommetrics' ? '#e7fff4' : '', // Change the background color for the selected item
                            }}
                           icon={<img src={CustomMetricsIcon} style={{ marginLeft: 16, height: 24 }} />}>
                    <span style={{ marginLeft: '10px' }}>Custom Metrics</span>
                </Menu.Item>

                <Menu.Item onClick={() => navigateAndDispatch('../analytics')} style={{
                    textAlign: 'left',
                    height: 48,
                    background: selectedElement === '../analytics' ? '#e7fff4' : '', // Change the background color for the selected item
                }}  icon={<img src={ReportsIcon} style={{ marginLeft: 15, height: 25 }} />}>
                    <span style={{ marginLeft: '10px' }}>Analytics</span>
                </Menu.Item>

                <Menu.Item onClick={() => navigateAndDispatch('../reports')} style={{
                    textAlign: 'left',
                    height: 48,
                    background: selectedElement === '../reports' ? '#e7fff4' : '', // Change the background color for the selected item
                }}  icon={<img src={ReportsIcon1} style={{ marginLeft: 13, height: 27 }} />}>
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
