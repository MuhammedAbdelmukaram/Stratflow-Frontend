import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AdAccountSelect from "./Dashboard Components/AdAccountSelect";
import {Bar, Line} from "react-chartjs-2";
import {BarData, BarOptions, data2, options2} from "./Dashboard Components/Chart Data";

const Analytics = () => {
    return (
        <Container>
            <Row>

        <div>

            <AdAccountSelect/>

            <div style={{marginTop:85}}>
                <p>Ad Spend/Profit</p>

                <div
                    style={{ border:"1px solid #E5E5E5", borderRadius:10, padding:10, paddingTop:26, width:1300,boxSizing:"border-box"}}
                >

                    <Line data={data2} options={options2} height='150' width={1260} />
                </div>
            </div>

            <p
                style={{
                    marginTop:100,
                    fontSize:20,
                    fontWeight:700,
                }}
            >Flow Performance</p>

            <Bar style={{width:"230px", height:"100px"}} options={BarOptions} data={BarData} />

        </div>
        </Row>
        </Container>
    );
};

export default Analytics;
