import React from 'react';
import {Button, Form, Input} from "antd";


<h2>Create Your Account</h2>


class Login extends React.Component{

    render() {

        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <img
                    src={require('../Assets/Singup/Untitled design.png')}
                    style={{ position: 'absolute', left: '10px', top: '10px', width: '100px' }}
                    alt="Logo"
                />
                <div style={{ width: '330px', position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Log In</h2>
                    <Form id="loginForm" onsubmit="return validateForm()">
                        <Form.Item label="Email" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                            <Input placeholder="Email" required />
                        </Form.Item>

                        <Form.Item style={{ marginTop: '-10px' }} label="Password" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                            <Input type="password" placeholder="Password" required />
                        </Form.Item>
                        <p style={{ marginTop: '10px', fontSize: '11px', textAlign: 'left' }}>
                            <a href="/passwordreset" style={{ textDecoration: 'underline', color: 'black' }}>Forgot your password?</a>
                        </p>

                        <Form.Item style={{ marginTop: '50px', fontSize: '10px', textAlign: 'left' }}>
                            Don't have an account? <a href="/signup" style={{ textDecoration: 'underline', fontWeight: 'bold', color: 'black' }}>Start your free trial</a>
                        </Form.Item>
                        <Button
                            style={{
                                width: '100%',
                                fontWeight:'bold',
                                height: '50px',
                                backgroundColor: '#06AD85',
                                color: 'white',
                                fontSize: '15px',
                            }}
                            type="primary"
                            onClick={this.handleLogin}
                        >
                            Log In
                        </Button>

                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;







