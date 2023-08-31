import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Assets/CSS/Flows/Flows.css";
import {removeFlow,} from '../../Redux/FlowsSlice';
import axios from "axios";

const FlowDeleteButton = ({ id }) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        try {
            // Get the token from localStorage
            const token = localStorage.getItem('accessToken'); // Replace with the actual key you're using

            console.log(token);
            // Create headers with the token
            const headers = {
                Authorization: `Bearer ${token}`
            };

            // Make the API call to delete the flow
            const response = await axios.post(
                `http://localhost:4000/api/flowdelete/${id}`,
                null,
                {headers},
            );

            // If the API call is successful, dispatch the removeFlow action
            if (response.status === 200) {
                dispatch(removeFlow(id));
            }

            handleClose(); // Close the modal
        } catch (error) {
            console.error('Error deleting flow:', error);
            // Handle error here, e.g., show an error message
        }
    };

    return (
        <>
            <button
                className={"flow-delete-button"}
                style={{
                    height: 20,
                    width: 20,
                    border: "none",
                    backgroundColor: "transparent",
                    padding: 0,
                    marginLeft: 5,
                }}
                onClick={handleShow}
            >
                <img
                    src={require("../../Assets/Flows Assets/TrashIcon.png")}
                    className="button-icon"
                    alt="delete icon"
                    height="17"
                    width="17"
                />
            </button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Flow</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you really want to delete this flow? This process cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FlowDeleteButton;
