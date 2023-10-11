import React, {useEffect, useState} from 'react';
import {Col, Container, OverlayTrigger, Pagination, Row, Tooltip} from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Assets/CSS/Flows/Flows.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage, setFilter, setFlows, setSearchTerm, setSelectedGroup,} from '../Redux/FlowsSlice';
import axios from "axios";
import EditButton from "./Flows Components/Edit Button";
import DuplicateButton from "./Flows Components/Duplicate Button";
import FlowDeleteButton from "./Flows Components/Delete Button";
import CreateFlow from "./Flows Components/Create Flow";
import ChangeStatusButton from "./Flows Components/Change Status";


const Flows = () => {



    const navigate = useNavigate();

    const dispatch = useDispatch();

    const searchTerm = useSelector(state => state.flows.searchTerm);
    const filter = useSelector(state => state.flows.filter);
    const flows = useSelector(state => state.flows.flows);
    const selectedGroup = useSelector(state => state.flows.selectedGroup);
    const currentPage = useSelector(state => state.flows.currentPage);


    useEffect(() => {
        // Get the token from localStorage
        const token = localStorage.getItem('accessToken'); // Replace with the actual key you're using
        console.log(token);
        // Create headers with the token
        const headers = {
            Authorization: `Bearer ${token}`
        };

        // Make API request to fetch flows from backend
        axios.get('http://localhost:4000/api/flows', { headers }) // Update the endpoint to match your backend API
            .then(response => {
                const fetchedFlows = response.data; // Assuming the API response is an array of flows

                console.log(response.data);

                const formattedFlows = fetchedFlows.map(apiFlow => ({
                    group: apiFlow.rootNode.group,
                    id: apiFlow._id,
                    name: apiFlow.rootNode.name,
                    active: apiFlow.rootNode.status === 'active',
                    triggered: apiFlow.rootNode.triggered,
                    // Add other properties you need to map here
                }));

                console.log(formattedFlows);
                dispatch(setFlows(formattedFlows));
            })
            .catch(error => {
                console.error('Error fetching flows:', error);
            });
    }, []);


    const handleFlowClick = (flowId) => {
        // For example, you can navigate to the flow details page
        navigate(`/flowlogic/${flowId}`); // Update the URL pattern according to your application
    };

    const filteredFlows = flows.filter((flow) => {
        if (selectedGroup === null) {
            if (filter === 'All rules') {
                return flow;
            } else if (filter === 'Active') {
                return flow.active;
            } else if (filter === 'Triggered') {
                return flow.triggered;
            }
        } else {
            if (flow.group === selectedGroup) {
                if (filter === 'All rules') {
                    return flow;
                } else if (filter === 'Active') {
                    return flow.active;
                } else if (filter === 'Triggered') {
                    return flow.triggered;
                }
            }
        }
    });

    const searchedFlows = filteredFlows.filter((flow) =>
        flow.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const [flowsPerPage] = useState(15);

    const indexOfLastFlow = currentPage * flowsPerPage;
    const indexOfFirstFlow = indexOfLastFlow - flowsPerPage;
    const currentFlows = searchedFlows.slice(indexOfFirstFlow, indexOfLastFlow);

    const handleClick = (pageNum) => {
        dispatch(setCurrentPage(pageNum));
    };


    const handleFilterChange = (value) => {
        dispatch(setFilter(value));
        dispatch(setCurrentPage(1)); // Reset the current page when filter changes
    };


    const handleSearchChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
        dispatch(setSelectedGroup(null)); // Reset the selected group when search term changes
        dispatch(setCurrentPage(1));
    };

    const handleGroupFilterChange = (group) => {
        dispatch(setSelectedGroup(group));
        dispatch(setCurrentPage(1)); // Reset the current page when group filter changes
    };

    const tooltip = (
        <Tooltip id="filter-tooltip"
        style={{fontSize:12}}>
           Triggered in the past 24 hours
        </Tooltip>
    );

    const uniqueGroups = [...new Set(flows.map(flow => flow.group))];


    return (
        <Container>
            <Row >
            <Col style={{maxWidth:140, minHeight:"100vh", borderRight:"1px solid #E5E5E5"}}>
                <h4 style={{marginTop:20}}>Groups</h4>
                <ButtonGroup toggle className="mb-2"
                style={{display:"flex", flexDirection:"column"}}>
                    <ToggleButton
                        style={{
                            backgroundColor:"transparent",
                            color:"black",
                            border:"none",
                            width:"100%",
                            textAlign:"left"
                        }}
                        type="radio"
                        variant="default"
                        name="groupFilter"
                        value="all"
                        checked={selectedGroup === null}
                        onClick={() => handleGroupFilterChange(null)}
                    >
                        All flows
                    </ToggleButton>
                    {uniqueGroups.map((group) => (
                        <ToggleButton
                            style={{
                                backgroundColor:"transparent",
                                color: selectedGroup === group ? "#06AD85" : "black", border:"none",
                                width:"100%",
                                textAlign:"left"
                            }}
                            key={group}
                            type="radio"
                            variant="secondary"
                            name="groupFilter"
                            value={group}
                            checked={selectedGroup === group}
                            onClick={() => handleGroupFilterChange(group)}
                        >
                            Group {group}
                        </ToggleButton>
                    ))}
                </ButtonGroup>

            </Col>

            <Col style={{marginTop:10}}>
            <div className="flows">
                <div className="flows-container" style={{marginLeft:10}}>
                    <h3 className="flows-title">Flows</h3>
                    <div className="flows-search-container">
                        <input
                            className={"flows-search"}
                            type="text"
                            placeholder="Search for a flow"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />

                        <div className="flows-filter-container" >
                            <CreateFlow/>
                            <ButtonGroup style={{marginLeft:20}} toggle>
                                <ToggleButton
                                    className={`flows-filter-all-flows ${filter === 'All rules' ? 'active' : ''}`}
                                    type="radio"
                                    variant="default"
                                    name="filter"
                                    value="All rules"
                                    checked={filter === 'All rules'}
                                    onClick={() => handleFilterChange('All rules')}
                                >
                                    All rules
                                </ToggleButton>
                                <ToggleButton
                                    type="radio"
                                    variant="secondary"
                                    name="filter"
                                    style={{marginLeft:4}}
                                    value="Active"
                                    className={`flows-filter-active ${filter === 'Active' ? 'active' : ''}`}
                                    checked={filter === 'Active'}
                                    onClick={() => handleFilterChange('Active')}
                                >
                                    Active
                                </ToggleButton>

                                <OverlayTrigger
                                    placement="top"
                                    overlay={tooltip}
                                >
                                    <ToggleButton
                                        className={`flows-filter-triggered ${filter === 'Triggered' ? 'active' : ''}`}
                                        type="radio"
                                        variant="secondary"
                                        name="filter"
                                        style={{marginLeft:4}}
                                        value="Triggered"
                                        checked={filter === 'Triggered'}
                                        onClick={() => handleFilterChange('Triggered')}
                                    >
                                        Triggered

                                        <FontAwesomeIcon icon={faInfoCircle} size="sm" style={{ marginLeft: '0.5rem' }} />
                                    </ToggleButton>
                                </OverlayTrigger>

                            </ButtonGroup>
                        </div>
                    </div>

                    <div className="flows-list-container" style={{
                        marginTop: "30px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        {currentFlows.map((flow) => (
                            <div className="flow-item" style={{
                                display: "flex",
                                width: "100%",
                                alignItems: "center",
                                padding: "0 30px",
                                borderBottom: "1px solid #E5E5E5",}}

                                 key={flow.id}>

                                <ChangeStatusButton id={flow.id} initialStatus={flow.active}/>

                                <div className="flow-info-container" style={{textAlign: "flex-start"}}>
                                    <div className="flow-name" style={{cursor:"pointer"}} onClick={() => handleFlowClick(flow.id)}>
                                        {flow.name}
                                    </div>
                                    <div className="flow-id" style={{color:"#bbbbbb", fontSize:12}}><span style={{fontWeight:600}}>ID:</span> {flow.id}</div>
                                </div>
                                <div className="flow-actions-container" style={{marginLeft: "auto"}}>

                                    <EditButton id={flow.id}/>
                                    <FlowDeleteButton id={flow.id}/>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

                <Pagination style={{justifyContent:"center", marginTop:30}}>
                    <Pagination.First onClick={() => handleClick(1)} />
                    <Pagination.Prev onClick={() => handleClick(currentPage - 1) } />
                    {Array.from({length: Math.ceil(filteredFlows.length / flowsPerPage)}, (_, i) =>
                        <Pagination.Item
                            key={i+1} active={i+1 === currentPage} onClick={() => handleClick(i+1)}
                        >
                            {i+1}
                        </Pagination.Item>
                    )}
                    <Pagination.Next onClick={() => handleClick(currentPage + 1)} />
                    <Pagination.Last onClick={() => handleClick(Math.ceil(filteredFlows.length / flowsPerPage))} />
                </Pagination>

            </Col>
            </Row>



        </Container>

    );
};

export default Flows;


