import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useImage from '../hooks/useImage';
import GalleryImage from '../GalleryImage/GalleryImage';

const Gallery = () => {
    const [images] = useImage();
    return (
        <div className="mt-5 pt-5">
            <Container>
                <h1>Gallery</h1>
                <Row md={3} className="my-5">
                    {
                        images.map(image => <GalleryImage GalleryImage
                            key={image.id}
                            images={image}
                        ></GalleryImage>)
                    }
                </Row>
            </Container>
        </div >
    );
};

export default Gallery;