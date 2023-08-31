import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Assets/CSS/Flows/Flows.css";
import {Switch} from 'antd';
import {setFlows,} from '../../Redux/FlowsSlice';
import axios from "axios";

const ChangeStatusButton = ({ id, initialStatus }) => {
    const [show, setShow] = useState(false);
    const [flowStatus, setFlowStatus] = useState(initialStatus);
    const dispatch = useDispatch();
    const flows = useSelector((state) => state.flows.flows);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChangeStatus = async () => {
        try {
            // Get the token from localStorage
            const token = localStorage.getItem('accessToken'); // Replace with the actual key you're using

            // Create headers with the token
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            // Make the API call to change the flow status
            const response = await axios.post(
                `http://localhost:4000/api/flowchangestatus/${id}`,
                initialStatus,
                { headers }
            );

            // If the API call is successful, update the local status
            if (response.status === 200) {
                dispatch(
                    setFlows(
                        flows.map((flow) => {
                            if (flow.id === id) {
                                return { ...flow, active: !flow.active };
                            }
                            return flow;
                        })
                    )
                );
                setFlowStatus(!flowStatus);
            }

            handleClose(); // Close the modal
        } catch (error) {
            console.error('Error updating flow:', error);
            // Handle error here, e.g., show an error message
        }
    };

    useEffect(() => {
        console.log(flowStatus);
    }, [flowStatus]);

    return (
        <>
            <div className="flow-delete-button">
                <Switch
                    className="flow-status-switch"
                    style={{
                        backgroundColor: flowStatus ? '#06AD85' : '#3A3A3A',
                        marginRight: '30px',
                    }}
                    checked={flowStatus}
                    onChange={handleShow}
                />
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Flow Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you really want to change the status of this flow?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        style={{ backgroundColor: '#06AD85', borderColor: '#06AD85' }}
                        onClick={handleChangeStatus}
                    >
                        Change Status
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ChangeStatusButton;

