import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import FlowName from './FlowName';
import {useDispatch, useSelector} from "react-redux";
import {addFlow} from "../../FlowsSlice";
import {useNavigate} from "react-router-dom";

const ArrowDown = {
    width: 500,
    appearance: "none",
    backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px top 50%",
    paddingRight: "30px"
};






const ActivateFlowModal = ({ showModal, closeModalHandler }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const flows = useSelector(state => state.flows.flows);

    const newFlow = {
        group: 1,
        id: Math.max(...flows.map(flow => flow.id)) + 1,
        name: "New Flow",
        active: true,
        triggered: false,
    };
    const activateFlow = () => {


        dispatch(addFlow(newFlow));
        navigate('../flows', { replace: true });
    }


    return (
        <Modal show={showModal} onHide={closeModalHandler} size={"xl"}>
        <Modal.Header closeButton>
            <FlowName/>

        </Modal.Header>
        <Modal.Body>
            <Form.Group style={{marginTop:20, display:"flex", flexDirection:"column"}} controlId="formSelectTimezone">
                <Form.Label style={{textAlign:"left"}}>Ad account:</Form.Label>
                <Form.Control style={ArrowDown} as="select">
                    <option>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <p>Stratflow Ad Account</p>
                            <span>user5844887010046</span>
                        </div>
                    </option>
                    <option>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <p>Stratflow Ad Account 2</p>
                            <span>user5844887010046</span>
                        </div>
                    </option>
                    <option>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <p>Stratflow Ad Account 3</p>
                            <span>user5844887010046</span>
                        </div>
                    </option>
                    {/* Add additional timezone options here */}
                </Form.Control>
            </Form.Group>
        </Modal.Body>
        <div
            style={{
                display:"flex",
                justifyContent:"space-between",
                padding:20
            }}
        >
            <div style={{}}>
                <p style={{fontWeight:"bold"}}>
                    RULE
                </p>
                <p>
                    If *Metric* *Sign* *Value*
                    <br/>
                    If *Metric* *Sign* *Value*
                    <br/>
                    If *Metric* *Sign* *Value*
                    <br/>
                    If *Metric* *Sign* *Value*
                    <br/>
                </p>
            </div>

            <div
                style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}
            >
                <Form.Check style={{textAlign:"left", fontSize:12}} type="checkbox" label="Notify me when flow triggers"  />
                <Button variant="primary" onClick={activateFlow} >
                    Activate
                </Button>
            </div>
        </div>
    </Modal>)}


export default ActivateFlowModal;