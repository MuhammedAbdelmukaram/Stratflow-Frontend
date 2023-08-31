import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const CreateFlow = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const handleCreateFlow = async () => {
        try {
            const token = localStorage.getItem('accessToken'); // Replace with the actual key you're using

            const headers = {
                Authorization: `Bearer ${token}`
            };

            const response = await axios.post('http://localhost:4000/api/flows/create', {}, { headers });
            const newFlowId = response.data.id;

            navigate(`/flowlogic/${newFlowId}`); // Navigate to the new flow's page
        } catch (error) {
            console.error('Error creating new flow:', error);
        }
    };


    return (
        <>
            <Button className="btn btn-create-flow-button" onClick={handleShow}>
                Create Flow
            </Button>

            <Modal size={"lg"} show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <p className="modal-title">Create Flow</p>
                    <hr className="modal-hr" />
                    <p className="modal-note">
                        NOTE: You can always choose a strategy and tailor it to your need
                    </p>

                    <div className="flex-container">
                        <div>
                            <Button
                                onClick={() => handleCreateFlow()}
                                variant="text"
                                size="small"
                                className="image-button"
                            >
                                <img
                                    src={require("../../Assets/Strategies Assets/CreateScratch.png")}
                                    alt="CreateScratch"
                                    className="image"
                                />
                            </Button>
                            <p className="image-text">From Scratch</p>
                        </div>

                        <div>
                            <Button
                                onClick={() => navigate('../strategies', { replace: true })}
                                variant="text"
                                size="small"
                                className="image-button"
                            >
                                <img
                                    src={require("../../Assets/Strategies Assets/UseStrategy.png")}
                                    alt="CreateScratch"
                                    className="image"
                                />
                            </Button>
                            <p className="image-text">Use Staregies</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CreateFlow;
