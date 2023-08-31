import React, {useState} from "react";
import {Button, Card, Modal} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SingleStrategyCard = ({ icon, height, firstText, secondText, ruleDescription, ruleImage }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate= useNavigate();
    const handleUseStrategy = async () => {
        try {
            const token = localStorage.getItem("accessToken");

            const headers = {
                Authorization: `Bearer ${token}`
            };

            const requestBody = {
                strategy: firstText // Send the firstText prop to the backend
            };

            const response = await axios.post("http://localhost:4000/api/flows/create", requestBody, { headers });
            const newFlowId = response.data.id;

            navigate(`/flowlogic/${newFlowId}`);

            handleClose();
        } catch (error) {
            console.error("Error using strategy:", error);
        }
    };

    return (
        <Card className="box" style={{ width: '390px', height: '192px', marginBottom:28 }}>

            <Card className="box" style={{ width: '390px', height: '192px' }}>
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <img
                            src={icon}
                            alt="King Flow"
                            style={{
                                marginRight: 8,
                                height:height,
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
                                            src={require('../../Assets/Strategies Assets/King.png')}
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
                                        <p style={{color:"#959595"}}>{ruleDescription}</p>
                                    </div>

                                    <img
                                        src={ruleImage}
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
                                <Button style={{backgroundColor:"#06AD85",borderColor: "#06AD85"}} onClick={handleUseStrategy}>
                                    Use
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>

                    <div style={{marginTop:20}}>
                        <p style={{textAlign:"left", fontWeight:"bold", marginBottom:0}}>
                            {firstText}
                        </p>
                        <p style={{textAlign:"left", }}>
                            {secondText}
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Card>
    );
};

export default SingleStrategyCard;
