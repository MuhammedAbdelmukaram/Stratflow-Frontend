import React, {useRef, useState} from 'react';
import {Button, Container, Modal, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Toast from 'react-bootstrap/Toast';



//const navigate = useNavigate();

const notifications = [
    { id: 1, title: 'Notification 1', message: 'This is the first notification' },
    { id: 2, title: 'Notification 2', message: 'This is the second notification' },
    { id: 3, title: 'Notification 3', message: 'This is the third notification' },
    { id: 4, title: 'Notification 4', message: 'This is the third notification' },
    { id: 5, title: 'Notification 5', message: 'This is the third notification' },
    { id: 6, title: 'Notification 6', message: 'This is the third notification' },
    { id: 7, title: 'Notification 7', message: 'This is the third notification' },
];

const NotificationIcon = () => {
    const [displayedNotifications, setDisplayedNotifications] = useState(notifications);

    const [showB, setShowB] = useState(false);
    const toggleShowB = () => setShowB(!showB);

    const handleClose = (id) => {
        setDisplayedNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification.id !== id)
        );
    };

    return (
        <>
            <Button
                style={{ backgroundColor: 'transparent', borderColor: 'transparent', marginRight: '10px' }}
                onClick={toggleShowB}
            >
                <img
                    src={require('../Assets/NavBar Assets/notificationicon.png')}
                    width="30px"
                    className="d-inline-block align-top"
                    alt="Notification Icon"
                />
            </Button>
            <Toast
                onClose={toggleShowB}
                show={showB}
                animation={false}
                style={{
                    position: 'absolute',
                    zIndex: 100,
                    background: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxShadow: '0px 0px 10px #ddd',
                }}
            >
                {displayedNotifications.length > 0 ? (
                    displayedNotifications.map((notification) => (
                        <React.Fragment key={notification.id}>
                            <Toast.Header
                                closeButton={false}
                            >
                                <strong className="me-auto">{notification.title}</strong>
                                <small>11 mins ago</small>
                                <Button
                                    onClick={() => handleClose(notification.id)}
                                    variant="link"
                                    className="ml-auto"
                                >
                                    <img
                                        src={require("../Assets/NavBar Assets/Close Button.png")}
                                        className="button-icon"
                                        alt="duplicate icon"
                                        height="10"
                                        width="10"
                                    />
                                </Button>
                            </Toast.Header>
                            <Toast.Body>{notification.message}</Toast.Body>
                        </React.Fragment>
                    ))
                ) : (
                    <div>
                        <Toast.Header>
                            <strong className="me-auto">Notifications</strong>
                        </Toast.Header>
                        <Toast.Body>No New Notifications</Toast.Body>
                    </div>
                )}
            </Toast>
        </>
    );
};


const NavButtons = () => {
    const navigate = useNavigate();

    return (
        <>
            <Button variant="dark"
                    onClick={() => navigate('../plans', { replace: true })}
                    style={{ borderColor: 'white', borderRadius: '0px', paddingLeft:'30px', paddingRight:'30px', fontSize:'70%', marginRight:'40px'}}>
                Account Plans
            </Button>
            <Button variant="dark"
                    onClick={() => navigate('../support', { replace: true })}
                    style={{ fontSize:'90%'}}>Support</Button>
        </>
    );
};


class NavigationBar extends React.Component {

    render() {


        return (

            <Navbar bg="dark">

                <Container>
                    <Navbar.Brand>
                        <img
                            src={require('../Assets/NavBar Assets/Stratflow-logo.png')}
                            width="25"
                            height=""
                            className="d-inline-block align-top"
                            alt="Stratflow Logo"
                        />
                    </Navbar.Brand>
                   <div>

                       <NotificationIcon />
                       <NavButtons/>
                   </div>
                </Container>
            </Navbar>
        );
    }

}

/**/




export default NavigationBar;