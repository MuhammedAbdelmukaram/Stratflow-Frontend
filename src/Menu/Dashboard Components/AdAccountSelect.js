import React from 'react';
import { Form } from 'react-bootstrap';


const AdAccountSelect = () => {
    const ArrowDown = {
        width: 500,
        appearance: "none",
        backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px top 50%",
        paddingRight: "30px"
    };

    return (
        <Form.Group style={{ marginTop: 20, display: 'flex', flexDirection: 'column' }} controlId="formSelectTimezone">
            <Form.Label style={{ textAlign: 'left' }}>Ad account:</Form.Label>
            <Form.Control style={ArrowDown} as="select">
                <option>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>All Ad Accounts</p>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <span style={{ marginRight: '0.5rem' }}></span>
                            <span></span>
                        </div>
                    </div>
                </option>
                <option>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>Stratflow Ad Account</p>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <span style={{ marginRight: '0.5rem' }}>User:</span>
                            <span>user5844887010046</span>
                        </div>
                    </div>
                </option>
                <option>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>Stratflow Ad Account 2</p>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <span style={{ marginRight: '0.5rem' }}>User:</span>
                            <span>user5844887010046</span>
                        </div>
                    </div>
                </option>
                <option>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>Stratflow Ad Account 3</p>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <span style={{ marginRight: '0.5rem' }}>User:</span>
                            <span>user5844887010046</span>
                        </div>
                    </div>
                </option>
                {/* Add additional ad accounts here, make them be added dynamically, passed as props into a component*/}
            </Form.Control>
        </Form.Group>
    );
};

export default AdAccountSelect;