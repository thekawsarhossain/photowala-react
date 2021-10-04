import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Testimonial></Testimonial> */}
            <Courses></Courses>

        </div>
    );
};

export default Home;