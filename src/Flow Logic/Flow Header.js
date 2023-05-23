import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import FlowName from "./Flow Header Components/FlowName";
import AnalyticsButton from "./Flow Header Components/Analytics Button";
import ActivateFlowModal from "./Flow Header Components/Activate Flow Modal";

const FlowHeader = (props) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const {showAnalytics,setShowAnalytics} = props;

    const handleAnalyticsClick = () => {
        setShowAnalytics(!showAnalytics);
    };

    const ArrowDown = {
        width: 500,
        appearance: "none",
        backLroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px top 50%",
        paddingRight: "30px"
    };
    const activateFlowHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    return (
        <div
            style={{
                width:'100%',
                display: 'flex',
                backgroundColor: '#313131',
                height: '5vh',
                color:"white"

            }}
        >
            <div
                style={{
                    width:'100%',
                    display:"flex",
                    alignItems:"center",
                }}
            >
                <img src={require("../Assets/NavBar Assets/Stratflow-logo.png")}
                     className="button-icon"

                     alt="edit icon"
                     width="20" />

                <div style={{ marginLeft: '20%'}}>
                <FlowName/>
                </div>



                <button
                    className={"analytics-button"}
                    onClick={handleAnalyticsClick}
                    style={{
                        backgroundColor: "#313131",
                        border: "1px solid white",
                        color: "white",
                        fontSize: "12px",
                        padding: "5px 10px",
                        borderColor: "white",
                        marginLeft: 20,
                        marginRight: "4%",
                    }}
                >
                    <img
                        src={require("../Assets/FlowLogic Assets/FlowAnalytics Icon.png")}
                        className="button-icon"
                        style={{
                            marginRight: "10px",
                        }}
                        alt="edit icon"
                        width="16"
                    />

                    {showAnalytics ? "Hide Analytics" : "Show Analytics"}
                </button>



                <button
                    style={{
                        backgroundColor: '#313131',
                        border: "1px solid white",
                        color: 'white',
                        fontSize: '12px',
                        padding: '5px 10px',
                        borderColor:"white",
                        marginLeft:"auto",
                        marginRight:"1%"
                    }}
                > Save Flow </button>
                <button
                    style={{
                        backgroundColor: '#06AD85',
                        color: 'white',
                        border: "1px solid white",
                        fontSize: '12px',
                        padding: '5px 10px',
                        borderColor:"white",
                        marginLeft:"",
                        marginRight:"4%"

                    }}
                    onClick={activateFlowHandler}
                > Activate Flow </button>

                <button style={{
                    backgroundColor: '#313131',
                    border: "1px solid white",
                    color: 'white',
                    fontSize: '12px',
                    padding: '5px 10px',
                    borderColor:"white",
                    justifyContent:"flex-end",
                    marginRight:"10%"
                }}
                        onClick={() => navigate('../flows', { replace: true })}
                > Exit  </button>
            </div>

            <ActivateFlowModal
                showModal={showModal}
                closeModalHandler={closeModalHandler}/>
        </div>
    );
};

export default FlowHeader;