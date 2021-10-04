import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const AllCourse = (props) => {
    // destructuring data here 
    const { name, img, price, rating, enroll } = props.course;

    return (
        <div>
            <Col>
                {/* card */}
                <Card className="text-start">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h6>Price: {price} BDT</h6>
                        <p>Enroll: {enroll}</p>
                        {/* dynamic rating here  */}
                        <Rating
                            style={{ color: "#dd2c00" }}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            initialRating={rating}
                            readonly
                        />
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllCourse;