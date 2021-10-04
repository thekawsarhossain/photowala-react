import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../images/11.jpg';

const About = () => {
    return (
        <div className="mt-5 pt-5">
            <Container>
                <h1>About us</h1>
                <Row className="my-5">
                    <Col md={7}>
                        <img className="img-thumbnail" src={image} alt="" />
                    </Col>
                    <Col md={5} className="text-start">
                        <h2>Let's Introduce Ourself</h2>
                        <p>PhotoWala is a well-known Online Photographic Institute. We try to give the best education and the actual knowledge about photography! we have ten professional photographers they have very good knowledge about photography and all our teacher are very friendly, they teach our student's like they are also a beginner. They try to give their best because we belive in learning.we also provide the certificate after the course is finished</p>
                        <Link to="/courses"><Button variant="outline-dark" size="lg">Enroll Now</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;

