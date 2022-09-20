import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/AppContext';
import { CourseItem } from './CourseItem';
import { DivisionLine } from './DivisionLine';

const Caption = styled.caption`
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0 3rem;
    color: ${(p) => p.theme.title_color};
`;
const Courses = () => {
    const { state } = useContext(AppContext);

    return (
        <div className="container-fluid">
            <table className="row justify-content-center gy-2 mb-5">
                <Caption className="general-title">Attended Courses</Caption>
                {state.Courses.map((course) => (
                    <CourseItem
                        name={course.name}
                        academy={course.academy}
                        key={course.name}
                    />
                ))}
            </table>
        </div>
    );
};

export { Courses };
