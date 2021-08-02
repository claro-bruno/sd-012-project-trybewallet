import React from 'react';
import PropTypes from 'prop-types';

class TableRow extends React.Component {
  render() {
    const { content, isHeader } = this.props;
    return( isHeader ? (
      <tr>
        { content.map((item, index) => <th key={ index }>{ item }</th>) }
      </tr>
    )
      : (
        <tr>
        { content.map((item, index) => <td key={ index }>{ item }</td>) }
         </tr>
        )
      )
  }
}

TableRow.defaultProps = {
  isHeader: false,
};

TableRow.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element,
    ]),
  ).isRequired,
  isHeader: PropTypes.bool,
};

export default TableRow;
