import React from "react";

function AnalyticsStatsBar(props) {
    const { showAnalytics } = props;

    return (
        <div>
            {showAnalytics &&

                <div
                style={{
                    width:418,
                    height: 70,
                    marginLeft:61,
                    display:"flex",
                    border: "1px solid black",
                }}
                >

                    <div
                    style={{
                        width:100,
                        height:"100%",
                        display: "flex",
                        flexDirection:"column",
                        justifyContent:"center",
                    }}
                    >
                        <div
                        style={{

                            lineHeight:"normal",

                        }}
                        >

                            <p
                                style={{
                                    marginBottom:0,
                                    fontSize:22,
                                    fontWeight:"bold",
                                    textAlign:"center",
                                }}
                            >27</p>

                            <p
                            style={{
                                marginBottom:0,
                                color:"#B4B4B4",
                                fontSize:13,
                                textAlign:"center",
                            }}
                            >Triggered: </p>


                        </div>
                                </div>

                    <div
                    style={{display:"flex",height:'100%',alignItems:"center", marginTop:2}}
                    >

                                    <div
                                    style={{


                                    }}
                                    >

                                        <p
                                        style={{
                                            marginBottom:0,
                                            color:"#B4B4B4",
                                            fontSize:12,
                                            textAlign:"left",}}
                                        >Campaigns:</p>

                                        <p
                                        style={{
                                            marginTop:0,
                                            marginBottom:0,
                                            color:"#B4B4B4",
                                            fontSize:12,
                                            textAlign:"left",}}
                                        >Ad Sets:</p>

                                        <p style={{
                                            marginTop:0,
                                            marginBottom:0,
                                            color:"#B4B4B4",
                                            fontSize:12,
                                            textAlign:"left",
                                        }}>Ads:</p>

                                    </div>



                                <div
                                    style={{
                                    marginLeft:10,
                                    fontWeight:"bold",}}
                                >

                                    <p
                                        style={{
                                            marginTop:0,
                                            marginBottom:0,
                                            fontSize:12,
                                            textAlign:"left",}}
                                    >2</p>

                                    <p
                                        style={{
                                            marginTop:0,
                                            marginBottom:0,
                                            fontSize:12,
                                            textAlign:"left",}}
                                    >6</p>

                                    <p style={{
                                        marginTop:0,
                                        marginBottom:0,
                                        fontSize:12,
                                        textAlign:"left",
                                    }}>19</p>

                                </div>

                    </div>





                </div>



            }
        </div>
    );
}

export default AnalyticsStatsBar;