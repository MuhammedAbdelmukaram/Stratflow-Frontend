import React, {useEffect, useState} from 'react';
import FlowHeader from "./Flow Header";
import FlowSidebar from "./Flow Sidebar";
import FlowWorkspace from "./Flow Workspace";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useParams} from "react-router-dom";
import axios from "axios";
import Loader from "../Common/Loader";
import Modal from "react-bootstrap/Modal";
import InstructionModal from "./Flow Parrent Components/Instruction Modal";


const FlowLogicParent = () => {

    const { flowId } = useParams();

    const [showAnalytics, setShowAnalytics] = useState(false);
    const [selectedAdGroupIds, setSelectedAdGroupIds] = useState([]);
    const [modalOpen, setModalOpen] = useState(true); // State for controlling the modal
    const [state, setState] = useState(null); // Initialize state as null
    const [loading, setLoading] = useState(true); // Add loading state


    useEffect(() => {
        // Fetch the initial data for the flow from the backend
        const fetchFlowData = async () => {
            try {
                setLoading(true); // Set loading to true while fetching data

                // Get the token from localStorage
                const token = localStorage.getItem('accessToken');

                // Create headers with the token
                const headers = {
                    Authorization: `Bearer ${token}`
                };

                const response = await axios.get(`http://localhost:4000/api/flows/${flowId}`, { headers }); // Adjust the API endpoint
                const flowData = response.data; // Assuming the response contains the flow data

                console.log("hey" + response.data);

                setState(flowData); // Update the state with the fetched data
                setLoading(false); // Set loading to false once data is loaded
            } catch (error) {
                console.error('Error fetching flow data:', error);
                setLoading(false); // Set loading to false even if there's an error
            }
        };

        fetchFlowData(); // Call the function to fetch data when the component mounts
    }, [flowId]);

    useEffect(() => {
        // Open the modal when the component loads
        setModalOpen(true);
    }, []);


    if (loading) {
        return <Loader />; // Render the Loader component while loading
    }
    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <FlowHeader
                    style={{ flexBasis: '100%', position:"sticky" }}
                    showAnalytics={showAnalytics}
                    setShowAnalytics={setShowAnalytics}
                    state={state}
                    selectedAdGroupIds={selectedAdGroupIds}
                    setSelectedAdGroupIds={setSelectedAdGroupIds}
                />



                <DndProvider backend={HTML5Backend}>
                    <InstructionModal show={modalOpen} onHide={() => setModalOpen(false)}/>
                    <FlowSidebar style={{ flex: '0 0 300px' }} /> {/* Fixed width of 300px */}
                    <div style={{ flex: '1', overflowX: 'auto' }}>
                        <FlowWorkspace showAnalytics={showAnalytics} state={state} setState={setState} />
                    </div>
                </DndProvider>


            </div>
        </div>
    );
};

export default FlowLogicParent;
