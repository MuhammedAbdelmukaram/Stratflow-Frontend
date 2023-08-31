import React, { useState } from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";
import axios from "axios"; // Import Axios library

const ChangePassword = () => {
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    const handleClose = () => {
        setShow(false);
        setSuccess(false);
        setError(false);
        setPasswordError("");
    };
    const handleShow = () => setShow(true);

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be at least 8 characters long and include at least 1 uppercase letter, 1 number, and 1 special character.');
            return false;
        }
        setPasswordError("");
        return true;
    };

    const handleChangePassword = async () => {
        const currentPassword = document.getElementById("currentPassword").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmNewPassword = document.getElementById("confirmNewPassword").value;

        const token = localStorage.getItem('accessToken');

        // Validate the new password
        if (!validatePassword(newPassword)) {
            return;
        }

        const data = {
            currentPassword,
            newPassword,
            confirmNewPassword,
        };

        try {
            const response = await axios.post('http://localhost:4000/api/change-password', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                setSuccess(response.data.message);
                setError(false);
            } else {
                setError(response.data.error);
                setSuccess(false);
            }
        } catch (error) {
            console.error('Error changing password:', error);
            setError('An error occurred while changing password.');
            setSuccess(false);
        }
    };

    return (
        <>
            <Button style={{ height: 45, backgroundColor: "#06AD85", borderColor: "#06AD85" }} variant="secondary" onClick={handleShow}>
                Change password
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}
                    <Form>
                        <Form.Group className="mb-3" controlId="currentPassword">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control type="password" placeholder="" autoFocus />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="newPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="" onChange={(e) => validatePassword(e.target.value)} />
                            {passwordError && <div className="text-danger">{passwordError}</div>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="confirmNewPassword">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{ backgroundColor: "#06AD85", borderColor: "#06AD85" }} onClick={handleChangePassword}>
                        Change Password
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ChangePassword;
