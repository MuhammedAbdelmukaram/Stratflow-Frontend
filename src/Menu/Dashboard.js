import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, Line} from 'react-chartjs-2';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
import LineCard from "./Dashboard Components/Line Card";
import AdAccountSelect from "./Dashboard Components/AdAccountSelect";
import {data2, data, options, options2, BarOptions, BarData} from './Dashboard Components/Chart Data';
import axios from "axios";
import WhatsNew from "./Dashboard Components/What's New"
import TimeframeButtons from "./Dashboard Components/Timeframe Buttons";

ChartJS.register(LinearScale, CategoryScale, LineElement, BarElement, Title, Legend, PointElement, Filler, Tooltip );


const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState([]);
    const [name, setName] = useState([]);
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        // Fetch dashboard data from the backend using the token
        const fetchDashboardData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/dashboard', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the request headers
                    },
                });
                setDashboardData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        const fetchName = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/get/userinfo', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the request headers
                    },
                });
                setName(response.data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        /*const fetchAdsAccounts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/dashboard', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the request headers
                    },
                });
                setDashboardData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };*/

        fetchName();

        fetchDashboardData();
    }, []); // Pass the token as a dependency


    return (
            <Container style={{marginTop:40}}>
                <Row>
                    <Col xs={6}>
                        <h2>Welcome <span style={{fontWeight:700}}>{name.firstName} {name.lastName}</span></h2>

                       <div
                       style={{marginTop:20}}>



                           <WhatsNew/>


                           <p
                           style={{
                               marginTop:20,
                               fontSize:20,
                               fontWeight:700,
                           }}
                           >Overview</p>


                          <AdAccountSelect/>

                       </div>


                        <TimeframeButtons/>


                        <div style={{ display: 'flex' }}>
                            {dashboardData.map((item, index) => (
                                <React.Fragment key={index}>
                                    <LineCard
                                        cardTitle="Flow Triggers"
                                        cardValue={item.flowsTrigger}
                                        chartData={data}
                                        options={options}
                                    />
                                    <LineCard
                                        cardTitle="Saved Funds"
                                        cardValue={item.savedFunds}
                                        chartData={data}
                                        options={options}
                                    />
                                    <LineCard
                                        cardTitle="Ad Spend"
                                        cardValue={item.adSpend}
                                        chartData={data}
                                        options={options}
                                    />
                                    <LineCard
                                        cardTitle="Profit"
                                        cardValue={item.profit}
                                        chartData={data}
                                        options={options}
                                    />
                                    {/* Add more LineCard components for other properties as needed */}
                                </React.Fragment>
                            ))}
                        </div>

                    </Col>
                </Row>
            </Container>
        );
}


export default Dashboard;
