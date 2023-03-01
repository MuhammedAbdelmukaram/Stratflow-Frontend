import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card, Button, Modal} from 'react-bootstrap';
import "../Assets/CSS/Strategies/Strategies.css";

function CreateFlow() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button style={{width:140,position:"absolute", top:50, right:15,backgroundColor:"#06AD85",borderColor: "#06AD85", marginTop:28, float:"right", fontSize:14, height:36, display:"block", marginBottom:20, borderRadius:0}} variant="secondary" variant="primary" onClick={handleShow}>Create Flow</Button>

            <Modal size={"lg"} show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <p style={{fontWeight:"bold", fontSize:20, marginBottom:0}}>Create Flow</p>
                    <hr style={{width:150, margin:0, backgroundColor:"#ADADAD"}}/>
                    <p style={{marginTop:6}}>NOTE: You can always choose a strategy and tailor it to your need</p>


                    <div style={{display: "flex", flexDirection: "row", justifyContent:"space-evenly"}}>
                        <div>
                            <Button variant="text" size="small"  style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
                                <img
                                    src={require("../Assets/Strategies Assets/CreateScratch.png")}
                                    alt="CreateScratch"
                                    style={{
                                        height:250,
                                        width:250
                                    }}
                                />
                            </Button>
                            <p style={{textAlign:"center", fontSize:16, fontWeight:"bold"}}>From Scratch</p>
                        </div>
                        <div>
                        <Button variant="text" size="small"  style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
                            <img
                                src={require("../Assets/Strategies Assets/UseStrategy.png")}
                                alt="CreateScratch"
                                style={{
                                    height:250,
                                    width:250
                                }}
                            />
                        </Button>
                        <p style={{textAlign:"center",fontSize:16, fontWeight:"bold"}}>Use Staregies</p>
                        </div>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    );
}

const MyComponent = ({ icon, firstText, secondText }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card className="box" style={{ width: '390px', height: '192px' }}>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <img
                        src={require('../Assets/Strategies Assets/King.png')}
                        alt="King Flow"
                        style={{
                            marginRight: 8,
                            height:46,
                        }}
                    />

                    <Button
                        style={{backgroundColor:"#F9F9F9", borderColor:"#BEBEBE", color:"#666666", height:30, fontSize:12, width:75, borderRadius:12, paddingTop:4, paddingBot:4, paddingRight: 14, paddingLeft: 14}}
                        variant="secondary"
                        className="use-button"
                        onClick={handleShow}>
                        Use
                    </Button>


                    <Modal size={"lg"} show={show} onHide={handleClose} centered>

                        <Modal.Body>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <div style={{display:"flex", flexDirection:"column",justifyContent:"flex-start"}}>
                                    <img
                                        src={require('../Assets/Strategies Assets/King.png')}
                                        alt="King Flow"
                                        style={{
                                            width: 32,
                                            height: 32,
                                            marginRight: 8,
                                        }}
                                    />
                                    <p style={{fontWeight:"bold", marginTop:12,}}>King Flow</p>
                                    <p style={{color:"#959595"}}>Profitable no mather what, minimizing
                                        costs with slower scaling.</p>
                                    <p style={{fontWeight:"bold"}}>Rule</p>
                                    <p style={{color:"#959595"}}>If Ad Spend is over $50 without sale  If Avereage play is over 30% of the video, If CTR is over 4%, increase budget by 35%,
                                        If CTR is under 4%, pause</p>
                                </div>

                                <img
                                    src={require('../Assets/Strategies Assets/King Flow.png')}
                                    alt="King Flow"
                                    style={{
                                        marginRight: 8,
                                        width: "45%",
                                    }}
                                />
                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button style={{backgroundColor:"#06AD85",borderColor: "#06AD85"}} onClick={handleClose}>
                                Use
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>

                <div style={{marginTop:20}}>
                    <p style={{textAlign:"left", fontWeight:"bold", marginBottom:0}}>
                        King Flow
                    </p>
                    <p style={{textAlign:"left", }}>
                        Profitable no mather what, minimizing
                        costs with slower scaling
                    </p>
                </div>
            </Card.Body>
        </Card>

    );
};

class Strategies extends React.Component{

    render() {

        return (

            <Container>
                <div style={{position:"relative", display:"flex", flexDirection:"column"}}>
                    <h3 style={{marginTop:40, display:"inline-flex"}}>Strategies</h3>
                    <p style={{marginBottom:0, color:'#8C8C8C', display:"inline-flex"}}>Save your time and use profitable flow presets. Customize them to your needs.</p>
                    <p style={{marginBottom:30, color:'#8C8C8C', marginTop:0, display:"inline-flex"}}><span style={{fontWeight:"bold"}}>Not sure what to use?</span> Click ‘Use’ and check out our guide!</p>
                    <CreateFlow/>
                </div>
                <Row>
                    <h5>Most Used</h5>
                    <Col style={{textAlign:"center"}}> <MyComponent/>  </Col>
                    <Col style={{textAlign:"center"}}><MyComponent/> </Col>
                    <Col style={{textAlign:"center"}}><MyComponent/> </Col>
                </Row>

                <Row
                style={{marginTop:25}}>
                    <h5 style={{marginBottom:15}}>Scaling</h5>
                    <Col style={{textAlign:"center"}}> <MyComponent/>  <MyComponent/>  <MyComponent/> </Col>
                    <Col style={{textAlign:"center"}}><MyComponent/> <MyComponent/> <MyComponent/></Col>
                    <Col style={{textAlign:"center"}}><MyComponent/> <MyComponent/> <MyComponent/></Col>
                </Row>

                <Row>
                    <h5>Pausing</h5>
                    <Col style={{textAlign:"center"}}> <MyComponent/>  <MyComponent/>  <MyComponent/> </Col>
                    <Col style={{textAlign:"center"}}><MyComponent/> <MyComponent/> <MyComponent/></Col>
                    <Col style={{textAlign:"center"}}><MyComponent/> <MyComponent/> <MyComponent/></Col>
                </Row>

                <Row>
                    <h5>Timing</h5>
                    <Col style={{textAlign:"center"}}> <MyComponent/>  <MyComponent/>  <MyComponent/> </Col>
                    <Col style={{textAlign:"center"}}><MyComponent/> <MyComponent/> <MyComponent/></Col>
                    <Col style={{textAlign:"center"}}><MyComponent/> <MyComponent/> <MyComponent/></Col>
                </Row>

                <Row>
                    <h5>Utility</h5>
                    <Col style={{textAlign:"center"}}> <MyComponent/>  <MyComponent/>  <MyComponent/> </Col>
                    <Col style={{textAlign:"center"}}><MyComponent/> <MyComponent/> <MyComponent/></Col>
                    <Col style={{textAlign:"center"}}><MyComponent/> <MyComponent/> <MyComponent/></Col>
                </Row>

            </Container>
        );

    }
}


export default Strategies;



/*
                    <div>
                        <img src="" alt=""/>
                        <p style={{fontWeight:"bold"}}>King Flow</p>
                        <p style={{color:"#959595"}}>Profitable no mather what, minimizing
                            costs with slower scaling.</p>
                        <p style={{fontWeight:"bold"}}>Rule</p>
                        <p style={{color:"#959595"}}>If Ad Spend is over $50 without sale  If Avereage play is over 30% of the video, If CTR is over 4%, increase budget by 35%,
                            If CTR is under 4%, pause</p>
                    </div>

 */