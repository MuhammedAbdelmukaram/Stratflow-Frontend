import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {Input} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Assets/CSS/Flows/Flows.css";

const DuplicateButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                className={"flow-duplicate-button"}
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
                    src={require("../../Assets/Flows Assets/DuplicateIcon.png")}
                    className="button-icon"
                    alt="duplicate icon"
                    height="20"
                    width="20"
                />
            </button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Duplicate Flow</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Name of duplicated flow:
                    <Input placeholder="Flow Name" required />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        style={{ backgroundColor: "#06AD85", borderColor: "#06AD85" }}
                        onClick={handleClose}
                    >
                        Duplicate
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DuplicateButton;
