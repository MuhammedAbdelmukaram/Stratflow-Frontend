import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import FlowName from './Flow Header Components/FlowName';
import AnalyticsButton from './Flow Header Components/Analytics Button';
import ActivateFlowModal from './Flow Header Components/Activate Flow Modal';
import axios from "axios";
import MissingPropertiesModal from "./Flow Header Components/Missing Properties Modal";

const FlowHeader = (props) => {
    const navigate = useNavigate();
    const [showActivateModal, setShowActivateModal] = useState(false);
    const [showMissingPropertiesModal, setShowMissingPropertiesModal] = useState(false);
    const [showWarningModal, setShowWarningModal] = useState(false); // New state variable
    const [selectedAdGroupIds, setSelectedAdGroupIds] = useState([]);
    const { showAnalytics, setShowAnalytics } = props;


    const { flowId } = useParams();



    const hasActionNodesAtANDLeaf = (node) => {
        if (!node) {
            // If the current node is null, it is not an action node at AND leaf
            return false;
        }

        if (node.type === "ACTION_NODE") {
            return true;
        }

        if (node.type === "IF_RULE" && node.ANDchild) {
            for (const child of node.ANDchild) {
                if (!hasActionNodesAtANDLeaf(child)) {
                    // If any child of ANDchild is not an action node, return false
                    return false;
                }
            }
            // All children of ANDchild are action nodes
            return true;
        }

        return false;
    };

    const checkMissingProperties = (node) => {
        if (!node) {
            // If the current node is null, return false
            return false;
        }

        if (node.type === "IF_RULE") {
            if (!node.metric || !node.sign || !node.value) {
                console.log(`Missing properties for node ${node.id}, ${node.metric} ${node.sign} ${node.value}`);
                return true;
            }
        }

        if (node.type === "INCREASE_BUDGET") {
            if (!node.value) {
                console.log(`Missing properties for node ${node.id}`);
                return true;
            }
        }

        // Recursively check missing properties for child nodes
        if (node.ANDchild) {
            for (const child of node.ANDchild) {
                if (checkMissingProperties(child)) {
                    return true;
                }
            }
        }

        if (node.ORchild) {
            for (const child of node.ORchild) {
                if (checkMissingProperties(child)) {
                    return true;
                }
            }
        }

        // No missing properties found
        return false;
    };



// This function traverses nodes, and first checks for each node whether it has Missing property. At the same time, it
// checks whether it has leaf nodes which are not action

    const traverseNodes = (node) => {
        console.log(`We are at node with id: ${node.id}, type: ${node.type}`);

        // Add a flag to track if a leaf node is found
        let hasLeafNode = false;

        checkMissingProperties(node);

        if (node.ANDchild && node.ANDchild.length > 0) {
            console.log(`Moving to ANDchild nodes of node ${node.id}`);
            for (const childNode of node.ANDchild) {
                if (traverseNodes(childNode)) {
                    hasLeafNode = true;
                }
            }
        }

        if (node.ORchild && node.ORchild.length > 0) {
            console.log(`Moving to ORchild nodes of node ${node.id}`);
            for (const childNode of node.ORchild) {
                if (traverseNodes(childNode)) {
                    hasLeafNode = true;
                }
            }
        }

        // Check if the node is a leaf node (i.e., it has no ANDchild nodes).
        if ((!node.ANDchild || node.ANDchild.length === 0) && node.type === "IF_RULE") {
            console.log(`Leaf node found with id: ${node.id}`);
            hasLeafNode = true;
        }

        return hasLeafNode;
    };

    const activateFlowHandler = () => {
        // Check if there are action nodes at the leaf level before activating the flow
        const hasLeafNode = traverseNodes(props.state.rootNode);
        const hasMissingProperties = checkMissingProperties(props.state.rootNode);

        if (hasLeafNode) {
            setShowWarningModal(true);
        } else if (hasMissingProperties) {
            setShowMissingPropertiesModal(true);
        } else {
            setShowActivateModal(true);
        }
    };


    const handleSaveFlow = async () => {
        try {
            // Extract the data from the rootNode
            const { rootNode } = props.state;

            // Get the token from localStorage
            const token = localStorage.getItem('accessToken'); // Replace with the actual key you're using

            // Create headers with the token
            const headers = {
                Authorization: `Bearer ${token}`
            };

            // Send the rootNode data and flowId to the backend with headers
            const response = await axios.post(
                `http://localhost:4000/api/update-flow/${flowId}`,
                { rootNodeData: rootNode },
                { headers }
            );

            console.log('Flow saved successfully:', response.data);
        } catch (error) {
            console.error('Error saving flow:', error);
        }
    };


    const handleAnalyticsClick = () => {
        setShowAnalytics(!showAnalytics);
    };

    const ArrowDown = {
        width: 500,
        appearance: 'none',
        backLroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px top 50%',
        paddingRight: '30px',
    };


    const closeActivateModalHandler = () => {
        setShowActivateModal(false);
    };

    const closeWarningModalHandler = () => {
        setShowWarningModal(false);
    };

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                backgroundColor: '#313131',
                height: '5vh',
                color: 'white',
            }}
        >
            <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <img
                    src={require('../Assets/NavBar Assets/Stratflow-logo.png')}
                    className="button-icon"
                    alt="edit icon"
                    width="20"
                />


                <button
                    className={'analytics-button'}
                    onClick={handleAnalyticsClick}
                    style={{
                        backgroundColor: '#313131',
                        border: '1px solid white',
                        color: 'white',
                        fontSize: '12px',
                        padding: '5px 10px',
                        borderColor: 'white',
                        marginLeft: "30%",
                        marginRight: '4%',
                    }}
                >
                    <img
                        src={require('../Assets/FlowLogic Assets/FlowAnalytics Icon.png')}
                        className="button-icon"
                        style={{
                            marginRight: '10px',
                        }}
                        alt="edit icon"
                        width="16"
                    />

                    {showAnalytics ? 'Hide Analytics' : 'Show Analytics'}
                </button>

                <button
                    style={{
                        backgroundColor: '#313131',
                        border: '1px solid white',
                        color: 'white',
                        fontSize: '12px',
                        padding: '5px 10px',
                        borderColor: 'white',
                        marginLeft: 'auto',
                        marginRight: '1%',
                    }}
                    onClick={handleSaveFlow}
                >
                    Save Flow
                </button>
                <button
                    style={{
                        backgroundColor: '#06AD85',
                        color: 'white',
                        border: '1px solid white',
                        fontSize: '12px',
                        padding: '5px 10px',
                        borderColor: 'white',
                        marginLeft: '',
                        marginRight: '4%',
                    }}
                    onClick={activateFlowHandler}
                >
                    Activate Flow
                </button>

                <button
                    style={{
                        backgroundColor: '#313131',
                        border: '1px solid white',
                        color: 'white',
                        fontSize: '12px',
                        padding: '5px 10px',
                        borderColor: 'white',
                        justifyContent: 'flex-end',
                        marginRight: '10%',
                    }}
                    onClick={() => navigate('../flows', { replace: true })}
                >
                    Exit
                </button>
            </div>


            <ActivateFlowModal
                state={props.state}
                showModal={showActivateModal}
                closeModalHandler={closeActivateModalHandler}
                selectedAdGroupIds={props.selectedAdGroupIds}
                setSelectedAdGroupIds={props.setSelectedAdGroupIds}
            />


            <MissingPropertiesModal
                showMissingPropertiesModal={showMissingPropertiesModal}
                closeMissingPropertiesModal={() => setShowMissingPropertiesModal(false)}
            />



            {/* Warning Modal */}
            <Modal show={showWarningModal} onHide={closeWarningModalHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    There are no action nodes at the leaf level. The flow cannot be activated.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeWarningModalHandler}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default FlowHeader;
