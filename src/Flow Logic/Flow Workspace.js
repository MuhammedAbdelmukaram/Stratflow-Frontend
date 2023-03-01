import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import IfRule from './Button Components/If Rule';
import '../Assets/CSS/Flow Logic/Flow Workspace.css';
import ThreeButtonMenu from "./If Rule Components/Three Button Menu";
import IfVisualPart from "./If Rule Components/If Visual Part";
import MetricMenu from "./If Rule Components/Metric Menu";
import Sign from "./If Rule Components/Sign";
import InputField from "./If Rule Components/Input Field";
import InputWithToggle from "./If Rule Components/Input Field";
import AnalyticsStatsBar from "./Flow Header Components/AnalyticsStatsBar";
import LineCircleLine from "./Button Components/Line Circle Line";
import Start from "./Button Components/Start";

const FlowWorkspace = (props) => {
    const [rules, setRules] = useState([]);

    const [{ isOver }, drop] = useDrop({
        accept: 'IF_RULE',
        drop: (item, monitor) => {
            const newRule = (
                <IfRule key={rules.length} id={item.id} dropped={true} fromSidebar={false} placement="VERTICAL" />
            );
            setRules([...rules, newRule]);

        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    const backgroundColor = isOver ? 'lightgreen' : 'white';

    // Group the rules by their placement type
    const rulesByPlacement = rules.reduce((acc, rule) => {
        const placement = rule.props.placement || 'VERTICAL';
        if (!acc[placement]) {
            acc[placement] = [];
        }
        acc[placement].push(rule);
        return acc;
    }, {});

    const [showAnalytics, setShowAnalytics] = useState(false);

    const handleAnalyticsClick = () => {
        setShowAnalytics(!showAnalytics);
    }


    return (
        <div
            ref={drop}
            style={{
                backgroundColor,
                border: '1px solid black',
                marginTop: 10,
                padding: 10,
                width: '85vw',
            }}
        >
            <Start />

            <LineCircleLine />

            {/* Render the rules vertically */}
            {rulesByPlacement['VERTICAL']?.map(rule => (
                <div key={rule.key} style={{  }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            width: '480px',
                            height: '60px',
                            padding: '',
                            border: '1px solid black',
                            boxShadow: '1px 3px 8px 1px rgba(0,0,0,0.24)',
                            borderRadius: 4,
                        }}
                    >
                        <IfVisualPart />
                        <MetricMenu />
                        <Sign />
                        <InputWithToggle />
                        <ThreeButtonMenu key={rule.key} rule={rule} />

                    </div>


                    <AnalyticsStatsBar
                        showAnalytics={showAnalytics}
                        handleAnalyticsClick={handleAnalyticsClick}
                        key={rule.id}
                    >
                        {/* Include the analytics paragraph here */}
                        {showAnalytics && (
                            <p>This is the analytics paragraph for element {rule.key}.</p>
                        )}
                    </AnalyticsStatsBar>
                    <LineCircleLine />

                </div>

            ))}

            {/* Render the rules horizontally */}
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                {rulesByPlacement['HORIZONTAL']?.map(rule => (
                    <div key={rule.key} style={{ marginRight: 10, display:"flex", flexDirection:"column" }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                width: '480px',
                                height: '60px',
                                padding: '',
                                border: '1px solid black',
                                boxShadow: '1px 3px 8px 1px rgba(0,0,0,0.24)',
                                borderRadius: 4,
                            }}
                        >
                            <IfVisualPart />
                            <MetricMenu />
                            <Sign />
                            <InputWithToggle />
                            <ThreeButtonMenu key={rule.key} rule={rule} />


                        </div>

                        <AnalyticsStatsBar
                            showAnalytics={showAnalytics}
                            handleAnalyticsClick={handleAnalyticsClick}
                            key={rule.id}
                        >
                            {/* Include the analytics paragraph here */}
                            {showAnalytics && (
                                <p>This is the analytics paragraph for element {rule.key}.</p>
                            )}
                        </AnalyticsStatsBar>



                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                <button onClick={handleAnalyticsClick}>
                    {showAnalytics ? "Hide Analytics" : "Show Analytics"}
                </button>
            </div>

        </div>
    );
};

export default FlowWorkspace;

//<p style={{ margin: 0, fontSize: 14 }}>If Rule {rule.key}</p>