import React, {useState} from 'react';
import {Button, Card, Container, Modal, Row} from "react-bootstrap";


const ZapierCard = ({ icon, firstText, secondText }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card className="box" style={{ width: '390px', height: '192px' }}>

            <Card.Body>
                <div className="d-flex justify-content-between">
                    <img
                        src={require('../Assets/Integration Assets/Zapier.png')}
                        alt="King Flow"
                        style={{
                            marginRight: 8,
                            height:46,
                        }}
                    />

                    <p
                        style={{ color:"#666666", height:30, fontSize:14, paddingTop:4, paddingBot:4, paddingRight: 10, paddingLeft: 14}}
                        >
                        Coming Soon..
                    </p>

                </div>

                <div style={{marginTop:20}}>
                    <p style={{textAlign:"left", fontWeight:"bold", marginBottom:0}}>
                        Zapier
                    </p>
                    <p style={{textAlign:"left", }}>
                        Manage your workflows with Zapier, including StratFlow
                    </p>
                </div>
            </Card.Body>
        </Card>

    );
};

const ShopifyCard = ({ icon, firstText, secondText }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card className="box" style={{ width: '390px', height: '192px' }}>

            <Card.Body>
                <div className="d-flex justify-content-between">
                    <img
                        src={require('../Assets/Dashboard Assets/Shopify.png')}
                        alt="King Flow"
                        style={{
                            marginRight: 8,
                            height:46,
                        }}
                    />

                    <p
                        style={{ color:"#666666", height:30, fontSize:14, paddingTop:4, paddingBot:4, paddingRight: 10, paddingLeft: 14}}
                    >
                        Coming Soon..
                    </p>

                </div>

                <div style={{marginTop:20}}>
                    <p style={{textAlign:"left", fontWeight:"bold", marginBottom:0}}>
                        Shopify
                    </p>
                    <p style={{textAlign:"left", }}>
                        Import your Shopify data into StratFlow
                    </p>
                </div>
            </Card.Body>
        </Card>

    );
};

const SlackCard = ({ icon, firstText, secondText }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card className="box" style={{ width: '390px', height: '192px' }}>

            <Card.Body>
                <div className="d-flex justify-content-between">
                    <img
                        src={require('../Assets/Dashboard Assets/Slack.png')}
                        alt="King Flow"
                        style={{
                            marginRight: 8,
                            height:46,
                        }}
                    />

                    <p
                        style={{ color:"#666666", height:30, fontSize:14, paddingTop:4, paddingBot:4, paddingRight: 10, paddingLeft: 14}}
                    >
                        Coming Soon..
                    </p>

                </div>

                <div style={{marginTop:20}}>
                    <p style={{textAlign:"left", fontWeight:"bold", marginBottom:0}}>
                        Slack
                    </p>
                    <p style={{textAlign:"left", }}>
                        Get notified on Slack when important flow triggers happen
                    </p>
                </div>
            </Card.Body>
        </Card>

    );
};

const GoogleSheetsCard = ({ icon, firstText, secondText }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card className="box" style={{ width: '390px', height: '192px' }}>

            <Card.Body>
                <div className="d-flex justify-content-between">
                    <img
                        src={require('../Assets/Integration Assets/GoogleSheets.png')}
                        alt="King Flow"
                        style={{
                            marginRight: 8,
                            height:46,
                        }}
                    />

                    <p
                        style={{ color:"#666666", height:30, fontSize:14, paddingTop:4, paddingBot:4, paddingRight: 10, paddingLeft: 14}}
                    >
                        Coming Soon..
                    </p>

                </div>

                <div style={{marginTop:20}}>
                    <p style={{textAlign:"left", fontWeight:"bold", marginBottom:0}}>
                        Google Sheets
                    </p>
                    <p style={{textAlign:"left", }}>
                        Get reports on your Google Sheets dashboard weekly
                    </p>
                </div>
            </Card.Body>
        </Card>

    );
};


class Integrations extends React.Component{

    render() {

        return (
            <Container>
                <div style={{position:"relative", display:"flex", flexDirection:"column"}}>
                    <h3 style={{marginTop:40, display:"inline-flex"}}>Integrations</h3>
                    <p style={{marginBottom:0, color:'#8C8C8C', display:"inline-flex"}}>Integrate popular platforms and web apps</p>
                    <p style={{marginBottom:30, color:'#8C8C8C', marginTop:0, display:"inline-flex"}}><span style={{fontWeight:"bold"}}>Not sure what to do? </span> Check out our short guide here!</p>
                </div>

                <Row>
                    <SlackCard/>
                    <ZapierCard/>
                    <ShopifyCard/>
                    <GoogleSheetsCard/>
                </Row>


            </Container>
        );

    }
}


export default Integrations;