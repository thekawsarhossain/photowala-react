import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import useCourses from '../hooks/useCourses';

const Courses = () => {
    const [courses] = useCourses();
    const fourCourses = courses.slice(0, 6);

    return (
        <div className="mt-5 pt-5 text-start">
            <Container>
                <Row md={3} className="g-4">
                    {
                        fourCourses.map(course => <Course
                            key={course.id}
                            course={course}
                        >
                        </Course>)
                    }
                </Row>
                <Link to="/courses">
                    <Button className="mt-4" variant="outline-dark">all courses</Button>
                </Link>
            </Container>
        </div>
    );
};

export default Courses;