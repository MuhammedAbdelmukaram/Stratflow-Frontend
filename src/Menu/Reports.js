import React, {useState}from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";
import "../Assets/CSS/Reports/Reports.css";
import { DateRangePicker } from 'react-date-range';
import ReportDatePicker from "./Reports Components/Date Picker";



const ArrowDown = {
    width: 500,
    appearance: "none",
    backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px top 50%",
    paddingRight: "30px"
};


const ReportTypeButtons = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };

    return (
        <div style={{ display: 'flex' }}>
            <Button
                className={`reportTypeButtonGeneralReport ${
                    selectedButton === 0 ? 'selectedButton' : ''
                }`}
                onClick={() => handleButtonClick(0)}
            >
                <img
                    src={require('../Assets/Reports Assets/General Report.png')}
                    width="60px"
                    className="d-inline-block align-top"
                    alt="Notification Icon"
                />
                <p className="reportTypeText">General Report</p>
            </Button>

            <Button
                className={`reportTypeButton ${
                    selectedButton === 1 ? 'selectedButton' : ''
                }`}
                onClick={() => handleButtonClick(1)}
            >
                <img
                    src={require('../Assets/Reports Assets/FlowsLog.png')}
                    width="70px"
                    alt="Notification Icon"
                />
                <p className="reportTypeText">Flows Log</p>
            </Button>

            <Button
                className={`reportTypeButton ${
                    selectedButton === 2 ? 'selectedButton' : ''
                }`}
                onClick={() => handleButtonClick(2)}
            >
                <img
                    src={require('../Assets/Reports Assets/KPI Report.png')}
                    width="70px"
                    className="d-inline-block align-top"
                    alt="Notification Icon"
                />
                <p className="reportTypeText">KPI Report</p>
            </Button>
        </div>
    );
};

const ReportFormat = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <Button className={`reportFormatContainer ${
                    selectedButton === 0 ? 'selectedButton' : ''
                }`}
                        onClick={() => handleButtonClick(0)}
                >
                    <img
                        src={require("../Assets/Reports Assets/CSVIcon.png")}
                        width="40px"
                        className="d-inline-block align-top"
                        alt="Notification Icon"
                    />
                    <p className={"reportFormatText"}>CSV</p>
                </Button>
                <Button className={`reportFormatContainer ${
                    selectedButton === 1 ? 'selectedButton' : ''
                }`}
                        onClick={() => handleButtonClick(1)}>
                    <img
                        src={require("../Assets/Reports Assets/PDFIcon.png")}
                        width="40px"
                        className="d-inline-block align-top"
                        alt="Notification Icon"
                    />
                    <p className={"reportFormatText"}>PDF</p>
                </Button>
                <Button className={`reportFormatContainer ${
                    selectedButton === 2 ? 'selectedButton' : ''
                }`}
                        onClick={() => handleButtonClick(2)}>
                    <img
                        src={require("../Assets/Reports Assets/XLSXIcon.png")}
                        width="40px"
                        className="d-inline-block align-top"
                        alt="Notification Icon"
                    />
                    <p className={"reportFormatText"}>XLSX</p>
                </Button>
            </div>
        </>
    );
};

class Reports extends React.Component{

    render() {

        return (
            <Container>
                <Row>
                    <div style={{position:"relative", display:"flex", flexDirection:"column"}}>
                        <h3 style={{marginTop:40, display:"inline-flex"}}>Reports</h3>
                        <p style={{marginBottom:0, color:'#8C8C8C', display:"inline-flex"}}>Generate a performance report for your ad accounts</p>
                        <p style={{marginBottom:30, color:'#8C8C8C', marginTop:0, display:"inline-flex"}}><span style={{fontWeight:"bold"}}> Hover the info button and choose report that fits your needs. </span> </p>
                    </div>
                </Row>

                <Form.Group style={{marginTop:8, display:"flex", flexDirection:"column"}} controlId="formSelectTimezone">
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

                <p style={{fontSize:20, marginTop:25}}>Choose Report Type:</p>

                <ReportTypeButtons/>


                <p className={"reportItemHeading"}>Select Timeframe</p>

                <ReportDatePicker/>


                <p className={"reportItemHeading"}>Select Format</p>
                <ReportFormat/>

                <hr/>

                <Button className="btn download-button">Download</Button>
            </Container>
        );

    }
}


export default Reports;