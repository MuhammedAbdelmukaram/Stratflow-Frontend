import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card, Button, Modal} from 'react-bootstrap';
import "../Assets/CSS/Strategies/Strategies.css";
import { useNavigate } from 'react-router-dom';
import SingleStrategyCard from "./Strategies Components/Single Strategy Card";
import CreateFlow from "./Strategies Components/Create Flow Modal";
import KingImage from '../Assets/Strategies Assets/King.png';
import KingRuleImage from '../Assets/Strategies Assets/King Flow.png'
import {
    BishopHeading, CheaperCPAHeading, CTRCullingHeading, DuplicateProfitsHeading, FastScaleAdsHeading,
    KingHeading, NoGoAdsHeading,
    QueenHeading,
    QueenRuleText,
    QueenSubtitle, RevivalHeading
} from "../Assets/Strategies Assets/Strategies Texts/Texts";
import {KingSubtitle} from "../Assets/Strategies Assets/Strategies Texts/Texts";
import {KingRuleText} from "../Assets/Strategies Assets/Strategies Texts/Texts";
import QueenImage from '../Assets/Strategies Assets/Queen.png'
import BishopImage from '../Assets/Strategies Assets/Bishop flow.png'
import CheapestCPAImage from '../Assets/Strategies Assets/Cheapest CPA.png'
import CTRImage from '../Assets/Strategies Assets/CTR culling.png'
import DuplicateProfitsImage from '../Assets/Strategies Assets/Duplicate Profits.png'
import FastScaleImage from '../Assets/Strategies Assets/Fast Scale Ads.png'
import NoGoImage from '../Assets/Strategies Assets/No-Go Ads.png'
import RevivalImage from '../Assets/Strategies Assets/Revival.png'


const Strategies = () => {

        return (

            <Container>
                <div style={{position:"relative", display:"flex", flexDirection:"column"}}>
                    <h3 style={{marginTop:40, display:"inline-flex"}}>Strategies</h3>
                    <p style={{marginBottom:0, color:'#8C8C8C', display:"inline-flex"}}>Save your time and use profitable flow presets. Customize them to your needs.</p>
                    <p style={{marginBottom:30, color:'#8C8C8C', marginTop:0, display:"inline-flex"}}><span style={{fontWeight:"bold"}}>Not sure what to use?</span> Click ‘Use’ and check out our guide!</p>
                    <CreateFlow/>
                </div>
                <Row>
                    <h5>Most Used</h5>
                    <Col style={{textAlign:"center"}}> <SingleStrategyCard icon={KingImage} height={46} firstText={KingHeading} secondText={KingSubtitle} ruleDescription={KingRuleText} ruleImage={KingRuleImage}/>  </Col>
                    <Col style={{textAlign:"center"}}><SingleStrategyCard icon={QueenImage} height={54} firstText={QueenHeading} secondText={QueenSubtitle} ruleDescription={QueenRuleText} ruleImage={KingRuleImage}/> </Col>
                    <Col style={{textAlign:"center"}}><SingleStrategyCard icon={BishopImage} height={54} firstText={BishopHeading} secondText={QueenSubtitle} ruleDescription={QueenRuleText} ruleImage={KingRuleImage}/> </Col>
                </Row>

                <Row
                style={{marginTop:25}}>
                    <h5 style={{marginBottom:15}}>All in 1</h5>
                    <Col style={{textAlign:"center"}}><SingleStrategyCard icon={CheapestCPAImage} height={54} firstText={CheaperCPAHeading} secondText={QueenSubtitle} ruleDescription={QueenRuleText} ruleImage={KingRuleImage}/> </Col>
                    <Col style={{textAlign:"center"}}><SingleStrategyCard icon={CTRImage} height={54} firstText={CTRCullingHeading} secondText={QueenSubtitle} ruleDescription={QueenRuleText} ruleImage={KingRuleImage}/> </Col>
                    <Col style={{textAlign:"center"}}><SingleStrategyCard icon={DuplicateProfitsImage} height={54} firstText={DuplicateProfitsHeading} secondText={QueenSubtitle} ruleDescription={QueenRuleText} ruleImage={KingRuleImage}/> </Col>
                </Row>

                <Row>
                    <Col style={{textAlign:"center"}}><SingleStrategyCard icon={FastScaleImage} height={54} firstText={FastScaleAdsHeading} secondText={QueenSubtitle} ruleDescription={QueenRuleText} ruleImage={KingRuleImage}/> </Col>
                    <Col style={{textAlign:"center"}}><SingleStrategyCard icon={NoGoImage} height={54} firstText={NoGoAdsHeading} secondText={QueenSubtitle} ruleDescription={QueenRuleText} ruleImage={KingRuleImage}/> </Col>
                    <Col style={{textAlign:"center"}}><SingleStrategyCard icon={RevivalImage} height={54} firstText={RevivalHeading} secondText={QueenSubtitle} ruleDescription={QueenRuleText} ruleImage={KingRuleImage}/> </Col>
                </Row>

            </Container>
        );

    }



export default Strategies;

