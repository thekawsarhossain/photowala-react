import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className="mt-5 pt-5">
            <Container className=" py-5 border border-danger">
                <h1>404</h1>
                <h6>The Page Isn't Found !</h6>
            </Container>
        </div>
    );
};

export default NotFound;