import React from 'react';
import { Carousel } from 'react-bootstrap';
import ten from '../../images/ten.jpg'
import nine from '../../images/nine.jpg'
import eight from '../../images/eight.jpg'

const Testimonial = () => {
    return (
        <div>
            <Carousel className="bg-dark py-5">
                <Carousel.Item>
                    <img
                        className="w-25"
                        src={ten}
                        alt="First slide"
                    />
                    <Carousel.Caption className="d-block">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-25"
                        src={nine}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="d-block">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-25"
                        src={eight}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="d-block">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Testimonial;