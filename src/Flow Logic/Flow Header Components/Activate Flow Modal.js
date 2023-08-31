import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import FlowName from './FlowName';
import { useDispatch, useSelector } from "react-redux";
import { addFlow } from "../../Redux/FlowsSlice";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import CampaignsTab from './CampaignsTab'; // Import the CampaignsTab component

const ArrowDown = {
    width: 500,
    appearance: "none",
    backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px top 50%",
    paddingRight: "30px"
};

const ActivateFlowModal = ({ showModal, closeModalHandler, state, selectedAdGroupIds, setSelectedAdGroupIds, }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { flowId } = useParams();
    const flows = useSelector(state => state.flows.flows);

    // Add a state to track whether the data has been fetched from the backend
    const [dataFetched, setDataFetched] = useState(false);

    // Add state to store the campaigns and their ad groups
    const [campaignsData, setCampaignsData] = useState({});

    // Use useEffect to make the request to the backend when the modal is opened
    useEffect(() => {
        // Check if the data has been fetched already to prevent duplicate requests
        if (!dataFetched && showModal) {
            handleGetDataToBackend();
            setDataFetched(true); // Set dataFetched to true to avoid duplicate requests
        }
    }, [showModal, dataFetched]);

    const handleGetDataToBackend = async () => {
        const backendUrl = 'http://localhost:4000/api/adgroup-campaign-ids';

        try {
            const response = await axios.get(backendUrl);
            console.log('Received data from the backend:', response.data);

            // Set the campaignsData state with the data received from the backend
            setCampaignsData(response.data.adGroupIds.reduce((acc, adGroup) => {
                if (!acc[adGroup.campaign_id]) {
                    acc[adGroup.campaign_id] = {
                        campaign_id: adGroup.campaign_id,
                        campaign_name: adGroup.campaign_name,
                        adGroups: []
                    };
                }
                acc[adGroup.campaign_id].adGroups.push(adGroup);
                return acc;
            }, {}));

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const sendDataToBackend = async () => {


        const token = localStorage.getItem('accessToken'); // Get the token from localStorage
        console.log(token);
        const headers = {
            'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        };

        try {
            const response = await axios.post(
                `http://localhost:4000/api/activate-flow/${flowId}`,
                state,
                { headers });
            console.log('Data sent to the backend:', response.data);
        } catch (error) {
            console.error('Error sending data to the backend:', error);
        }
    };


    const newFlow = {
        group: 1,
        id: Math.max(...flows.map(flow => flow.id)) + 1,
        name: "New Flow",
        active: true,
        triggered: false,
    };

    console.log(state);

    const activateFlow = () => {
        dispatch(addFlow(newFlow));
        navigate('../flows', { replace: true });
    };

    return (
        <Modal show={showModal} onHide={closeModalHandler} size={"xl"}>
            <Modal.Header closeButton>
                <FlowName />
            </Modal.Header>
            <Modal.Body>
                <Form.Group
                    style={{ marginTop: 20, display: 'flex', flexDirection: 'column' }}
                    controlId="formSelectTimezone"
                >
                    <Form.Label style={{ textAlign: 'left' }}>Ad account:</Form.Label>
                    <Form.Control style={ArrowDown} as="select">
                        {/* Add ad account options here */}
                    </Form.Control>
                </Form.Group>

                {/* Display the CampaignsTab component with selectedAdGroupIds and setSelectedAdGroupIds props */}
                <CampaignsTab
                    campaignsData={campaignsData}
                    selectedAdGroupIds={selectedAdGroupIds}
                    setSelectedAdGroupIds={setSelectedAdGroupIds}
                />
            </Modal.Body>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 20
                }}
            >
                <div style={{}}>
                    <p style={{ fontWeight: "bold" }}>
                        RULE
                    </p>
                    <p>
                        If *Metric* *Sign* *Value*
                        <br />
                        If *Metric* *Sign* *Value*
                        <br />
                        If *Metric* *Sign* *Value*
                        <br />
                        If *Metric* *Sign* *Value*
                        <br />
                    </p>
                </div>

                <div
                    style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
                >
                    <Form.Check style={{ textAlign: "left", fontSize: 12 }} type="checkbox" label="Notify me when flow triggers" />
                    <Button variant="primary" style={{backgroundColor:"#06ad85", borderColor:"#06ad85"}} onClick={sendDataToBackend}>
                        Activate
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default ActivateFlowModal;
