import React, { useState } from 'react';
import FlowHeader from "./Flow Header";
import FlowSidebar from "./Flow Sidebar";
import FlowWorkspace from "./Flow Workspace";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import InstructionModal from "./Instruction Modal";

const FlowLogicParent = () => {
    const [showAnalytics, setShowAnalytics] = useState(false);

    return (
        <div>
            {/*<InstructionModal />*/}

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <FlowHeader
                    style={{ flexBasis: '100%' }}
                    showAnalytics={showAnalytics}
                    setShowAnalytics={setShowAnalytics}
                />
                <DndProvider backend={HTML5Backend}>
                    <FlowSidebar style={{ flexBasis: '300px' }} />
                    <FlowWorkspace style={{ flexBasis: '100%' }} showAnalytics={showAnalytics} />
                </DndProvider>
            </div>
        </div>
    );
};

export default FlowLogicParent;
