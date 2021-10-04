import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImg from '../../images/one .jpg';

const Banner = () => {
    return (
        <div className="mt-5 pt-5 text-start">
            <Container>
                <Row>
                    <Col md={5}>
                        <h1 className="display-1 text-uppercase fw-bold">im<span>a</span>ges <br />Mat<span>t</span>er</h1>
                        <p className="w-75">Photography is way to freeze time and to capture the moments that were happy and healthy! That's way our intention is to make you a extreme photographer.</p>
                        <Link to="/courses"><Button variant="outline-dark" size="lg">Enroll Now</Button></Link>
                    </Col>
                    <Col md={7} className="p-3">
                        <img className="img-thumbnail" src={bannerImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;