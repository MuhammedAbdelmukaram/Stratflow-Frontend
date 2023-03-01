import React, {useState} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LineElement, LinearScale, PointElement} from "chart.js";

ChartJS.register(LinearScale, CategoryScale, LineElement, PointElement);

const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'august', 'september', 'october', 'november', 'december'],
    datasets:[
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 4,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 59, 40, 85, 65, 59, 80, 81, 56]
        }
    ]
};



const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
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
            data: [65, 59, 80, 81, 56, 55, 85]
        }
    ]
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
    legend: {
        display: false
    },
    responsive: false,
    maintainAspectRatio: false,
    width: 140,
    height: 100,
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

            legend: {
                display: false
            },
            responsive: false,
            maintainAspectRatio: false,
            width: 140,
            height: 100,
};



const ArrowDown = {
    width: 500,
    appearance: "none",
    backLroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px top 50%",
    paddingRight: "30px"
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
    const [showDiv, setShowDiv] = useState(true);

    const handleCollapse = () => {
        setShowDiv(false);
    };

    return (
        <>
            {showDiv && (
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

                           <p>What's New!</p>

                           <WhatsNew/>


                           <p
                           style={{
                               marginTop:20,
                               fontSize:20,
                               fontWeight:700,
                           }}
                           >Overview</p>


                           <Form.Group style={{marginTop:20, display:"flex", flexDirection:"column"}} controlId="formSelectTimezone">
                               <Form.Label style={{textAlign:"left"}}>Ad account:</Form.Label>
                               <Form.Control style={ArrowDown} as="select">
                                   <option>
                                       <div style={{display:"flex", flexDirection:"column"}}>
                                           <p>Stratflow Ad Account</p>
                                           <span>user5844887010046</span>
                                       </div>
                                   </option>
                                   <option>
                                       <div style={{display:"flex", flexDirection:"column"}}>
                                           <p>Stratflow Ad Account 2</p>
                                           <span>user5844887010046</span>
                                       </div>
                                   </option>
                                   <option>
                                       <div style={{display:"flex", flexDirection:"column"}}>
                                           <p>Stratflow Ad Account 3</p>
                                           <span>user5844887010046</span>
                                       </div>
                                   </option>
                                   {/* Add additional timezone options here */}
                               </Form.Control>
                           </Form.Group>

                       </div>


                        <HourButtons/>




                        <div style={{display:"flex"}}>
                            <div
                                className={"single-dash-card"}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#fff",
                                    border: "1px solid #A9A9A9",
                                    boxSizing: "border-box",
                                    width: 316,
                                    height: 174,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    paddingTop: 8,
                                    paddingBottom:15,
                                    marginLeft: 10,
                                    marginTop:20,
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                                    <p style={{ color: "#595959", fontWeight:600 }}>Flow triggers</p>
                                    <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: 8 }}>
                                        <p
                                            style={{
                                                fontSize:36,
                                                fontWeight:"bold",
                                            }}
                                        >27/55</p>
                                    </div>

                                    <div
                                        style={{
                                            borderRadius: 10,
                                            backgroundColor: "rgba(6, 173, 133, 0.03)",
                                            border: "1px solid #06AD85",
                                            display: "flex",
                                            justifyContent:"flex-end",
                                            alignItems:"center",
                                            marginTop:"auto",
                                            width:65,
                                            height:25

                                        }}
                                    >
                                        <img src={require("../Assets/Dashboard Assets/Growing.png")}
                                             style={{
                                                 width: 19,
                                                 height: 21,
                                                 marginLeft: 5,
                                                 marginTop: 5,
                                                 marginBottom: 5,
                                                 marginRight: 5,}}
                                             alt=""/>

                                        <p
                                            style={{
                                                color: "#06AD85",
                                                fontSize: 12,
                                                fontWeight: 800,
                                                marginTop: 5,
                                                marginBottom: 5,
                                                marginRight: 5,
                                            }}
                                        >35%</p>
                                    </div>

                                </div>



                                <div style={{ display: "flex", flexDirection: "column", width: "50%", justifyContent:"flex-end" }}>

                                    <Line data={data} options={options} height={108} width={144}/>

                                </div>
                            </div>


                        </div>


                        <Line
                            style={{marginTop:20, marginLeft:10, marginRight:10}}
                            data={data2} options={options2} width={1100}> </Line>



                    </Col>
                </Row>
            </Container>
        );

    }
}


export default Dashboard;