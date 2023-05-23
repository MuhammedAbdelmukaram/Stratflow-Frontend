import React from 'react';
import IfVisualPart from './If Rule Sub-Components/If Visual Part';
import MetricMenu from './If Rule Sub-Components/Metric Menu';
import Sign from './If Rule Sub-Components/Sign';
import InputWithToggle from './If Rule Sub-Components/Input Field';
import ThreeButtonMenu from './If Rule Sub-Components/Three Button Menu';
import AnalyticsStatsBar from './If Rule Sub-Components/AnalyticsStatsBar';
import LineCircleLine from './If Rule Sub-Components/Line Circle Line';
import CircleOnRight from "./If Rule Sub-Components/CircleOnRight";

const IfRuleComponent = ({ rule, showAnalytics, isOver, rightSide, bottomSide }) => {
    return (
        <div>
            <div key={rule.key}
                 className={"3. Wrapper"}
                 style={{ boxSizing: "border-box", display: "contents" }}>

                <div style={{display:"flex"}}>
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
                        <CircleOnRight isOver={isOver}/>
                    </div>

                    {rightSide && (
                        <div
                            ref={rightSide}
                            className={"rightSide"} style={{backgroundColor:"red", width:150}}>
                        </div>
                    )}


                </div>

                {showAnalytics && (
                    <AnalyticsStatsBar
                        showAnalytics={showAnalytics}
                        key={rule.id}
                    />
                )}
                <LineCircleLine isOver={isOver} bottomSide={bottomSide}/>
            </div>
        </div>


    );
};

export default IfRuleComponent;