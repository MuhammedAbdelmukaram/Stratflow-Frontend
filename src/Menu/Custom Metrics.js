import React, {useRef, useState} from 'react';
import {InputGroup, Button, FormControl, Container, Row, Card} from 'react-bootstrap';
import * as math from 'mathjs';




function StratflowMetric() {
    return (
        <Card style={{ width: 242,marginTop:10, marginRight:15 }}>
            <Card.Body>
                <Card.Title>120% Cost Per Click</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CPC x 1.2</Card.Subtitle>
                <p style={{fontSize:12}}>Make CPC 20% higher than the average. Good when targeting a more specific audience.</p>
                <div style={{textAlign:"right"}}>
                  <Button style={{backgroundColor:"#06AD85", color:"#fff", border:"none"}}> Import</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

function CustomMetric() {
    const [metric, setMetric] = useState('');
    const [number, setNumber] = useState('');
    const [equation, setEquation] = useState('');
    const [metricMenuOpen, setMetricMenuOpen] = useState(false);
    const [numberMenuOpen, setNumberMenuOpen] = useState(false);
    const [result, setResult] = useState('');

    function handleMetricChange(e) {
        setMetric(e.target.value);
    }

    function handleNumberChange(e) {
        setNumber(e.target.value);
    }

    function handleEquationChange(e) {
        setEquation(e.target.value);
    }

    function handleMetricMenuToggle() {
        if (numberMenuOpen) {
            setNumberMenuOpen(false);
        }
        setMetricMenuOpen(prev => !prev);
    }

    function handleNumberMenuToggle() {
        if (metricMenuOpen) {
            setMetricMenuOpen(false);
        }
        setNumberMenuOpen(prev => !prev);
    }

    function handleAddMetric() {
        setEquation(equation + metric);
    }

    function handleAddNumber() {
        setEquation(equation + number);
    }


    function handleOperatorChange(e) {
        setEquation(equation + e.target.value);
    }

    function handleEvaluate() {
        try {
            const evaluatedResult = math.evaluate(equation);
            setResult(evaluatedResult);
        } catch (error) {
            setResult('Error: Invalid equation');
        }
    }


    const inputRef = useRef(null);

    return (
        <Container>
            <Row>
            <div style={{position:"relative", display:"flex", flexDirection:"column"}}>
                <h3 style={{marginTop:40, display:"inline-flex"}}>Custom Metrics</h3>
                <p style={{marginBottom:0, color:'#8C8C8C', display:"inline-flex"}}>Create your own customized metrics</p>
                <p style={{marginBottom:30, color:'#8C8C8C', marginTop:0, display:"inline-flex"}}><span style={{fontWeight:"bold"}}>Not sure what to do? </span> Check out our short guide here!</p>
            </div>

            <div>
                <div>
                    <Button style={{backgroundColor:"#fff", color:"#7E7E7E", border:"none"}} onClick={handleMetricMenuToggle}>Metrics</Button>
                    <Button style={{backgroundColor:"#fff", color:"#7E7E7E", border:"none"}}onClick={handleNumberMenuToggle}>Numbers</Button>
                    <Button style={{backgroundColor:"#fff", color:"#7E7E7E", border:"none"}} onClick={handleOperatorChange} value="+">+</Button>
                    <Button style={{backgroundColor:"#fff", color:"#7E7E7E", border:"none"}} onClick={handleOperatorChange} value="-">-</Button>
                    <Button style={{backgroundColor:"#fff", color:"#7E7E7E", border:"none"}} onClick={handleOperatorChange} value="*">*</Button>
                    <Button style={{backgroundColor:"#fff", color:"#7E7E7E", border:"none"}} onClick={handleOperatorChange} value="/">/</Button>
                    <Button style={{backgroundColor:"#fff", color:"#7E7E7E", border:"none"}} onClick={handleOperatorChange} value="(">(</Button>
                    <Button style={{backgroundColor:"#fff", color:"#7E7E7E", border:"none"}} onClick={handleOperatorChange} value=")">)</Button>
                    {metricMenuOpen && (
                        <InputGroup>
                            <select value={metric} onChange={handleMetricChange}>
                                <option value="metric1">Metric 1</option>
                                <option value="metric2">Metric 2</option>
                                <option value="metric3">Metric 3</option>
                            </select>
                            <Button onClick={handleAddMetric}>Add Metric</Button>
                        </InputGroup>
                    )}
                    {numberMenuOpen && (
                        <InputGroup>
                            <FormControl onChange={handleNumberChange} />
                            <Button onClick={handleAddNumber}>Add Number</Button>
                        </InputGroup>
                    )}
                    <InputGroup>
                        <FormControl  ref={inputRef} style={{border:"none"}} value={equation} onChange={handleEquationChange} readOnly/>
                    </InputGroup>
                    <div style={{textAlign:"right"}}>
                    <Button style={{backgroundColor:"#06AD85", color:"#fff", border:"none"}} onClick={handleEvaluate}>Save</Button>
                    </div>
                </div>
                <div>
                    {result}
                </div>
            </div>
            </Row>
            <Row style={{borderTop:"1px solid #E5E5E5", marginTop:7}}>
                <h5 style={{marginTop:20}}>Featured Metrics</h5>

                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>

                <h5 style={{marginTop:20}}>All Metrics</h5>

                <h6 style={{marginTop:20}}>Video Related</h6>

                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>

                <h6 style={{marginTop:20}}>ROI related</h6>

                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>

                <h6 style={{marginTop:20}}>Engagement related</h6>

                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>

                <h6 style={{marginTop:20}}>Attribution related</h6>

                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>
                <StratflowMetric/>
            </Row>
        </Container>
    );
}

export default CustomMetric;