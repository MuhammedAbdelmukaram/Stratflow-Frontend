import React from "react";
import { Line } from "react-chartjs-2";
import growingIcon from "../../Assets/Dashboard Assets/Growing.png";
import TrendCapsule from "./Trend Capsule";

function LineCard(props) {
    const { cardTitle, cardValue, chartData, options } = props;

    return (
        <div
            className="single-dash-card"
            style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#fff",
                border: "1px solid #A9A9A9",
                boxSizing: "border-box",
                minWidth: 316,
                height: 174,
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 8,
                paddingBottom: 15,
                marginLeft: 10,
                marginTop: 20,
            }}
        >
            <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                <p style={{ color: "#595959", fontWeight: 600, fontSize:14 }}>{cardTitle}</p>
                <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: 8 }}>
                    <p style={{ fontSize: 36, fontWeight: "bold" }}>{cardValue}</p>
                </div>

                <TrendCapsule
                    data={chartData}
                />

            </div>

            <div style={{ display: "flex", flexDirection: "column", width: "50%", justifyContent: "flex-end", }}>
                <Line data={chartData} options={options} height={108} width={144} />
            </div>


        </div>
    );
}



export default LineCard;