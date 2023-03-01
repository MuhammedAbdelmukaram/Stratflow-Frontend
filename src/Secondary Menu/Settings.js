import React, {useState} from 'react';
import { Form, Button, Image, Container, Row, Col, Modal } from 'react-bootstrap';
import styled from "styled-components";
import InitialsAvatar from "react-initials-avatar";
import { FaEdit } from 'react-icons/fa';


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

const TeamStyledInitialsAvatar = styled(InitialsAvatar)`
    border-radius: 8px;
    font-size: 1.75rem;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #A7A7A7 ;
    color: white;
    margin: 0;
`;

const ArrowDown = {
    width: 250,
    appearance: "none",
    backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px top 50%",
    paddingRight: "30px"
};

function InviteMember() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button style={{width:140,backgroundColor:"#06AD85",borderColor: "#06AD85", marginTop:28, float:"right", fontSize:14, height:36, display:"block", marginBottom:20}} variant="secondary" variant="primary" onClick={handleShow}>+  Invite Members</Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Invite Team Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
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
                        Send Invitation
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const TimezoneSelector = () => {
    const [useTimezones, setUseTimezones] = useState(false);

    const handleCheckboxChange = (event) => {
        setUseTimezones(event.target.checked);
    }

    return (
        <>
            <Form.Group controlId="formUseTimezones">
                <Form.Check style={{textAlign:"left", fontSize:12}} type="checkbox" label="Use Timezones from TikTok account settings" onChange={handleCheckboxChange} />
            </Form.Group>

            <Form.Group style={{marginTop:8, display:"flex", flexDirection:"column"}} controlId="formSelectTimezone">
                <Form.Label style={{textAlign:"left"}}>Select Timezone</Form.Label>
                <Form.Control style={ArrowDown} as="select" disabled={useTimezones}>
                <option>UTC-12:00</option>
                    <option>UTC-11:00</option>
                    <option>UTC-10:00</option>
                    {/* Add additional timezone options here */}
                </Form.Control>
            </Form.Group>
        </>
    );
}

/*Editing the company name
function Example() {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState("This is the text to be edited");

    function handleEdit() {
        setEditing(!editing);
    }

    function handleChange(e) {
        setText(e.target.value);
    }
    */

class Settings extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    {/* First column */}
                    <Col xs={6} style={{marginTop:35}}>
                        <h6 style={{textAlign:"left", marginBottom:40}}>Settings</h6>
                        <p style={{textAlign:"left", marginBottom:20, fontSize:15}}>My Company</p>
                        {/* Profile photo section */}

                        <div>
                            <div style={{display: "flex", alignItems: "left", marginBottom:30}}>
                                <div style={{marginRight: "1rem"}}>
                                    <StyledInitialsAvatar
                                        name="Oldschoolee"
                                    />
                                </div>
                                <div>
                                    <p>Oldschoolee LTD</p>
                                    <Button style={{width:100,backgroundColor:"#06AD85",borderColor: "#06AD85"}} variant="secondary">Upload</Button>
                                </div>
                            </div>
                            <hr/>
                        </div>

                        <div style={{marginTop:26}}>
                            <p style={{textAlign:"left", marginBottom:30}}>Team</p>
                            <div style={{display: "flex"}}>

                                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>

                                    <div style={{marginRight: "1rem"}}>
                                        <TeamStyledInitialsAvatar
                                            name="Muhammed"
                                        />
                                    </div>

                                    <div style={{marginLeft: "1rem", display: "flex", flexDirection: "column"}}>
                                        <p style={{fontSize:12, fontWeight:"bold", marginBottom:0}}>Muhammed Abdelmukaram</p>
                                        <p style={{fontSize:10, marginBottom:0}}>fridgeproduction@gmail.com</p>
                                    </div>
                                    <div style={{marginLeft: "1rem", display: "flex", flexDirection: "row", alignItems:"center"}}>
                                        <p style={{marginLeft:45, fontSize: 14, marginBottom:0}}>Full Access</p>

                                            <a href="#" style={{ textDecoration: "none", color:"red", marginLeft:215, fontSize: 14}}>Remove</a>

                                        </div>

                                </div>

                            </div>

                            <div style={{display:"flex", justifyContent:"flex-end"}}>
                                <InviteMember />
                            </div>
                        </div>

                        <hr/>

                        {/* General settings section */}
                        <div>
                            <h6 style={{textAlign:"left", marginBottom:40, marginTop:30}}>General Settings</h6>
                            <Form>

                                <TimezoneSelector />

                                <Form.Group style={{marginTop:38}} controlId="formSendReports">
                                    <Form.Check style={{float:"left", fontSize:12}} type="checkbox" label="Send me weekly reports with changes on Email" />
                                </Form.Group>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Settings;