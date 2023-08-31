import React, { useState } from 'react';
import { Input } from 'antd';
import { Button, Modal } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Assets/CSS/Flows/Flows.css";
import axios from "axios";
import {setFlows} from "../../Redux/FlowsSlice";

const EditButton = ({ id }) => {
    const [show, setShow] = useState(false);
    const [newName, setNewName] = useState('');

    const dispatch = useDispatch();
    const flows = useSelector((state) => state.flows.flows);

    const handleClose = () => {
        setShow(false);
        setNewName('');
    };
    const handleShow = () => setShow(true);
    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleEditFlow = async () => {
        try {
            const token = localStorage.getItem('accessToken'); // Replace with the actual key you're using

            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const response = await axios.post(
                `http://localhost:4000/api/editflow/${id}`,
                { name: newName },
                { headers }
            );

            if (response.status === 200) {
                // Update the flow name in Redux
                const updatedFlows = flows.map((flow) => {
                    if (flow.id === id) {
                        return { ...flow, name: newName };
                    }
                    return flow;
                });
                dispatch(setFlows(updatedFlows));
            }

            handleClose();
        } catch (error) {
            console.error('Error updating flow name:', error);
            // Handle error here, e.g., show an error message
        }
    };

    return (
        <>
            <button
                className={"flow-edit-button"}
                style={{
                    height: 20,
                    width: 20,
                    border: "none",
                    backgroundColor: "transparent",
                    padding: 0,
                }}
                onClick={handleShow}
            >
                <img
                    src={require("../../Assets/Flows Assets/EditIcon.png")}
                    className="button-icon"
                    alt="edit icon"
                    height="20"
                    width="20"
                />
            </button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Flow</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Rename the flow:
                    <Input
                        placeholder="Flow Name"
                        required
                        value={newName}
                        onChange={handleNameChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        style={{ backgroundColor: "#06AD85", borderColor: "#06AD85" }}
                        onClick={handleEditFlow}
                    >
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditButton;
