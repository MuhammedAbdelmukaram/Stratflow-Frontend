import React, {useState} from 'react';
import {Form, Button, Image, Container, Row, Col, Modal} from 'react-bootstrap';
import InitialsAvatar from 'react-initials-avatar';
import styled from 'styled-components';


const StyledInitialsAvatar = styled(InitialsAvatar)`
    border-radius: 16px;
    font-size: 3.5rem;
    width: 78px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #A7A7A7 ;
    color: white;
`;

function ChangePassword() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button style={{ height:45, backgroundColor:"#06AD85", borderColor: "#06AD85"}} variant="secondary" onClick={handleShow}>Change password</Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder=""
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder=""
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder=""
                                autoFocus
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{backgroundColor:"#06AD85",borderColor: "#06AD85"}} onClick={handleClose}>
                        Change Password
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

class MyAccount extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    {/* First column */}
                    <Col xs={6} style={{marginTop:35}}>
                        <h6 style={{textAlign:"left", marginBottom:40}}>My Account</h6>
                        <div>
                            <div style={{display: "flex", alignItems: "left"}}>
                                <div style={{marginRight: "1rem"}}>
                                    <StyledInitialsAvatar
                                        name="Muhammed"
                                    />
                                </div>
                                <div>
                                    <p>Profile photo</p>
                                    <Button style={{width:100,backgroundColor:"#06AD85",borderColor: "#06AD85"}} variant="secondary">Upload</Button>
                                </div>
                            </div>
                            <hr/>
                            <Form>

                                <Form.Group  style={{marginTop:15, }} controlId="formFirstName">
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name" />
                                    </div>
                                </Form.Group>

                                <Form.Group  style={{marginTop:15, }} controlId="formLastName">
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" />
                                    </div>
                                </Form.Group>

                                <Form.Group style={{marginTop:15, }} controlId="formPhoneNumber">
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter phone number" />
                                    </div>
                                </Form.Group>

                                <Form.Group style={{marginTop:15, }} controlId="formIndustry">
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                    <Form.Label>Industry</Form.Label>
                                    <Form.Control type="text" placeholder="Enter industry" />
                                    </div>
                                </Form.Group>

                                <hr/>
                                <Form.Group style={{marginTop:15, }} controlId="formEmail">
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    </div>
                                </Form.Group>

                            </Form>
                            <hr/>
                            {/* Change password button */}
                            <div style={{textAlign:"left"}}>
                                <p>Password</p>
                                <ChangePassword />
                            </div>
                        </div>

                    </Col>

                    {/* Second column */}
                    <Col xs={6} style={{marginTop:205}}>
                        {/* Connected accounts text and Add Account button */}
                        <div style={{textAlign:"center"}}>
                            <p>Connected accounts</p>
                            <Button style={{backgroundColor:"#06AD85", borderColor: "#06AD85"}} variant="secondary">Add Account</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MyAccount;



