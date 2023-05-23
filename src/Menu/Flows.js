import React, { useState } from 'react';
import {Button, Col, Container, Form, Modal, OverlayTrigger, Pagination, Row, Tooltip} from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {Input, Switch} from 'antd';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Assets/CSS/Flows/Flows.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import {
    addFlow,
    removeFlow,
    updateFlow,
    setSearchTerm,
    setFilter,
    setFlows,
    setGroups,
    setSelectedGroup,
    setCurrentPage,
    toggleActive,
} from '../../src/FlowsSlice';


const EditButton = ({flow, onRename}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className={"flow-edit-button"}
                    style={{
                        height:20,
                        width:20,
                        border: "none",
                        backgroundColor: "transparent",
                        padding:0,
                    }}
            onClick={handleShow}>
                <img src={require("../Assets/Flows Assets/EditIcon.png")}
                     className="button-icon"
                     alt="edit icon"
                     height="20"
                     width="20" />

            </button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Flow</Modal.Title>
                </Modal.Header>
                <Modal.Body>Rename the flow:

                    <Input placeholder="Flow Name" required />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" style={{backgroundColor:"#06AD85", borderColor:"#06AD85"}} onClick={handleClose}>
                        Duplicate
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
const DuplicateButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                className={"flow-duplicate-button"}
                style={{
                    height: 20,
                    width: 20,
                    border: "none",
                    backgroundColor: "transparent",
                    padding: 0,
                    marginLeft: 5,
                }}
                onClick={handleShow}
            >
                <img
                    src={require("../Assets/Flows Assets/DuplicateIcon.png")}
                    className="button-icon"
                    alt="duplicate icon"
                    height="20"
                    width="20"
                />
            </button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Duplicate Flow</Modal.Title>
                </Modal.Header>
                <Modal.Body>Name of duplicated flow:

                        <Input placeholder="Flow Name" required />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" style={{backgroundColor:"#06AD85", borderColor:"#06AD85"}} onClick={handleClose}>
                        Duplicate
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const FlowDeleteButton = (id) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);


    const handleDelete = () => {
        dispatch(removeFlow(id.id)); // Dispatch the removeFlow action

    };

    const handleShow = () => setShow(true);

    return (
        <>
            <button
                className={"flow-delete-button"}
                style={{
                    height: 20,
                    width: 20,
                    border: "none",
                    backgroundColor: "transparent",
                    padding: 0,
                    marginLeft: 5,
                }}
                onClick={handleShow}
            >
                <img
                    src={require("../Assets/Flows Assets/TrashIcon.png")}
                    className="button-icon"
                    alt="delete icon"
                    height="17"
                    width="17"
                />
            </button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Flow</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete this flow? This process cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};


function CreateFlow() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();


    return (
        <>
            <Button className="btn btn-create-flow-button" onClick={handleShow}>Create Flow</Button>

            <Modal size={"lg"} show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <p className="modal-title">Create Flow</p>
                    <hr className="modal-hr"/>
                    <p className="modal-note">NOTE: You can always choose a strategy and tailor it to your need</p>


                    <div className="flex-container">
                        <div>
                            <Button onClick={() => navigate('../flowlogic', { replace: true })} variant="text" size="small"  className="image-button">
                                <img
                                    src={require("../Assets/Strategies Assets/CreateScratch.png")}
                                    alt="CreateScratch"
                                    className="image"
                                />
                            </Button>
                            <p className="image-text">From Scratch</p>
                        </div>

                        <div>
                            <Button  onClick={() => navigate('../strategies', { replace: true })} variant="text" size="small"  className="image-button">
                                <img
                                    src={require("../Assets/Strategies Assets/UseStrategy.png")}
                                    alt="CreateScratch"
                                    className="image"
                                />
                            </Button>
                            <p className="image-text">Use Staregies</p>
                        </div>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    );
}
const Flows = () => {

    const dispatch = useDispatch();

    const searchTerm = useSelector(state => state.flows.searchTerm);
    const filter = useSelector(state => state.flows.filter);
    const flows = useSelector(state => state.flows.flows);
    const selectedGroup = useSelector(state => state.flows.selectedGroup);
    const currentPage = useSelector(state => state.flows.currentPage);




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

    const handleStatusChange = (id) => {
        dispatch(setFlows(
            flows.map((flow) => {
                if (flow.id === id) {
                    return { ...flow, active: !flow.active };
                }
                return flow;
            })
        ));
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
                <h4>Groups</h4>
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
                <div className="flows-container">
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
                            <ButtonGroup toggle>
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
                                <input className="flow-checkbox" type="checkbox" style={{marginRight: "30px"}}/>
                                <Switch
                                    className={"flow-status-switch"}
                                    style={{backgroundColor: flow.active ? '#06AD85' : '#3A3A3A', marginRight: "30px"}}
                                    type="checkbox"
                                    checked={flow.active}
                                    onChange={() => handleStatusChange(flow.id)}
                                />
                                <div className="flow-info-container" style={{textAlign: "center"}}>
                                    <div className="flow-name">{flow.name}</div>
                                    <div className="flow-id">{flow.id}</div>
                                </div>
                                <div className="flow-actions-container" style={{marginLeft: "auto"}}>

                                    <EditButton/>
                                    <DuplicateButton/>
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


