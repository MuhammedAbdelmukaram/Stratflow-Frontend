import React, { useState } from 'react';
import InputFieldIncreaseBudget from './Increase Budget Sub-Components/Input Field Increase Budget';

const IncreaseBudgetComponent = ({  nodeID, updateNodeValue, updateNodePercentage, nodeValue, nodePercentage }) => {



    return (
        <div  style={{ boxSizing: "border-box", display: "contents" }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", width: 480 }}>
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
                        height: 60,
                        width: 180,
                        backgroundColor: '#ffffff',
                        border: '1px solid black',
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            marginLeft: 12,
                        }}
                    >
                        <p
                            style={{
                                fontSize: 12,
                                marginTop: 7,
                                color: 'black',
                                fontWeight: "normal",
                                marginRight: 15,
                                marginBottom: 4,
                            }}
                        >Increase Budget by:</p>
                    </div>


                    <InputFieldIncreaseBudget  nodeID={nodeID} updateNodeValue={updateNodeValue} updateNodePercentage={updateNodePercentage} nodeValue={nodeValue} nodePercentage={nodePercentage} />

                </div>
            </div>
        </div>
    );
};

export default IncreaseBudgetComponent;
