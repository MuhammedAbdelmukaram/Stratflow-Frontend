import React, { useState } from 'react';
import { Card, Button, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {Col, Container, Row} from "react-bootstrap";
import { FaEllipsisV } from 'react-icons/fa';

const PaymentMethodCard = ({ method }) => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <Card className="d-flex align-items-center">
            <img src={method.imageUrl} alt={method.label} className="mr-3" width="50" height="50" />
            <div>
                <h5 className="mb-1">{method.label}</h5>
                <p className="text-muted">{method.description}</p>
            </div>
            <div className="ml-auto">
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Disconnect
                        </Tooltip>
                    }
                >
                    <FaEllipsisV
                        className="ml-2"
                        onClick={() => setShowMenu(!showMenu)}
                        style={{cursor: 'pointer'}}
                    />
                </OverlayTrigger>
                {showMenu &&
                    <ListGroup className="dropdown-menu">
                        <ListGroup.Item>
                            <Button variant="danger" onClick={() => setShowMenu(false)}>Disconnect</Button>
                        </ListGroup.Item>
                    </ListGroup>
                }
            </div>
        </Card>
    );
};

const PaymentMethods = ({ methods }) => (
    <>
        <h6>Payment Methods</h6>
        {methods.map((method, index) => (
            <PaymentMethodCard key={index} method={method} />
        ))}
    </>
);

class Billing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            methods : [
                {
                    imageUrl: '/images/visa.png',
                    label: 'Visa ending in 1234',
                    description: 'Expires on 05/2022'
                },
                {
                    imageUrl: '/images/mastercard.png',
                    label: 'Mastercard ending in 5678',
                    description: 'Expires on 06/2022'
                }
            ]
        }
    }
    render() {

    return (
        <Container>
            <Row>
                <Col xs={6}>
                    <PaymentMethods methods={this.state.methods} />
                </Col>
            </Row>
        </Container>
    );

}
}

export default Billing;
