import React, { useState, useEffect } from "react";
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "./Form/form";

import pic from '../assets/home.svg';

import Calendar from "./Calendar/Calendar";
import EventRequest from "./EventRequest/EventRequest";

const Home = () => {
    // const userr = JSON.parse(localStorage.getItem('username'));
    
    const [userr, setUserr] = useState(JSON.parse(localStorage.getItem('role')));
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        setUserr(JSON.parse(localStorage.getItem('role')));
    }, []);

    return(
        <>
            <Container>
                <Row>
                    <Col md={8} sm={12}>
                        <div className="home">
                            <Calendar />
                        </div>
                    </Col>

                    {userr==='principal' && <Col md={4} sm={12} style={{marginLeft: "0px"}}>
                        <div className="home">
                            <EventRequest />
                        </div>
                    </Col>}

                    {!user && <Col md={4}>
                        <img src={pic} height='200px' style={{marginTop: "10px"}}></img>
                        </Col>
                    }
                </Row>
            </Container>
            {/* <Calendar />
            <EventRequest /> */}
        </>
    );
}

export default Home;