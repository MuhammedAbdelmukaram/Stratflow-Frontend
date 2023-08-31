import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MissingPropertiesModal = ({ showMissingPropertiesModal, closeMissingPropertiesModal }) => {
    return (
        <Modal show={showMissingPropertiesModal} onHide={closeMissingPropertiesModal}>
            <Modal.Header closeButton>
                <Modal.Title>Missing values</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Some rules or actions have missing values. Please provide all required properties before activating the flow.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeMissingPropertiesModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MissingPropertiesModal;
