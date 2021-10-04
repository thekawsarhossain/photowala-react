import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AllCourse from '../AllCourse/AllCourse';
import useCourses from '../hooks/useCourses';

const AllCourses = () => {
    const [courses] = useCourses();

    return (
        <div>
            <Container className="mt-5 pt-5">
                <h1>Courses</h1>
                <Row md={3} className="g-4 my-4">
                    {
                        courses.map(course => <AllCourse
                            key={course.id}
                            course={course}
                        >
                        </AllCourse>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllCourses;