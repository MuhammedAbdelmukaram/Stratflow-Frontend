import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';

class Signup extends React.Component {

    state = {
        currentForm: 1
    }

    handleNext = () => {
        this.setState(prevState => ({
            currentForm: prevState.currentForm + 1
        }));
    }


    render() {

        switch (this.state.currentForm) {
            case 1:
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <img
                    src={require('../Assets/Singup/Untitled design.png')}
                    style={{ position: 'absolute', left: '10px', top: '10px', width:'100px' }}
                    alt="Logo"
                />
                <div style={{ width: '330px', position: 'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Create Your Account</h2>
                    <Form id="signupForm" onsubmit="return validateForm()" >

                        <Form.Item label="First name" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                            <Input placeholder="First Name" required />
                        </Form.Item>

                        <Form.Item style={{ marginTop: '-10px' }} label="Last name" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                            <Input placeholder="Last Name" required />
                        </Form.Item>

                        <Form.Item style={{ marginTop: '-10px' }} label="Email" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                            <Input placeholder="Email" required />
                        </Form.Item>

                        <Form.Item style={{ marginTop: '-10px' }} label="Password" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                            <Input type="password" placeholder="Password" required />
                        </Form.Item>

                        <Form.Item style={{ marginTop: '-10px' }} label={<span>Phone Number <span style={{ color: '#ccc' }}>- optional</span></span>} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                            <Input placeholder="Phone number" />
                        </Form.Item>

                        <Form.Item style={{ marginTop: '50px', fontSize: '12px', textAlign:'left' }}>
                            Already have an account? <a href="/login" style={{ textDecoration: 'underline', fontWeight: 'bold', color:"black" }}>Log in</a>
                        </Form.Item>

                        <Button
                            style={{
                                width:'100%',
                                height: '55px',
                                backgroundColor: '#06AD85',
                                color: 'white',
                                fontSize: '15px'
                            }}
                            type="primary"
                            onClick={this.handleNext}
                        >
                            Create Your Account
                        </Button>
                        <p style={{ marginTop: '10px', fontSize: '11px', textAlign:"left" }}>
                            By signing up, you agree to <a href="/login" style={{ textDecoration: 'underline', color:"black" }}>Terms of Service</a> and <a href="/login" style={{ textDecoration: 'underline', color:"black" }}>Privacy Policy</a>.
                        </p>

                    </Form>
                </div>
            </div>
        );
            case 2:
                return (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <img
                            src={require('../Assets/Singup/Untitled design.png')}
                            style={{ position: 'absolute', left: '10px', top: '10px', width:'100px' }}
                            alt="Logo"
                        />
                        <div style={{ width: '330px', position: 'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}>
                            <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Set Up Your Company</h2>
                            <Form id="signupForm">
                                <Form.Item label="Company Name" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                    <Input placeholder="Company Name" required />
                                </Form.Item>
                                <Form.Item style={{ marginTop: '-10px' }} label="Industry" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                    <Input placeholder="Industry" required />
                                </Form.Item>
                                <Form.Item style={{ marginTop: '-10px' }} label="How will you use Stratflow?" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>

                                    <Checkbox.Group style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Checkbox style={{ display: 'flex', alignItems: 'center', width: '100%', height: '38px', backgroundColor: '#ffffff', border: '1px solid #d9d9d9', borderRadius: '4px', padding: '0 10px', marginBottom: '8px' }} value="Option 1">To automate my ads</Checkbox>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Checkbox style={{ display: 'flex', alignItems: 'center', width: '100%', height: '38px', backgroundColor: '#ffffff', border: '1px solid #d9d9d9', borderRadius: '4px', padding: '0 10px', marginBottom: '8px'  }} value="Option 2">To edit campaigns in bulk</Checkbox>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Checkbox style={{ display: 'flex', alignItems: 'center', width: '100%', height: '38px', backgroundColor: '#ffffff', border: '1px solid #d9d9d9', borderRadius: '4px', padding: '0 10px', marginBottom: '8px'  }} value="Option 3">To analyze my ads</Checkbox>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <Checkbox style={{ display: 'flex', alignItems: 'center', width: '100%', height: '38px', backgroundColor: '#ffffff', border: '1px solid #d9d9d9', borderRadius: '4px', padding: '0 10px', marginBottom: '8px'  }} value="Option 4">I don’t know yet</Checkbox>
                                        </div>
                                    </Checkbox.Group>


                                </Form.Item>
                                <Button
                                    style={{
                                        width:'100%',
                                        height: '55px',
                                        backgroundColor: '#06AD85',
                                        color: 'white',
                                        fontSize: '15px'
                                    }}
                                    type="primary"
                                    onClick={this.handleNext}
                                >
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <img
                            src={require('../Assets/Singup/Untitled design.png')}
                            style={{ position: 'absolute', left: '10px', top: '10px', width:'100px' }}
                            alt="Logo"
                        />
                        <div style={{ width: '330px', position: 'absolute', top:'40%', left:'50%', transform:'translate(-50%,-50%)'}}>
                            <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Connect Your Ad Account</h2>

                            <Button
                                style={{
                                    width: '100%',
                                    height: '58px',
                                    backgroundColor: 'white',
                                    color: 'black',
                                    border: '0.5px solid #6e6e6e',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    padding: '0 20px',
                                }}
                                type="primary"
                                onClick={this.handleNext}
                            >
                                <img src={require('../Assets/Singup/tik-tok-tiktok-logo-app-trend-1.png')} alt="TikTok Ads icon" style={{ height: '24px', marginRight: '10px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column', marginLeft:'8px' }}>
                                    <span style={{ fontSize: '14px' }}>TikTok Ads</span>
                                    <span style={{ color: 'blue', fontSize: '12px', textAlign:'left' }}>Connect</span>
                                </div>
                            </Button>




                        </div>
                    </div>
                );

        }

    }
}

export default Signup;