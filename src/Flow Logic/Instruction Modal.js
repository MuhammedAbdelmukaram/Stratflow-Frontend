import React, { useState, useEffect } from 'react';

const InstructionModal = () => {
    const [showModal, setShowModal] = useState(true);

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        setShowModal(true);
    }, []);

    return (
        <>
            {showModal && (
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 999 }}>
                    <div style={{ backgroundColor: '#fff', padding: '1rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%' }}>
                        <h2>Instructions:</h2>
                        <p>Here are some instructions on how to use the components:</p>
                        <ul>
                            <li>Flow Header: This component displays the header of the flow.</li>
                            <li>Flow Sidebar: This component displays the sidebar of the flow.</li>
                            <li>Flow Workspace: This component displays the workspace of the flow.</li>
                        </ul>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default InstructionModal;