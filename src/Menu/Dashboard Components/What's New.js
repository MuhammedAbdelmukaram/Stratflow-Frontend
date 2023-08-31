import {useDispatch, useSelector} from "react-redux";
import {toggleDiv} from "../../Redux/DashboardSlice";
import React from "react";
import SingleNewsCard from "./What's New Components/Single News Card";

function WhatsNew() {
    const showDiv = useSelector((state) => state.whatsNew.showDiv);
    const dispatch = useDispatch();

    const handleCollapse = () => {
        dispatch(toggleDiv());
    };

    return (
        <>
            {showDiv && (
                <div>
                    <p>What's New?</p>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            width: "fit-content",
                            height: 200,
                            backgroundColor: "#FAFAFA",
                            borderRadius: 10,
                            padding: 10,
                            paddingTop:26,
                            position: "relative",
                        }}
                    >

                        <button
                            style={{
                                position: "absolute",
                                top: -4,
                                right: 6,
                                border: "none",
                                backgroundColor: "transparent",
                            }}
                            onClick={handleCollapse}
                        >
                            <img src={require('../../Assets/Dashboard Assets/CloseDashboardLine.png')} alt=""
                                 width={'25'}/>
                        </button>

                        <SingleNewsCard
                            imgSrc={require("../../Assets/Dashboard Assets/Slack.png")}
                            title={"INTEGRATION"}
                            description={
                                "Our Slack integration is LIVE! Connect your account and get flow notifications in real time."
                            }
                            link={""}
                        />

                        <SingleNewsCard
                            imgSrc={require("../../Assets/Dashboard Assets/Shopify.png")}
                            title={"INTEGRATION"}
                            description={
                                "Connect your Shopify account and improve your attribution data considerably"
                            }
                            link={""}
                        />

                        <SingleNewsCard
                            imgSrc={require("../../Assets/Dashboard Assets/Slack.png")}
                            title={"INTEGRATION"}
                            description={
                                "Our Slack integration is LIVE! Connect your account and get flow notifications in real time."
                            }
                            link={""}
                        />

                        <SingleNewsCard
                            imgSrc={require("../../Assets/Dashboard Assets/Slack.png")}
                            title={"INTEGRATION"}
                            description={
                                "Our Slack integration is LIVE! Connect your account and get flow notifications in real time."
                            }
                            link={""}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default WhatsNew;
