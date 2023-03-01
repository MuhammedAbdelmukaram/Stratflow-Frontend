import React, {Component} from 'react';
import FlowHeader from "./Flow Header";
import FlowSidebar from "./Flow Sidebar";
import FlowWorkspace from "./Flow Workspace";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

class FlowLogicParrent extends Component {
    render() {
        return (

            <div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <FlowHeader style={{ flexBasis: '100%' }} />
                    <DndProvider backend={HTML5Backend}>
                    <FlowSidebar style={{ flexBasis: '300px' }} />
                    <FlowWorkspace style={{ flexBasis: '100%' }} />
                    </DndProvider>
                </div>
            </div>



        );
    }
}

export default FlowLogicParrent;