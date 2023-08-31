import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const WelcomeModal = ({ show, onHide }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        } else {
            onHide();
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <h4>Step 1: Introduction</h4>
                        <p>Welcome to the FlowLogicParent Component! This is an arbitrary modal with multiple steps.</p>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h4>Step 2: Second Step</h4>
                        <p>This is the second step of the modal.</p>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h4>Step 3: Third Step</h4>
                        <p>Almost there! This is the third step of the modal.</p>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <h4>Step 4: Final Step</h4>
                        <p>You've reached the final step! Click "Let's go" to close the modal.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Modal size="xl" show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Welcome to the Step-by-Step Modal!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{renderStepContent()}</Modal.Body>
            <Modal.Footer>
                {currentStep < 4 ? (
                    <button onClick={handleNext}>Next</button>
                ) : (
                    <button onClick={onHide}>Let's go</button>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default WelcomeModal;
