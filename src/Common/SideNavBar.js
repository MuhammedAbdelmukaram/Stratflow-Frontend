import React, {useEffect, useState} from 'react';
import "../Assets/CSS/SideNavBar/SideNavBar.css"
import DashboardIcon from '../Assets/NavBar Assets/dashboardicon2.png';
import FlowsIcon from '../Assets/NavBar Assets/flowsicon.png';
import StrategiesIcon from '../Assets/NavBar Assets/strategyicon.png';
import CustomMetricsIcon from '../Assets/NavBar Assets/custommetricsicon2.png';
import AnalyticsIcon from '../Assets/NavBar Assets/analyticsicon.png';
import ReportsIcon from '../Assets/NavBar Assets/reportsicon.png';
import {useNavigate} from "react-router-dom";


const SideNavBar = () => {
    const menuItems= [
        {
            text: "Dashboard",
            icon: "DashboardIcon",
            link: "/dashboard",
        },
        {
            text: "Flows",
            icon: "FlowsIcon",
            link: "/flows"
        },
        {
            text: "Strategies",
            icon: "StrategiesIcon",
            link:  "/strategies"
        },
        {
            text: "Analytics",
            icon: "AnalyticsIcon",
            link: "/analytics"
        },
        {
            text: "Custom Metrics",
            icon: "CustomMetricsIcon",
            link: "/custom-metrics"
        },
        {
            text: "Reports",
            icon: "ReportsIcon",
            link: "/reports"
        },

    ];

    const iconMap = {
        "Dashboard": DashboardIcon,
        "Flows": FlowsIcon,
        "Strategies": StrategiesIcon,
        "Analytics": AnalyticsIcon,
        "Custom Metrics": CustomMetricsIcon,
        "Reports": ReportsIcon
    };

    // State to keep track of whether the dropdown is open or not
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        <div className="side-nav-container" style={{ height: "100vh"}}>
            <div className="nav-upper">
                <div className="nav-heading">
                    <div className="nav-brand">
                        <img
                            src={require('../Assets/NavBar Assets/Stratflow-logo.png')}
                            width="25"
                            height=""
                            className="d-inline-block align-top"
                            alt="Stratflow Logo"
                        />

                    </div>
                </div>
            </div>
            <div className="nav-menu">
                {menuItems.map(({text,icon, link}) => (
                    <a href={link} className="menu-item">

                        <img src={iconMap[text]} style={{ marginLeft: 12, height: 28 }} />
                        <p>{text}</p>

                    </a>
            ))
            }
            </div>



            <div className="dropdown-button"  onClick={toggleDropdown}>
                <div style={{ display: 'flex', alignItems:'center'}}>
                    <img
                        src={require('../Assets/Singup/TikTokLogo.png')}
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
                            MechaLabSolutions LTD
                            </span>
                    </div>
                </div>
            </div>


            <div
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                style={{
                    position: 'fixed',
                    top: '50px',
                    right: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: '1',
                    visibility: isDropdownOpen ? 'visible' : 'hidden'
                }}
            >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src=""
                            alt="Account"
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: 8,
                            }}
                        />
                        <a href="/account">Account</a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src=""
                            alt="Settings"
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: 8,
                            }}
                        />
                        <a href="/settings">Settings</a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src=""
                            alt="Billing"
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: 8,
                            }}
                        />
                        <a href="/billing">Billing</a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src=""
                            alt="Integrations"
                            style={{
                                width: 20,
                                height: 20,
                                marginRight: 8,
                            }}
                        />
                        <a href="/integrations">Billing</a>
                    </div>
                </div>
            </div>
    );
};

export default SideNavBar;
