import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import './CourseList.css';

const CourseList = ({listCourses}) => {
    return ( 
        <table id="CourseList">
            <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses" textSecondCell={null} />
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
                {
                listCourses.length === 0 ? 
                <CourseListRow isHeader={false} textFirstCell="No course available yet" textSecondCell={null} /> 

                : listCourses.map(({ id, name, credit }) => 
                <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)}
                {/*<CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
                <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20" />
                <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40" />*/}
            </tbody>
        </table>
     );
}
 
CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
};
CourseList.defaultProps = {
    listCourses: []
};


export default CourseList;