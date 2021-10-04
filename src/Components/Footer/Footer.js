import React from 'react';
import { Col, Container, Row, Button, Nav, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className="mt-5 bg-dark text-light">
            <Container>
                <Row className="text-start py-5">
                    {/* a little description and a button section here */}
                    <Col md={4} className="p-3">
                        <div className="d-flex">
                            <img src={logo} alt="logo" className="me-1" />
                            <h5 className="fw-bold mt-3 mb-0">PhotoWala</h5>
                        </div>
                        <div className="py-3">
                            <small>PhotoWala is a well known Online Photograpic Institute. We try to give the best education and the actuall knownledge about photography! </small>
                        </div>
                        <Link to="/about">
                            <Button variant="outline-light">Read More</Button>
                        </Link>
                    </Col>

                    {/* footer navigation here */}
                    <Col md={2} className="p-3">
                        <h5 className="pb-2">Navigation</h5>
                        <Nav className="d-block">
                            <NavLink className="footer-nav" to="/home">Home</NavLink>
                            <NavLink className="footer-nav" to="/gallery">Gallery</NavLink>
                            <NavLink className="footer-nav" to="/courses">Courses</NavLink>
                            <NavLink className="footer-nav" to="/about">About us</NavLink>
                        </Nav>
                    </Col>

                    {/* contact area here */}
                    <Col md={2} className="p-3">
                        <h5 className="pb-2">Contact</h5>
                        <div>
                            <p>Brahmanbaria, Sharail <br /> <b>Bangladesh</b> </p>
                            <small>photowala@gmail.com</small>
                            <h5>+880 19001126</h5>
                        </div>
                    </Col>

                    {/* get update area here */}
                    <Col md={4} className="p-3">
                        <h5 className="pb-2">Get our latest update</h5>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Enter your email" />
                                <Button variant="outline-light" className="mt-3 w-100">SUBSCRIBE</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                {/* copyright title here */}
                <small className="text-center">&copy; All the right's are reserved by <span>PhotoWala</span></small>
            </Container >
        </div >
    );
};

export default Footer;