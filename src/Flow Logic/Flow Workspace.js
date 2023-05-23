import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDrop} from 'react-dnd';
import IfRule from './Sidebar Button Components/If Rule';
import '../Assets/CSS/Flow Logic/Flow Workspace.css';
import LineCircleLine from "./If Rule Components/If Rule Sub-Components/Line Circle Line";
import Start from "./Sidebar Button Components/Start";
import IncreaseBudget from "./Sidebar Button Components/Increase Budget";
import DecreaseBudget from "./Sidebar Button Components/Decrease Budget";
import Pause from "./Sidebar Button Components/Pause";
import Notify from "./Sidebar Button Components/Notify";
import getRuleComponent from "./Get Rule Component";


{/*Note to myself, accept:type, and move types into interface enum whatever the name is*/}

const FlowWorkspace = (props) => {
    const [rules, setRules] = useState([]);
    const [isRulesEmpty, setIsRulesEmpty] = useState(true);

    const [state, setState] = useState({
        rootNode: {
            name: "Root Node",
            type: "node",
            children: []
        }
    });


    const handleDrop = useCallback((item, monitor, dropZone) => {
        const index = dropZone ?? state.rootNode.children.length ; /*this should be updated, so when there are children of children and so on,
        it should go.state.rootNode.children.node.children...*/
        let newComponent;

        switch (item.name) {
            case "IF_RULE":
                newComponent = {
                    name: "Child " + (index + 1),
                    type: "node",
                    children: []
                };
                break;
            case "INCREASE_BUDGET":
                newComponent = {
                    name: "Action " + (index + 1),
                    type: "action",
                    children: []
                };
                break;
            // Handle other cases as needed

            default:
                newComponent = null;
                break;
        }

        if (newComponent) {
            setState((prevState) => {
                const parent =
                    index > 0 ? getParentNode(prevState.rootNode, index - 1) : null;
                if (parent && parent.type === "node") {
                    const newChildren = [...parent.children, { ...newComponent }];
                    parent.children = newChildren;
                } else {
                    const newChildren = [
                        ...prevState.rootNode.children.slice(0, index),
                        { ...newComponent },
                        ...prevState.rootNode.children.slice(index)
                    ];
                    prevState.rootNode.children = newChildren;
                }
                console.log("State before returning:", prevState);
                return { ...prevState };
            });

            const draggedItem = monitor.getItem();
            console.log("Dragged item:", draggedItem);
            console.log("Index is:", index);
            console.log("Updated state:", state);
        }
    }, []);
/**/
// Helper function to get the parent node at a given index
    const getParentNode = (node, index) => {
        if (index === 0) {
            return node;
        }
        const parentIndex = index - 1;
        const parentNode = node.children[parentIndex];
        return getParentNode(parentNode, parentIndex);
    };


    const [{ isOver }, drop] = useDrop({
        accept: ["IF_RULE", "INCREASE_BUDGET", "DECREASE_BUDGET", "NOTIFY", "PAUSE"],
        drop: handleDrop,
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    const [{ isFirstRule }, firstRule] = useDrop({
        accept: ["IF_RULE", "INCREASE_BUDGET", "DECREASE_BUDGET", "NOTIFY", "PAUSE"],
        drop: handleDrop,
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });




    {/*THIS KNOWS WHICH ELEMENT WAS DROPPED*/}
    const renderRuleComponent = useCallback(
        (rule, index) => {
        const RuleComponent = getRuleComponent(rule);
        return <RuleComponent
            rule={rule}
            key={rule.key}
            showAnalytics={props.showAnalytics}
            onDrop={(item, monitor) => handleDrop(item, monitor, index)}
            isOver={isOver}
            bottomSide={drop}/>;
    }, [props.showAnalytics, isOver]);








    return (
        <div
            style={{
                backgroundColor:"white",
                border: '1px solid black',
                marginTop: 10,
                padding: 10,
                width: '85vw',
            }}
        >

            <Start allowDrop={isRulesEmpty} reference={drop}/>

            {/* Render the rules vertically */}
            {rules.map((rule) => (
                <div key={rule.key} style={{ boxSizing: "border-box", display: "contents" }}>
                    {renderRuleComponent(rule)}
                </div>
            ))}


        </div>
    );
};



export default FlowWorkspace;


