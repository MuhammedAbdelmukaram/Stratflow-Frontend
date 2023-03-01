import React from 'react';
import IfRule from "./Button Components/If Rule";
import IncreaseBudget from "./Button Components/Increase Budget";
import DecreaseBudget from "./Button Components/Decrease Budget";

const FlowSidebar = () => {
    return (
        <div
        style={{
            backgroundColor: "#f5f5f5",
            borderRight: "1px solid #e8e8e8",
            height: "95vh",
            width: "10vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
        >

            <IfRule fromSidebar={true} />
            <IncreaseBudget />
            <DecreaseBudget />


        </div>
    );
};

export default FlowSidebar;