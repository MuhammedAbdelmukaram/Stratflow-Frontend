import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement,
    Filler,
    Tooltip,
    BarElement, Title, Legend
} from "chart.js";
import LineCard from "./Dashboard Components/Line Card";
import AdAccountSelect from "./Dashboard Components/AdAccountSelect";
import {useDispatch, useSelector} from "react-redux";
import {toggleDiv} from "../DashboardSlice";

ChartJS.register(LinearScale, CategoryScale, LineElement, BarElement, Title, Legend, PointElement, Filler, Tooltip );

const data2 = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderColor: 'rgba(0, 0, 0, 1)',
            pointBorderColor: 'rgba(0, 0, 0, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 4,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 0, 0, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 59, 40, 85, 65, 59, 80, 81, 56],
        },
        {
            label: 'My Second dataset',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(0, 255, 0, 0.4)',
            borderColor: 'rgba(6, 173, 133,1)',
            borderDash: [10, 5],
            pointBorderColor: 'rgba(6, 173, 133,1)',
            pointBackgroundColor: 'rgba(6, 173, 133,1)',
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(6, 173, 133,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [30, 40, 50, 60, 50, 30, 55, 30, 40, 50, 60, 45],
        }
    ],
};



const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: true,
            backgroundColor: (ctx) => {
                const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
                gradient.addColorStop(0, 'rgba(33, 37, 41, 0.2)');
                gradient.addColorStop(0.5, 'rgba(33, 37, 41, 0.1)');
                gradient.addColorStop(1, 'rgba(33, 37, 41, 0)');
                return gradient;
            },
            lineTension: 0.3,
            borderColor: '#212529',
            borderDash: [],
            borderDashOffset: 0,
            borderWidth: 1.5,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [75, 59, 80, 81, 56, 55, 85]
        },
    ],
};



const options2 = {
    scales: {
        x: {
            ticks: {
                beginAtZero: false,
            },
            grid: {
                display: false,
            },
        },
        y: {
            min: 0,
            ticks: {
                beginAtZero: true,


            },
            grid: {
                drawBorder: false,
                display: false,
            },
        },
    },

    responsive: false,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: true,
            mode: 'nearest',
            intersect: false,
            callbacks: {
                title: function (tooltipItem, data) {
                    return data.labels[tooltipItem[0].index];
                },
                label: function (tooltipItem, data) {
                    let label = data.datasets[tooltipItem.datasetIndex].label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += tooltipItem.yLabel;
                    return label;
                },
            },
        },
    },
};

const options = {
        scales: {
            // to remove the labels
            scaleLineColor: 'transparent',
            x: {

                display: false,

                        ticks: {
                            display: false,
                        },

                        // to remove the x-axis grid
                        grid: {
                            drawBorder: false,
                            display: false,
                        },
                },
                // to remove the y-axis labels
                y: {

                    display: false,
                    ticks: {
                            display: false,
                            beginAtZero: true,
                        },
                        // to remove the y-axis grid
                    grid: {
                            drawBorder: false,
                            display: false,
                        },
                    },

                },


         plugins: {
             legend: {
                 display: false
             },
            tooltip: {
              enabled: false,}
         },

         responsive: false,
         maintainAspectRatio: false,
         width: 140,
         height: 100,
};

const BarOptions = {
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
            grid: {
                drawBorder: false,
                display: false,
            },

        },
        y: {
            stacked: true,
        },
    },
};

const labels = ['Flow1', 'Flow2', 'Flow3', 'Flow4', 'Flow5', 'Flow6', 'Flow7'];

const fakeData1 = [4, 10, 0, 10, 8, 0, 0];
const fakeData2 = [2, 0, 8, 10, 5, 0, 3];
const fakeData3 = [4, 5, 5, 0, 10, 3, 3];

const BarData = {
    labels,
    datasets: [
        {
            label: 'Budget increase',
            data:fakeData1,
            backgroundColor: 'rgb(6,173,133)',
            barPercentage: 0.1, // Adjust as needed
            categoryPercentage: 0.8, // Adjust as needed
            borderRadius: {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 10,
                bottomRight: 10
            }
        },
        {
            label: 'Budget decrease',
            data: fakeData2,
            backgroundColor: 'rgb(95,47,47)',
            barPercentage: 0.1, // Adjust as needed
            categoryPercentage: 0.8, // Adjust as needed
            borderRadius: {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 10,
                bottomRight: 10
            }
        },
        {
            label: 'Pause',
            data: fakeData3,
            backgroundColor: 'rgb(208,212,8)',
            barPercentage: 0.1, // Adjust as needed
            categoryPercentage: 0.8, // Adjust as needed
            borderRadius: {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 10,
                bottomRight: 10
            }
        },
    ],
};




const SingleNewsCard = ({imgSrc, title, description, link}) => {
    return (
        <div
            className={"single-news-card"}
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                border: "1px solid #A9A9A9",
                boxSizing: "border-box",
                width: 300,
                height: 174,
                padding: 15,
                marginLeft: 10,
            }}
        >
            <p style={{
                color:"#06AD85",
            }}>{title}</p>
            <div style={{display:"flex", justifyContent:"space-between", paddingLeft:8}}>
                <img src={imgSrc}
                     style={{width: 70, height: 70}}
                     alt=""/>
                <p style={{
                    width:145,
                    whiteSpace: "pre-wrap",
                    overflowWrap: "break-word",
                    fontSize:12,
                }}
                >
                    {description}
                </p>
            </div>
            <a
                style={{
                    marginTop:"auto",
                    marginLeft:"auto",
                    fontSize:12,
                    textDecoration:"none",
                    color:"#06AD85",
                }}
                href={link}
            >
                See more
            </a>
        </div>
    );
};

