import React, { useState } from "react";

function AnalyticsButton(props) {
    const [showAnalytics, setShowAnalytics] = useState(false);

    const toggleAnalytics = () => {
        setShowAnalytics(!showAnalytics);
        props.handleAnalyticsClick(!showAnalytics);
    };

    return (
        <button
            className={"analytics-button"}
            onClick={toggleAnalytics}
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
                src={require("../../Assets/FlowLogic Assets/FlowAnalytics Icon.png")}
                className="button-icon"
                style={{
                    marginRight: "10px",
                }}
                alt="edit icon"
                width="16"
            />

            {showAnalytics ? "Hide Analytics" : "Show Analytics"}
        </button>
    );
}

export default AnalyticsButton;