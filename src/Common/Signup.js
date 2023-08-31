import {Form, Button, InputGroup} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import "../Assets/CSS/Signup/Signup.css";
import SignupSteps from "./SignupStepsCircles";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import DOMPurify from 'dompurify';
import LoadingScreen from "./Loader";
import {useAuth} from "../Auth/authContext";





function Signup () {

    const [currentForm, setCurrentForm] = useState(1);

    const [loading, setLoading] = useState(false); // Initialize loading state
    const { login } = useAuth();


    const [step1FormData, setStep1FormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
    });

    const [step2FormData, setStep2FormData] = useState({
        companyName: '',
        industryName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = DOMPurify.sanitize(value); // Sanitize the user input
        setStep1FormData((prevFormData) => ({
            ...prevFormData,
            [name]: sanitizedValue,
        }));
    };

    const handleStep2Change = (e) => {
        const { name, value } = e.target;
        setStep2FormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };




    // Function to submit Step 1 data and move to Step 2
    const handleStep1Submit = async (e) => {
        e.preventDefault();

        try {
            // Sanitize form data before submission
            const sanitizedFormData = {
                firstName: DOMPurify.sanitize(step1FormData.firstName),
                lastName: DOMPurify.sanitize(step1FormData.lastName),
                email: DOMPurify.sanitize(step1FormData.email),
                password: DOMPurify.sanitize(step1FormData.password),
                phoneNumber: DOMPurify.sanitize(step1FormData.phoneNumber),
            };

            console.log(sanitizedFormData);

            // Submit sanitized form data to the backend
            const response = await axios.post('http://localhost:4000/api/signup/step1', sanitizedFormData);

            if (response.status === 200) {
                // Successfully completed Step 1, now log in the user
                const token = response.data.token; // Assuming your response includes the token
                login(token); // Use the login function from your authentication context

                console.log(token);

                setCurrentForm(2); // Move to Step 2


            }

        } catch (error) {
            console.error('Error during Step 1 form submission:', error);
            // Handle the error here (e.g., display an error message)
        }
    };



    const handleStep2Submit = async (e) => {
        e.preventDefault();
        try {
            const jwtToken = localStorage.getItem("accessToken"); // Retrieve the token from local storage
            console.log(jwtToken);
            if (!jwtToken) {
                // Token is missing, handle the situation
                console.error("Token is missing");
                return;
            }

            const headers = {
                Authorization: `Bearer ${jwtToken}`
            };


            const response = await axios.post(
                'http://localhost:4000/api/signup/steptwo',
                step2FormData,
                { headers });


            if (response.status === 200) {
                setCurrentForm(3); // Move to Step 3 after successful submission
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Error during Step 2 form submission:', error.response.status, error.response.data);
                // You can display a user-friendly error message based on the response status
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received from the server:', error.request);
                // Handle this scenario (e.g., display a message that the server is not responding)
            } else {
                // Something else happened while setting up the request
                console.error('Error while setting up the request:', error.message);
                // Handle this scenario (e.g., display a generic error message)
            }
        }
    };



    const handleStep3Submit = async () => {
        try {
            // You can add form validation here if required
            // Perform the necessary actions for Step 3 (e.g., connecting the ad account)

            // After successful completion of Step 3 actions, navigate to the dashboard
            navigate('../dashboard', { replace: true });
        } catch (error) {
            console.error('Error during Step 3 form submission:', error);
            // Handle the error here (e.g., display an error message)
        }
    };



    const navigate = useNavigate();

        switch (currentForm) {
            case 1:

        return (
            <div className={"signup-step"}>
                <img
                    src={require('../Assets/Singup/StratFlow-WhiteBackground.png')}
                    alt="Logo"
                    className={"logo"}
                />
                <div className={"form-wrapper"} >
                    <SignupSteps currentForm={currentForm} />

                    <h2 className={"signup-headline"} >Create Your Account</h2>
                    <Form id="signupForm" onSubmit={handleStep1Submit}>

                        <Form.Group>
                            <Form.Label className="form-label">First name</Form.Label>
                            <Form.Control type="text" className="form-control" size={"sm"} placeholder="First Name" name={"firstName"}  onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">Last name</Form.Label>
                            <Form.Control type="text" size={"sm"} placeholder="Last Name" name={"lastName"} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">Email</Form.Label>
                            <Form.Control type="email" size={"sm"} placeholder="Email" name={"email"} onChange={handleChange}  required />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form-label">Password</Form.Label>
                            <Form.Control type="password" size={"sm"} placeholder="Password" name={"password"} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group style={{marginBottom:60}}>
                            <Form.Label className="form-label">Phone Number</Form.Label>
                            <Form.Text className="text-muted">
                                - optional
                            </Form.Text>
                            <Form.Control type="text" size={"sm"} placeholder="Phone number" name={"phoneNumber"} onChange={handleChange} />

                        </Form.Group>

                        <p className={"signup-small-text"}>
                            Already have an account? <a href="/login" style={{ textDecoration: 'underline', fontWeight: 'bold', color: "black" }}>Log in</a>
                        </p>

                        <Button
                            className={"signup-button"}
                            type="submit"
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
                            src={require('../Assets/Singup/StratFlow-WhiteBackground.png')}
                            className={"logo"}
                            alt="Logo"
                        />
                        <div className={"form-wrapper"} >
                            <SignupSteps currentForm={currentForm} />
                            <h2 className={"signup-headline"}>Set Up Your Company</h2>
                            <Form id="signupForm2" onSubmit={handleStep2Submit}>
                                <Form.Group>
                                    <Form.Label className={"form-label"}>Company Name</Form.Label>
                                    <Form.Control value={step2FormData.companyName} className={"form-control"} type="text" name={"companyName"} placeholder="Company Name" onChange={handleStep2Change} required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className={"form-label"}>Industry</Form.Label>
                                    <Form.Control value={step2FormData.industryName} type="text" name={"industryName"} placeholder="Industry" onChange={handleStep2Change} required />
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
                                    type="submit"
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
                            src={require('../Assets/Singup/StratFlow-WhiteBackground.png')}
                            className={"logo"}
                            alt="Logo"
                        />
                        <div className={"form-wrapper-step-3"}>
                            <SignupSteps currentForm={currentForm} />
                            <h2 className={"signup-headline"}>Connect Your Ad Account</h2>

                            <Button
                                className={"tiktok-connect-account-button"}
                                type="primary"
                                onClick={handleStep3Submit}
                            >
                                <img src={require('../Assets/Singup/TikTokLogo.png')} alt="TikTok icon" className={"tiktok-icon"} />
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
