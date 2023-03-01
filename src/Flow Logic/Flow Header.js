import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import FlowName from "./Flow Header Components/FlowName";
import AnalyticsButton from "./Flow Header Components/Analytics Button";

const FlowHeader = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);


    const ArrowDown = {
        width: 500,
        appearance: "none",
        backLroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px top 50%",
        paddingRight: "30px"
    };
    const activateFlowHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    return (
        <div
            style={{
                width:'100%',
                display: 'flex',
                backgroundColor: '#313131',
                height: '5vh',
                color:"white"

            }}
        >
            <div
                style={{
                    width:'100%',
                    display:"flex",
                    alignItems:"center",
                }}
            >
                <img src={require("../Assets/NavBar Assets/Stratflow-logo.png")}
                     className="button-icon"

                     alt="edit icon"
                     width="20" />

                <div style={{ marginLeft: '20%'}}>
                <FlowName/>
                </div>

                <AnalyticsButton/>

                <button
                    style={{
                        backgroundColor: '#313131',
                        border: "1px solid white",
                        color: 'white',
                        fontSize: '12px',
                        padding: '5px 10px',
                        borderColor:"white",
                        marginLeft:"auto",
                        marginRight:"1%"
                    }}
                > Save Flow </button>
                <button
                    style={{
                        backgroundColor: '#06AD85',
                        color: 'white',
                        border: "1px solid white",
                        fontSize: '12px',
                        padding: '5px 10px',
                        borderColor:"white",
                        marginLeft:"",
                        marginRight:"4%"

                    }}
                    onClick={activateFlowHandler}
                > Activate Flow </button>

                <button style={{
                    backgroundColor: '#313131',
                    border: "1px solid white",
                    color: 'white',
                    fontSize: '12px',
                    padding: '5px 10px',
                    borderColor:"white",
                    justifyContent:"flex-end",
                    marginRight:"10%"
                }}
                        onClick={() => navigate('../flows', { replace: true })}
                > Exit  </button>
            </div>

            <Modal show={showModal} onHide={closeModalHandler} size={"xl"}>
                <Modal.Header closeButton>
                    <FlowName/>

                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <div
                style={{
                    display:"flex",
                    justifyContent:"space-between",
                    padding:20
                }}
                >
                    <div style={{}}>
                        <p style={{fontWeight:"bold"}}>
                            RULE
                        </p>
                        <p>
                            If *Metric* *Sign* *Value*
                            <br/>
                            If *Metric* *Sign* *Value*
                            <br/>
                            If *Metric* *Sign* *Value*
                            <br/>
                            If *Metric* *Sign* *Value*
                            <br/>
                        </p>
                    </div>

                    <div
                    style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}
                    >
                        <Form.Check style={{textAlign:"left", fontSize:12}} type="checkbox" label="Notify me when flow triggers"  />
                        <Button variant="primary" onClick={closeModalHandler}>
                            Activate
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default FlowHeader;