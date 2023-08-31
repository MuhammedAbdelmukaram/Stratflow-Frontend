import React, {useEffect, useState} from 'react';
import {Form, Button, Image, Container, Row, Col, Modal} from 'react-bootstrap';
import InitialsAvatar from 'react-initials-avatar';
import styled from 'styled-components';
import ChangePassword from "./My Account Components/Change Password";
import {useNavigate} from "react-router-dom";


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



const MyAccount = () => {

        const [userData, setUserData] = useState({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            industry: '',
            email: '',

        });

        useEffect(() => {
            const token = localStorage.getItem('accessToken');

            fetch('http://localhost:4000/api/get/userinfo', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    // Assuming the response data structure matches the keys in userData
                    setUserData(data);
                })
                .catch((error) => {
                    console.error('Error fetching user info:', error);
                });
        }, []);


    // Use useNavigate hook to get the navigation function
    const navigate = useNavigate();

    // Navigate to the TikTok URL when the "Add Account" button is clicked
    const handleAddAccountClick = () => {
        const tiktokUrl =
            'https://business-api.tiktok.com/portal/auth?app_id=7164692270397014017&state=your_custom_params&redirect_uri=https%3A%2F%2Foldschoolee.com%2F';
        window.location.href = tiktokUrl;
    };


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
                                        name={userData.firstName}
                                    />
                                </div>
                            </div>
                            <hr/>
                            <Form>

                                <Form.Group style={{ marginTop: 15 }} controlId="formFirstName">
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter first name"
                                            value={userData.firstName}
                                            readOnly // To make it unchangeable
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group style={{ marginTop: 15 }} controlId="formLastName">
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter last name"
                                            value={userData.lastName}
                                            readOnly // To make it unchangeable
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group style={{ marginTop: 15 }} controlId="formPhoneNumber">
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            placeholder="Enter phone number"
                                            value={userData.phoneNumber}
                                            readOnly // To make it unchangeable
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group style={{ marginTop: 15 }} controlId="formIndustry">
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Form.Label>Industry</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter industry"
                                            value={userData.industry}
                                            readOnly // To make it unchangeable
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group style={{ marginTop: 15 }} controlId="formEmail">
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            value={userData.email}
                                            readOnly // To make it unchangeable
                                        />
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
                            <Button style={{backgroundColor:"#06AD85", borderColor: "#06AD85"}} onClick={handleAddAccountClick} variant="secondary">Add Account</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
}

export default MyAccount;



