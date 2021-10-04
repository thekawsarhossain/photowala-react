import React from 'react';
import { Col } from 'react-bootstrap';

const GalleryImage = (props) => {
    // data destructring here 
    const { image } = props.images;
    return (
        <div>
            <Col className="my-2">
                <img className="img-thumbnail img-style" src={image} alt="" />
            </Col>
        </div>
    );
};

export default GalleryImage;