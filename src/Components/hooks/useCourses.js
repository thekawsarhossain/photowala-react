import { useState, useEffect } from 'react'

const useCourses = () => {
    // state here
    const [courses, setCourses] = useState([]);

    // use effect here
    useEffect(() => {
        fetch('/courses.JSON')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, []);
    return [courses];
}

export default useCourses;