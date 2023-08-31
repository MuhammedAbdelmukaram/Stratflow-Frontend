import React from 'react';
import IfVisualPart from './If Rule Sub-Components/If Visual Part';
import MetricMenu from './If Rule Sub-Components/Metric Menu';
import Sign from './If Rule Sub-Components/Sign';
import InputWithToggle from './If Rule Sub-Components/Input Field';
import ThreeButtonMenu from './If Rule Sub-Components/Three Button Menu';
import AnalyticsStatsBar from './If Rule Sub-Components/AnalyticsStatsBar';
import LineCircleLine from './If Rule Sub-Components/Line Circle Line';
import CircleOnRight from "./If Rule Sub-Components/CircleOnRight";
import {useDrop} from "react-dnd";
import LineCircleLineHorizontal from "./If Rule Sub-Components/Line Circle Line Horizontal";


const IfRuleComponent = ({ rule, showAnalytics, rightSide, bottomSide, onDelete, handleDrop, isORchild, updateSignValue, updateNodeValue, updateNodePercentage, updateNodeMetric, nodeID, nodeValue, nodeSign, nodeMetric, nodePercentage, hasOrChild }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ["IF_RULE", "INCREASE_BUDGET", "DECREASE_BUDGET", "NOTIFY", "PAUSE"],
        drop: (item, monitor) => handleDrop(item, monitor.getItemType(), rule.id, false),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    const [{ isOverOR }, dropOR] = useDrop({
        accept: ["IF_RULE"],
        drop: (item, monitor) => handleDrop(item, monitor.getItemType(), rule.id, true),
        collect: (monitor) => ({
            isOverOR: monitor.isOver()
        })
    });


    return (
        <div>
            <div
                key={rule.id}
                className="3. Wrapper"
                style={{ boxSizing: "border-box", display: "contents" }}
            >
                <div style={{ display: "flex" }}>
                    {isORchild ? (
                        <div
                            ref={dropOR}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "#fff",
                                width: "480px",
                                height: "60px",
                                padding: "",
                                border: "1px solid black",
                                boxShadow: "1px 3px 8px 1px rgba(0,0,0,0.24)",
                                borderRadius: 4,
                            }}
                        >
                            <IfVisualPart />
                            <MetricMenu updateNodeMetric={updateNodeMetric} nodeMetric={nodeMetric} nodeID={nodeID}/>
                            <Sign updateSignValue={updateSignValue} nodeID={nodeID}/>
                            <InputWithToggle updateNodeValue={updateNodeValue} updateNodePercentage={updateNodePercentage} nodeID={nodeID} nodePercentage={nodePercentage} />
                            <ThreeButtonMenu rule={rule} onDelete={onDelete} />
                        </div>
                    ) : (
                        <div
                            ref={drop}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "#fff",
                                width: "480px",
                                height: "60px",
                                padding: "",
                                border: "1px solid black",
                                boxShadow: "1px 3px 8px 1px rgba(0,0,0,0.24)",
                                borderRadius: 4,
                            }}
                        >

                            <IfVisualPart />
                            <MetricMenu updateNodeMetric={updateNodeMetric} nodeMetric={nodeMetric} nodeID={nodeID}/>
                            <Sign updateSignValue={updateSignValue} nodeID={nodeID} nodeSign={nodeSign}/>
                            <InputWithToggle updateNodeValue={updateNodeValue} updateNodePercentage={updateNodePercentage} nodeID={nodeID} nodeValue={nodeValue}  />
                            <ThreeButtonMenu rule={rule} onDelete={onDelete} />
                        </div>
                    )}
                    <div ref={dropOR}>
                        {hasOrChild(rule) ? (
                            <LineCircleLineHorizontal isOver={isOverOR} />
                        ) : (
                            <CircleOnRight isOver={isOverOR} />
                        )}
                    </div>
                </div>
                {showAnalytics && <AnalyticsStatsBar showAnalytics={showAnalytics} key={rule.id} />}
                <LineCircleLine isOver={isOver} bottomSide={drop} />
            </div>
        </div>
    );
};


export default IfRuleComponent;
