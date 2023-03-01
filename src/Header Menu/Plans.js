import React, {useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import "../Assets/CSS/Plans/Plans.css";


const TimeToggle = (props) => {
    const [billingPeriod, setBillingPeriod] = useState('monthly');

    const handleMonthlyToggle = () => {
        if (billingPeriod !== "monthly") {
            setBillingPeriod("monthly");
        }
    };

    const handleYearlyToggle = () => {
        if (billingPeriod !== "yearly") {
            setBillingPeriod("yearly");
        }
    };

    const priceBasic = billingPeriod === 'monthly' ? 49.99 : 29.99;
    const pricePro = billingPeriod === 'monthly' ? 69.99 : 39.99;

    return (
        <div style={{marginTop:35}}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{
                    width:70,
                    fontSize:12,
                    borderTopLeftRadius:15,
                    borderBottomLeftRadius:15,
                    backgroundColor: billingPeriod === 'monthly' ? 'black' : 'white',
                    color: billingPeriod === 'monthly' ? 'white' : 'black',
                }}
                        onClick={handleMonthlyToggle}>Monthly</button>
                <button style={{
                    width:70,
                    height:29,
                    fontSize:12,
                    borderTopRightRadius:15,
                    borderBottomRightRadius:15,
                    backgroundColor: billingPeriod === 'monthly' ? 'white' : 'black',
                    color: billingPeriod === 'monthly' ? 'black' : 'white',
                }} onClick={handleYearlyToggle}>Yearly</button>
            </div>
            <div style={{display:"flex", flexDirection:"row", marginTop:45, justifyContent:"center"}}>
                <StratFlowBasic priceBasic={priceBasic} />
                <StratFlowPro pricePro={pricePro} />
                <StratFlowEnterprise/>
            </div>

        </div>
    );
};

const StratFlowBasic = (props) => {
return(
    <Card
        className={"card_plans"}
        style={{
            width:340,
            height:"fit-content",
            backgroundColor: '#fff',
            borderColor: '#000',
            borderRadius:25,
            marginTop: 35,
        }}>
        <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{color:'#000', marginLeft:30, marginTop: 30}}>

                <h4 style={{
                    color: '#000',
                    fontSize:14}}>
                                        <span style={{
                                            fontWeight:600,
                                        }}>Stratflow </span>
                    Basic
                </h4>

                <p style={{fontSize:12}}>Starting at</p>
                <p style={{fontSize:42, marginBottom:0, minWidth:143}}>${props.priceBasic}</p>
                <p style={{fontSize:12}}>Billed every 31 days</p>

            </div>

            <button
                className={"button"}
                style={{width:117, height:42, borderRadius:4, backgroundColor:'#000', color:'#fff', alignItems:"center", position:"relative",top:115, left:35}}>
                <p style={{fontSize:14, margin:0}}>Choose Plan</p>
            </button>
        </div>

        <div style={{display:"flex", justifyContent:"center"}}>
            <hr style={{borderColor:'#000', width:300}}/>
        </div>




        <div className={"features"} style={{marginLeft:30, marginBottom:25, color:"#000"}}>
            <p style={{color:'#000', fontSize:10}}>All features include</p>

            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>1 TikTok accounts connections</p>
            </div>

            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>10 flows creation</p>
            </div>

            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Strategy preset access</p>
            </div>

            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Insightful analytics and reports</p>
            </div>

            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Premium utility tools</p>
            </div>

            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Custom metrics</p>
            </div>

            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Chat support</p>
            </div>

        </div>


    </Card>
)
}

