import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="mt-5 pt-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <h1 className="display-1">images <br />
                            Matter
                        </h1>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;