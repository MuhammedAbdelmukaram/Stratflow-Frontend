import React, {useState} from "react";

function TimeframeButtons() {
    const [selectedButton, setSelectedButton] = useState("24h");

    return (
        <div
            style={{
                marginTop: 40,
                marginLeft:20,
            }}
        >
            <button
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight: selectedButton === "24h" ? "bold" : "normal",
                    textDecoration: selectedButton === "24h" ? "underline" : "none"
                }}
                onClick={() => setSelectedButton("24h")}
            >
                24h
            </button>
            <button
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight: selectedButton === "7d" ? "bold" : "normal",
                    textDecoration: selectedButton === "7d" ? "underline" : "none"
                }}
                onClick={() => setSelectedButton("7d")}
            >
                7d
            </button>
            <button
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    fontWeight: selectedButton === "30d" ? "bold" : "normal",
                    textDecoration: selectedButton === "30d" ? "underline" : "none"
                }}
                onClick={() => setSelectedButton("30d")}
            >
                30d
            </button>
        </div>
    );
}

export default TimeframeButtons
