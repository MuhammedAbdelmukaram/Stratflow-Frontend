import React from 'react';
import LineCircleLine from '../If Rule Components/If Rule Sub-Components/Line Circle Line';
import ThreeButtonMenu from "../If Rule Components/If Rule Sub-Components/Three Button Menu";
import InputFieldIncreaseBudget from "./Increase Budget Sub-Components/Input Field Increase Budget";

const IncreaseBudgetComponent = ({ rule }) => {
    return (
        <div key={rule.key} style={{ boxSizing: "border-box", display: "contents" }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:"center",
                width:480,
            }}>
                <div
                    style={{
                        height:60,
                        width:150,
                        backgroundColor:'#2E2E2E',
                        border:'1px solid black',
                        display:"flex",
                    }}>

                    <div
                        style={{
                            width:'100%',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <p
                            style={{
                                marginBottom:0,
                                fontSize:14,
                                color:'white',
                                fontWeight:600
                            }}
                        >Increase Budget</p>
                    </div>
                </div>

                <div
                    style={{
                        height:60,
                        width:180,
                        backgroundColor:'#ffffff',
                        border:'1px solid black',
                        display:"flex",
                        flexDirection:"column",
                    }}>

                    <div
                        style={{
                            width:'100%',
                            marginLeft:12,
                        }}
                    >
                        <p
                            style={{
                                fontSize:12,
                                marginTop:7,
                                color:'black',
                                fontWeight:"normal",
                                marginRight:15,
                                marginBottom:4,

                            }}
                        >Increase Budget by:</p>

                    </div>

                    <InputFieldIncreaseBudget />

                </div>
            </div>

        </div>
    );
};

export default IncreaseBudgetComponent;