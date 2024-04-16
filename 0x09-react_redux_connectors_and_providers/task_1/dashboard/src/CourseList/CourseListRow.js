import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { useState } from "react";


function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const headerStyle = { backgroundColor: "#deb5b545" };
  const rowStyle = { backgroundColor: "#f5f5f5ab" };
  const selectedStyle = isHeader ? headerStyle : rowStyle;
  const [checked, setChecked] = useState(false);

  const handleChangeState = () => {
    setChecked(!checked);
  }
  return (
    <tr style={selectedStyle} className={checked? css(listRowStyles.rowChecked): ""}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(listRowStyles.thcenter)}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(listRowStyles.th)}>{textFirstCell}</th>
            <th className={css(listRowStyles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(listRowStyles.td)}>
          <input type="checkbox" onChange={handleChangeState} />
            {textFirstCell}
            </td>
          <td className={css(listRowStyles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

const listRowStyles = StyleSheet.create({
  thcenter: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'center'
  },
  th: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'left'
  },
  td: {
    paddingLeft: 3
  },
  rowChecked:  {
    backgroundColor: '#e6e4e4'
  }
});

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
