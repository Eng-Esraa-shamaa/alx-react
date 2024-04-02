import React from 'react';
import PropType from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  CourseList: {
    width: '100%',
    border: '1px solid lightgray',
    textAlign: 'left',
  },
  table: {
    borderCollapse: "collapse",
    border: "1px solid black",
    textAlign: "left",
    width: "100%",
    marginTop: "20px",
    marginbottom: "20px",
  },
  th :{
    borderBottom: "1px solid black",
    padding: "5px",
},
td:{
    textAlign: "left",
},
tbody: {
    border: "1px solid black",
    padding: "30px",
    textAlign: "left",
},
thead: {
  textAlign: "center",
}
});

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" cellPadding="0" cellSpacing="0" className={css(styles.table)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell='Available courses' />
        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell="Credit" />
      </thead>
      <tbody>
        {
        listCourses.length == 0 ?
          <CourseListRow isHeader={false} textFirstCell='No course available yet'/>
        : null
        }
        {
          listCourses.map((val, idx) => {
            return <CourseListRow isHeader={false} textFirstCell={val.name} textSecondCell={val.credit} key={val.id}/>
          })
        }
      </tbody>
    </table>
  );
}

CourseList.defaultProps = {
  listCourses: []
};

CourseList.propType = {
  listCourses: PropType.arrayOf(CourseShape)
};

export default CourseList;