const StratFlowPro = (props) => {

    return(
        <Card
            className={"card_plans"}
            style={{
                width:340,
                backgroundColor: '#212529',
                borderRadius:25,
                marginLeft:30,
            }}>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{color:'#ffffff', marginLeft:30, marginTop: 30}}>

                    <h4 style={{
                        color: '#F2F2F2',
                        fontSize:14}}>
                                        <span style={{
                                            fontWeight:600,
                                        }}>Stratflow </span>
                        Pro
                    </h4>

                    <p style={{fontSize:12}}>Starting at</p>
                    <p style={{fontSize:42, marginBottom:0, minWidth:143}}>${props.pricePro}</p>
                    <p style={{fontSize:12}}>Billed every 31 days</p>

                </div>

                <button
                    className={"button"}
                    style={{width:117, height:42, borderRadius:4, backgroundColor:'#06AD85', color:'#fff', alignItems:"center", position:"relative",top:115, left:35}}>
                    <p style={{fontSize:14, margin:0}}>Choose Plan</p>
                </button>
            </div>

            <div style={{display:"flex", justifyContent:"center"}}>
                <hr style={{borderColor:'#fff', width:300}}/>
            </div>




            <div className={"features"} style={{marginLeft:30, marginBottom:25}}>
                <p style={{color:'#fff', fontSize:10}}>All features include</p>

                <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>5 TikTok accounts connections</p>
                </div>

                <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Unlimited number of flows</p>
                </div>

                <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Strategy preset access</p>
                </div>

                <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Insightful analytics and reports</p>
                </div>

                <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Premium utility tools</p>
                </div>

                <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Custom metrics</p>
                </div>

                <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Chat support</p>
                </div>

                <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Integrations</p>
                </div>

                <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Premium TikTok StratFlow group</p>
                </div>

                <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Premium TikTok StratFlow group</p>
                </div>

                <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Premium TikTok StratFlow group</p>
                </div>


            </div>

        </Card>
    )
}

const StratFlowEnterprise = () => {
    return(
        <Card
            className={"card_plans"}
            style={{
                width:340,
                height:"fit-content",
                backgroundColor: '#fff',
                borderColor: '#000',
                borderRadius:25,
                marginLeft:30,
                marginTop:35,

            }}>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{color:'#000', marginLeft:30, marginTop: 30}}>

                    <h4 style={{
                        color: '#000',
                        fontSize:14}}>
                                        <span style={{
                                            fontWeight:600,
                                        }}>Enterprise </span>

                    </h4>

                    <p style={{fontSize:42, marginBottom:0}}>Let's Talk</p>
                    <p style={{fontSize:12, marginBottom:5}}>Custom plan for teams and large organizations tailored to
                        your needs
                    </p>

                </div>

                <div style={{textAlign:"right", marginRight:15}}>
                    <button
                        className={"button"}
                        style={{width:117, height:42, borderRadius:4, backgroundColor:'#000', color:'#fff', alignItems:"center", position:"relative"}}>
                        <p style={{fontSize:14, margin:0}}>Choose Plan</p>
                    </button>
                </div>
            </div>

            <div style={{display:"flex", justifyContent:"center"}}>
                <hr style={{borderColor:'#000', width:300}}/>
            </div>




            <div className={"features"} style={{marginLeft:30, marginBottom:25, color:"#000"}}>
                <p style={{color:'#000', fontSize:10}}>All features PLUS</p>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Onboarding help</p>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Custom strategy planning</p>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Custom flows creation with our experts</p>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Custom integrations</p>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <img src={require('../Assets/Plans Assets/Checkmark.png')} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Premium support</p>
                </div>

            </div>

        </Card>
    )
}
    class Plans extends React.Component{


    render() {



        return (
            <Container>

                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    flexDirection:"column",
                    textAlign:"center",
                    marginTop:30}}>

                <h4>Pricing and Plans</h4>
                <p>Whether you need simple or complex workflows, StratFlow offers
                    secure and reliable automation as you scale.</p>

                </div>
                <TimeToggle/>

                <h4 style={{
                    textAlign:"center",
                    marginTop:65,}}>Frequently Asked Questions</h4>

                <div
                className={"faq-all-questions"}>
                    <div
                        className={"faq-left-column"}
                    >

                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>


                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>


                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>

                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>

                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>

                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>

                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>

                    </div>

                    <div
                        className={"faq-right-column"}
                    >

                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>


                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>


                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>

                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>

                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>

                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>

                        <div className={"faq-question-container"}>
                            <h6 className={"faq-heading"}>
                                What forms of payment do you accept</h6>
                            <p className={"faq-text"}>
                                We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.</p>
                        </div>

                    </div>
                </div>




            </Container>
        );

    }
}


export default Plans;

//${price}