import React from 'react';
import IfRule from "./Sidebar Button Components/If Rule";
import IncreaseBudget from "./Sidebar Button Components/Increase Budget";
import DecreaseBudget from "./Sidebar Button Components/Decrease Budget";
import Pause from "./Sidebar Button Components/Pause";
import Notify from "./Sidebar Button Components/Notify";

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
            <IncreaseBudget fromSidebar={true}/>
            <DecreaseBudget fromSidebar={true}/>
            <Pause fromSidebar={true}/>
            <Notify fromSidebar={true}/>

        </div>
    );
};

export default FlowSidebar;