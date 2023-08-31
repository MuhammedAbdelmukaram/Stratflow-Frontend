import React, {useCallback, useEffect, useState} from 'react';
import '../Assets/CSS/Flow Logic/Flow Workspace.css';
import Start from "./Sidebar Button Components/Start";
import getRuleComponent from "./Get Rule Component";
import zoomInIcon from "../Assets/FlowLogic Assets/zoom in icon.png"
import zoomOutIcon from "../Assets/FlowLogic Assets/zoom out icon.png"
const FlowWorkspace = (props) => {

    const [zoomLevel, setZoomLevel] = useState(1);

    const [nextId, setNextId] = useState(1);

    const { state, setState } = props;

    useEffect(() => {

        const findLatestId = (node) => {
            let latestId = 0;

            if (Number(node.id) > latestId) {
                latestId = Number(node.id);
            }

            if (node.ANDchild && node.ANDchild.length > 0) {
                node.ANDchild.forEach((childNode) => {
                    const childLatestId = findLatestId(childNode);
                    if (childLatestId > latestId) {
                        latestId = childLatestId;
                    }
                });
            }

            if (node.ORchild && node.ORchild.length > 0) {
                node.ORchild.forEach((childNode) => {
                    const childLatestId = findLatestId(childNode);
                    if (childLatestId > latestId) {
                        latestId = childLatestId;
                    }
                });
            }

            return latestId;
        };

        const latestId = findLatestId(state.rootNode);

        setNextId(latestId + 1); // Set the nextId to the latest ID + 1
    }, [state]);


    const handleDrop = useCallback((item, componentType, parentNodeId, isORchild) => {
        let newNode;

        // Check the type of the dropped component and create the appropriate node
        if (componentType === "IF_RULE") {
            newNode = {
                id: `${nextId}`,
                name: `${isORchild ? 'orChild' : 'andChild'} ${nextId}`,
                metric: "",
                sign: "", // Updated sign value
                value: "",
                percentage: false,
                type: componentType,
                operation: isORchild ? 'or' : 'and',
                ANDchild: [],
                ORchild: []
            };
        } else if (
            componentType === "INCREASE_BUDGET" ||
            componentType === "DECREASE_BUDGET"
        ) {
            newNode = {
                id: `${nextId}`,
                type: componentType,
                value: "",
                percentage: false
            };
        } else if (
            componentType === "PAUSE"
        ) {
            newNode = {
                id: `${nextId}`,
                type: componentType,
                value: "Pause",
            };
        }

        const updatedState = { ...state }; // Create a copy of the current state

        // Find the parent node with the specified ID
        const findParentNode = (node, parentId) => {
            if (node.id === parentId) {
                return node;
            }
            if (node.ANDchild && node.ANDchild.length > 0) {
                for (let i = 0; i < node.ANDchild.length; i++) {
                    const childNode = node.ANDchild[i];
                    const foundNode = findParentNode(childNode, parentId);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }
            if (node.ORchild && node.ORchild.length > 0) {
                for (let i = 0; i < node.ORchild.length; i++) {
                    const childNode = node.ORchild[i];
                    const foundNode = findParentNode(childNode, parentId);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }
            return null;
        };

        const parentNode = findParentNode(updatedState.rootNode, parentNodeId);

        // If a parent node is found, insert the new node
        if (parentNode) {
            if (isORchild) {
                // Move the existing ORchild of the parent node to the new node
                newNode.ORchild = parentNode.ORchild;
                // Update the parent node's ORchild to contain only the new node
                parentNode.ORchild = [newNode];
            } else {
                // Move the existing ANDchild of the parent node to the new node
                newNode.ANDchild = parentNode.ANDchild;
                // Update the parent node's ANDchild to contain only the new node
                parentNode.ANDchild = [newNode];
            }
        }

        setNextId(nextId + 1); // Update the nextId for the next node

        setState(updatedState); // Update the state with the modified hierarchy
    }, [state, nextId]);









    useEffect(() => {
        console.log('Current state:', JSON.stringify(state, null, 2));
    }, [state]);



    const handleDelete = (nodeId) => {
        const newState = { ...state };

        const findNode = (node, nodeId) => {
            if (node.id === nodeId) {
                return node;
            }

            if (node.ANDchild) {
                for (let i = 0; i < node.ANDchild.length; i++) {
                    const childNode = node.ANDchild[i];
                    const foundNode = findNode(childNode, nodeId);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }

            if (node.ORchild) {
                for (let i = 0; i < node.ORchild.length; i++) {
                    const childNode = node.ORchild[i];
                    const foundNode = findNode(childNode, nodeId);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }

            return null;
        };

        const findParent = (parent, nodeId) => {
            if (parent.ANDchild) {
                for (let i = 0; i < parent.ANDchild.length; i++) {
                    const child = parent.ANDchild[i];
                    if (child.id === nodeId) {
                        return parent;
                    }
                    const found = findParent(child, nodeId);
                    if (found) {
                        return found;
                    }
                }
            }

            if (parent.ORchild) {
                for (let i = 0; i < parent.ORchild.length; i++) {
                    const child = parent.ORchild[i];
                    if (child.id === nodeId) {
                        return parent;
                    }
                    const found = findParent(child, nodeId);
                    if (found) {
                        return found;
                    }
                }
            }

            return null;
        };

        const removeNode = (node, parent, childArrayName) => {
            if (parent) {
                const childArray = parent[childArrayName];
                if (childArray) {
                    const index = childArray.findIndex((child) => child.id === node.id);
                    if (index !== -1) {
                        childArray.splice(index, 1);
                    }
                }
            }
        };

        const node = findNode(newState.rootNode, nodeId);
        if (node) {
            const parentNode = findParent(newState.rootNode, nodeId);
            const childArrayName = parentNode.ANDchild && parentNode.ANDchild.some(child => child.id === nodeId)
                ? "ANDchild"
                : "ORchild";

            removeNode(node, parentNode, childArrayName);
        }

        setState(newState);
    };


    const hasOrChild = (node) => {
        if (node.ORchild && node.ORchild.length > 0) {
            return true;
        }
        return false;
    };


    const renderNodes = (node, isORchild = false) => {
        const RuleComponent = getRuleComponent(node);
        const childNodeClassName = isORchild ? "or-child" : "and-child";

        return (

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }} className={`node ${childNodeClassName}`}>
                    {/* Render the parent node */}
                    <div className="node-content">
                        <RuleComponent
                            rule={node}
                            type={node.type}
                            key={node.id}
                            nodeID={node.id}
                            nodeValue={node.value}
                            nodeSign={node.sign}
                            nodeMetric={node.metric}
                            nodePercentage={node.percentage}
                            showAnalytics={props.showAnalytics}
                            hasOrChild={hasOrChild}
                            onDelete={handleDelete}
                            handleDrop={handleDrop}
                            updateSignValue={updateSignValue}
                            updateNodeValue={updateNodeValue}
                            updateNodePercentage={updateNodePercentage}
                            updateNodeMetric={updateNodeMetric}
                            isORchild={isORchild}
                        />
                    </div>

                    {/* Render the "orChild" nodes horizontally */}
                    {node.ORchild && (
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            {node.ORchild.map((childNode) => (
                                <div key={childNode.id} style={{}}>
                                    {renderNodes(childNode, true)}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Render the "andChild" nodes vertically */}
                {node.ANDchild && (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {node.ANDchild.map((childNode) => (
                            <div key={childNode.id} style={{ }}>
                                {renderNodes(childNode)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    /* UTILITY FUNCTIONS */


    const updateSignValue = (nodeId, newSign) => {
        const updatedState = { ...state }; // Create a copy of the current state

        // Find the node with the specified ID
        const findNode = (node) => {
            if (node.id === nodeId) {
                return node;
            }

            if (node.ANDchild && node.ANDchild.length > 0) {
                for (let i = 0; i < node.ANDchild.length; i++) {
                    const childNode = node.ANDchild[i];
                    const foundNode = findNode(childNode);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }

            if (node.ORchild && node.ORchild.length > 0) {
                for (let i = 0; i < node.ORchild.length; i++) {
                    const childNode = node.ORchild[i];
                    const foundNode = findNode(childNode);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }

            return null;
        };

        const nodeToUpdate = findNode(updatedState.rootNode, nodeId);

        if (nodeToUpdate) {
            nodeToUpdate.sign = newSign; // Update the sign value
        }

        setState(updatedState); // Update the state with the modified node
    };



    const updateNodeValue = (nodeId, newValue) => {
        const updatedState = { ...state };

        // Find the node with the specified ID
        const findNode = (node) => {
            if (node.id === nodeId) {
                return node;
            }

            if (node.ANDchild && node.ANDchild.length > 0) {
                for (let i = 0; i < node.ANDchild.length; i++) {
                    const childNode = node.ANDchild[i];
                    const foundNode = findNode(childNode);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }

            if (node.ORchild && node.ORchild.length > 0) {
                for (let i = 0; i < node.ORchild.length; i++) {
                    const childNode = node.ORchild[i];
                    const foundNode = findNode(childNode);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }

            return null;
        };

        const nodeToUpdate = findNode(updatedState.rootNode, nodeId);

        if (nodeToUpdate) {
            nodeToUpdate.value = newValue; // Update the value field
        }

        setState(updatedState); // Update the state with the modified node
    };


    const updateNodePercentage = (nodeId, newPercentage) => {
        const updatedState = { ...state }; // Create a copy of the current state

        // Find the node with the specified ID
        const findNode = (node) => {
            if (node.id === nodeId) {
                return node;
            }

            if (node.ANDchild && node.ANDchild.length > 0) {
                for (let i = 0; i < node.ANDchild.length; i++) {
                    const childNode = node.ANDchild[i];
                    const foundNode = findNode(childNode);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }

            if (node.ORchild && node.ORchild.length > 0) {
                for (let i = 0; i < node.ORchild.length; i++) {
                    const childNode = node.ORchild[i];
                    const foundNode = findNode(childNode);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }

            return null;
        };

        const nodeToUpdate = findNode(updatedState.rootNode, nodeId);

        if (nodeToUpdate) {
            nodeToUpdate.percentage = newPercentage; // Update the percentage field
        }

        setState(updatedState); // Update the state with the modified node
    };


    const updateNodeMetric = (nodeId, newMetric) => {
        const updatedState = { ...state };

        // Find the node with the specified ID
        const findNode = (node) => {
            if (node.id === nodeId) {
                return node;
            }

            if (node.ANDchild && node.ANDchild.length > 0) {
                for (let i = 0; i < node.ANDchild.length; i++) {
                    const childNode = node.ANDchild[i];
                    const foundNode = findNode(childNode);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }

            if (node.ORchild && node.ORchild.length > 0) {
                for (let i = 0; i < node.ORchild.length; i++) {
                    const childNode = node.ORchild[i];
                    const foundNode = findNode(childNode);
                    if (foundNode) {
                        return foundNode;
                    }
                }
            }

            return null;
        };

        const nodeToUpdate = findNode(updatedState.rootNode, nodeId);

        if (nodeToUpdate) {
            nodeToUpdate.metric = newMetric; // Update the metric field
        }

        setState(updatedState); // Update the state with the modified node
    };



    return (
        <div className="flow-workspace">
            <div className="flow-container" style={{marginTop:20, marginLeft:30, transform: `scale(${zoomLevel})`,
                transformOrigin: 'top left'}}>
                <Start />
                {renderNodes(state.rootNode)}
            </div>
            <div className="zoom-controls">
                <button className={"zoom-button"} onClick={() => setZoomLevel(zoomLevel * 0.8)}>
                    <img src={zoomOutIcon} alt="Zoom Out" />
                </button>
                <button className={"zoom-button"} onClick={() => setZoomLevel(zoomLevel * 1.2)}>
                    <img src={zoomInIcon} alt="Zoom In" />
                </button>
            </div>
        </div>
    );
};

export default FlowWorkspace;


