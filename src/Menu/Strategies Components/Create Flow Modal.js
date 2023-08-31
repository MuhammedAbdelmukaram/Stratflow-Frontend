import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";

const CreateFlow = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

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
                            <Button  onClick={() => navigate('../flowlogic', { replace: true })} variant="text" size="small"  style={{display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
                                <img
                                    src={require("../../Assets/Strategies Assets/CreateScratch.png")}
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
                                    src={require("../../Assets/Strategies Assets/UseStrategy.png")}
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
};

export default CreateFlow;