const GraphCard = ({imgSrc, title, description, link}) => {
    return (
        <div
            className={"single-news-card"}
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                border: "1px solid #A9A9A9",
                boxSizing: "border-box",
                width: 300,
                height: 174,
                padding: 15,
                marginLeft: 10,
            }}
        >
            <p style={{
                color:"#06AD85",
            }}>{title}</p>
            <div style={{display:"flex", justifyContent:"space-between", paddingLeft:8}}>
                <img src={imgSrc}
                     style={{width: 70, height: 70}}
                     alt=""/>
                <p style={{
                    width:145,
                    whiteSpace: "pre-wrap",
                    overflowWrap: "break-word",
                    fontSize:12,
                }}
                >
                    {description}
                </p>
            </div>
            <a
                style={{
                    marginTop:"auto",
                    marginLeft:"auto",
                    fontSize:12,
                    textDecoration:"none",
                    color:"#06AD85",
                }}
                href={link}
            >
                See more
            </a>
        </div>
    );
};

function HourButtons() {
    const [selectedButton, setSelectedButton] = useState("24h");

    return (
        <div
        style={{
            marginTop: 40,
            marginLeft:20,
        }}
        >
            <button
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight: selectedButton === "1h" ? "bold" : "normal",
                    textDecoration: selectedButton === "1h" ? "underline" : "none"
                }}
                onClick={() => setSelectedButton("1h")}
            >
                1h
            </button>
            <button
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight: selectedButton === "24h" ? "bold" : "normal",
                    textDecoration: selectedButton === "24h" ? "underline" : "none"
                }}
                onClick={() => setSelectedButton("24h")}
            >
                24h
            </button>
            <button
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight: selectedButton === "7d" ? "bold" : "normal",
                    textDecoration: selectedButton === "7d" ? "underline" : "none"
                }}
                onClick={() => setSelectedButton("7d")}
            >
                7d
            </button>
            <button
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight: selectedButton === "30d" ? "bold" : "normal",
                    textDecoration: selectedButton === "30d" ? "underline" : "none"
                }}
                onClick={() => setSelectedButton("30d")}
            >
                30d
            </button>
        </div>
    );
}


function WhatsNew() {
    const showDiv = useSelector((state) => state.whatsNew.showDiv);
    const dispatch = useDispatch();

    const handleCollapse = () => {
        dispatch(toggleDiv());
    };

    return (
        <>
            {showDiv && (
                <div>
                    <p>What's New?</p>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            width: "fit-content",
                            height: 200,
                            backgroundColor: "#FAFAFA",
                            borderRadius: 10,
                            padding: 10,
                            paddingTop:26,
                            position: "relative",
                        }}
                    >

                        <button
                            style={{
                                position: "absolute",
                                top: -4,
                                right: 6,
                                border: "none",
                                backgroundColor: "transparent",
                            }}
                            onClick={handleCollapse}
                        >
                            <img src={require('../Assets/Dashboard Assets/CloseDashboardLine.png')} alt=""
                            width={'25'}/>
                        </button>

                        <SingleNewsCard
                            imgSrc={require("../Assets/Dashboard Assets/Slack.png")}
                            title={"INTEGRATION"}
                            description={
                                "Our Slack integration is LIVE! Connect your account and get flow notifications in real time."
                            }
                            link={""}
                        />

                        <SingleNewsCard
                            imgSrc={require("../Assets/Dashboard Assets/Shopify.png")}
                            title={"INTEGRATION"}
                            description={
                                "Connect your Shopify account and improve your attribution data considerably"
                            }
                            link={""}
                        />

                        <SingleNewsCard
                            imgSrc={require("../Assets/Dashboard Assets/Slack.png")}
                            title={"INTEGRATION"}
                            description={
                                "Our Slack integration is LIVE! Connect your account and get flow notifications in real time."
                            }
                            link={""}
                        />

                        <SingleNewsCard
                            imgSrc={require("../Assets/Dashboard Assets/Slack.png")}
                            title={"INTEGRATION"}
                            description={
                                "Our Slack integration is LIVE! Connect your account and get flow notifications in real time."
                            }
                            link={""}
                        />
                    </div>
                </div>
            )}
        </>
    );
}





class Dashboard extends React.Component{

    render() {

        return (
            <Container>
                <Row>
                    <Col xs={6}>
                        <h2>Welcome <span style={{fontWeight:700}}>Muhammed Abdelmukaram</span></h2>

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


                        <HourButtons/>




                        <div style={{display:"flex"}}>

                            <LineCard
                                cardTitle="Flow Triggers"
                                cardValue="27/55"
                                chartData={data}
                                options={options}
                            />

                            <LineCard
                                cardTitle="Saved Funds"
                                cardValue="$374k"
                                chartData={data}
                                options={options}
                            />

                            <LineCard
                                cardTitle="Ad Spend"
                                cardValue="$623k"
                                chartData={data}
                                options={options}
                            />

                            <LineCard
                                cardTitle="Profit"
                                cardValue="$254k"
                                chartData={data}
                                options={options}
                            />


                        </div>



                        <div style={{marginTop:85}}>
                            <p>Ad Spend/Profit</p>

                            <div
                            style={{ border:"1px solid #E5E5E5", borderRadius:10, padding:10, paddingTop:26, width:1300,boxSizing:"border-box"}}
                            >

                                <Line data={data2} options={options2} height='150' width={1260} />
                            </div>
                        </div>


                        <p
                            style={{
                                marginTop:100,
                                fontSize:20,
                                fontWeight:700,
                            }}
                        >Flow Performance</p>

                        <AdAccountSelect/>

                        <Bar options={BarOptions} data={BarData} />



                    </Col>
                </Row>
            </Container>
        );

    }
}


export default Dashboard;