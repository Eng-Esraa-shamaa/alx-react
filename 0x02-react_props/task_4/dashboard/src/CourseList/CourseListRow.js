import React from 'react';
import PropTypes from 'prop-types';
import CourseList from './CourseList';
import './CourseList.css';


const CourseListRow = ({isHeader , textFirstCell, textSecondCell}) => {
    let row;

    if (isHeader === true) {
      //
      if (textSecondCell === null) {
        row = <th colSpan="2">{textFirstCell}</th>;
      } else {
        row = (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        );
      }
      //
    } else if (isHeader === false) {
      row = (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      );
    }
  
    return <tr>{row}</tr>;
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};


export default CourseListRow;