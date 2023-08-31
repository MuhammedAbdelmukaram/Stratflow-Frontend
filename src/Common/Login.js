import React, {useEffect, useState} from 'react';
import {Form, Button, InputGroup} from 'react-bootstrap';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import DOMPurify from "dompurify";
import {useAuth} from "../Auth/authContext"; // Import the Link component

const Login = () => {

    const navigate = useNavigate()

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loginError, setLoginError] = useState(false);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const sanitizedFormData = {
                email: DOMPurify.sanitize(formData.email),
                password: DOMPurify.sanitize(formData.password),
            };

            const response = await axios.post('http://localhost:4000/api/login', sanitizedFormData);

            if (response.status === 200) {

                const token = response.data.token;
                login(token);

                //document.cookie = `accessToken=${token}; path=/; domain=localhost`;
                setLoginError(false); // Reset login error state
                navigate('/dashboard');

            }

            // Add more logic to handle the response as needed

        } catch (error) {
            console.error('Error during login', error);
            setLoginError(true); // Set login error state
        }
    };




    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <img
                src={require('../Assets/Singup/StratFlow-WhiteBackground.png')}
                style={{ position: 'absolute', left: '10px', top: '10px', width: '100px' }}
                alt="Logo"
            />
            <div style={{ width: '330px', position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Log In</h2>
                <Form id="loginForm" onSubmit={handleLogin}>
                    <Form.Group>
                        <Form.Label className="form-label">Email</Form.Label>
                        <Form.Control type="text" className="form-control" size={"sm"} placeholder="Email" name={"email"}  onChange={handleInputChange} required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="form-label">Password</Form.Label>
                        <Form.Control type="password" className="form-control" size={"sm"} placeholder="Password" name={"password"}  onChange={handleInputChange} required />
                    </Form.Group>
                    <p style={{ marginTop: '10px', fontSize: '11px', textAlign: 'left' }}>
                        <Link to="/passwordreset" style={{ marginTop: '10px', fontSize: '11px', textAlign: 'left', textDecoration: 'underline', color: 'black' }}>
                            Forgot your password?
                        </Link>
                    </p>

                    <div style={{ marginTop: '50px', fontSize: '10px', textAlign: 'left' }}>
                        <p>Don't have an account? <a href="/signup" style={{ textDecoration: 'underline', fontWeight: 'bold', color: 'black' }}>Start your free trial</a></p>
                    </div>

                    <Button
                        style={{
                            width: '100%',
                            fontWeight: 'bold',
                            height: '50px',
                            backgroundColor: '#06AD85',
                            color: 'white',
                            border:'1px solid #06ad85',
                            fontSize: '15px',
                        }}
                        type="submit"

                    >
                        Log In
                    </Button>

                    {loginError && (
                        <p style={{ color: 'red', textAlign: 'center' }}>Incorrect email or password. Please try again.</p>
                    )}
                </Form>

            </div>
        </div>
    );
};

export default Login;
