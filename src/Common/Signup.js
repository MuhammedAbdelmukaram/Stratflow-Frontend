import {  Input, Checkbox } from 'antd';
import {Form, Button, InputGroup} from 'react-bootstrap';
import React, {useState} from 'react';
import "../Assets/CSS/Signup/Signup.css";
import SignupSteps from "./SignupStepsCircles";
import {useNavigate} from "react-router-dom";




function Signup () {

    const [currentForm, setCurrentForm] = useState(1);


    const handleNext = () => {
        setCurrentForm(prevState => prevState + 1);
    }

    const navigate = useNavigate();

        switch (currentForm) {
            case 1:

        return (
            <div className={"signup-step"}>
                <img
                    src={require('../Assets/Singup/Untitled design.png')}
                    alt="Logo"
                    className={"logo"}
                />
                <div className={"form-wrapper"} >
                    <SignupSteps currentForm={currentForm} />

                    <h2 className={"signup-headline"} >Create Your Account</h2>
                    <Form id="signupForm" onsubmit="return validateForm()" >

                        <Form.Group>
                            <Form.Label className="form-label">First name</Form.Label>
                            <Form.Control type="text" className="form-control" size={"sm"} placeholder="First Name" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">Last name</Form.Label>
                            <Form.Control type="text" size={"sm"} placeholder="Last Name" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">Email</Form.Label>
                            <Form.Control type="email" size={"sm"} placeholder="Email" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">Password</Form.Label>
                            <Form.Control type="password" size={"sm"} placeholder="Password" required />
                        </Form.Group>

                        <Form.Group style={{marginBottom:60}}>
                            <Form.Label className="form-label">Phone Number</Form.Label>
                            <Form.Text className="text-muted">
                                - optional
                            </Form.Text>
                            <Form.Control type="text" size={"sm"} placeholder="Phone number" />

                        </Form.Group>

                        <p className={"signup-small-text"}>
                            Already have an account? <a href="/login" style={{ textDecoration: 'underline', fontWeight: 'bold', color: "black" }}>Log in</a>
                        </p>

                        <Button
                            className={"signup-button"}
                            type="primary"
                            onClick={handleNext}
                        >
                            Create Your Account
                        </Button>
                        <p className={"signup-small-text"}>
                            By signing up, you agree to <a href="/login" style={{ textDecoration: 'underline', color:"black" }}>Terms of Service</a> and <a href="/login" style={{ textDecoration: 'underline', color:"black" }}>Privacy Policy</a>.
                        </p>

                    </Form>
                </div>
            </div>
        );
            case 2:
                return (
                    <div className={"signup-step"}>
                        <img
                            src={require('../Assets/Singup/Untitled design.png')}
                            className={"logo"}
                            alt="Logo"
                        />
                        <div className={"form-wrapper"} >
                            <SignupSteps currentForm={currentForm} />
                            <h2 className={"signup-headline"}>Set Up Your Company</h2>
                            <Form id="signupForm">
                                <Form.Group>
                                    <Form.Label className={"form-label"}>Company Name</Form.Label>
                                    <Form.Control className={"form-control"} type="text" placeholder="Company Name" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className={"form-label"}>Industry</Form.Label>
                                    <Form.Control type="text" placeholder="Industry" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>How will you use Stratflow?</Form.Label>
                                    <InputGroup className={"input-group"} >
                                        <Form.Check
                                            type="checkbox"
                                            className={"form-check"}
                                            label="To automate my ads"
                                            value="Option 1"
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            className={"form-check"}
                                            label="To edit campaigns in bulk"
                                            value="Option 2"
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            className={"form-check"}
                                            label="To analyze my ads"
                                            value="Option 3"
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            className={"form-check"}
                                            label="I don't know yet"
                                            value="Option 4"
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Button
                                    className={"signup-button"}
                                    type="primary"
                                    onClick={handleNext}
                                >
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className={"signup-step"}>
                        <img
                            src={require('../Assets/Singup/Untitled design.png')}
                            className={"logo"}
                            alt="Logo"
                        />
                        <div className={"form-wrapper-step-3"}>
                            <SignupSteps currentForm={currentForm} />
                            <h2 className={"signup-headline"}>Connect Your Ad Account</h2>

                            <Button
                                className={"tiktok-connect-account-button"}
                                type="primary"
                                onClick={handleNext}
                            >
                                <img src={require('../Assets/Singup/tik-tok-tiktok-logo-app-trend-1.png')} alt="TikTok icon" className={"tiktok-icon"} />
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft:'8px' }}>
                                    <span style={{ fontSize: '14px' }}>TikTok Ads</span>
                                    <span style={{ color: 'blue', fontSize: '12px', textAlign:'left' }}>Connect</span>
                                </div>
                            </Button>

                            <Button
                                onClick={() => navigate('../dashboard', { replace: true })}
                            style={{display:"flex", alignItems:"center", justifyContent:"center",marginTop:20, float:"right", backgroundColor:"#06ad85", borderColor:"#06ad85"}}
                            >
                                <span style={{fontSize:12}}>Connect Later</span>
                            </Button>




                        </div>
                    </div>
                );

        }


}

export default Signup;