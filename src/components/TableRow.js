import React from 'react';
import PropTypes from 'prop-types';

class TableRow extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <tr>
        { content.map((item, index) => <td key={ index }>{ item }</td>) }
      </tr>
    );
  }
}

TableRow.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element,
    ]),
  ).isRequired,
};

export default TableRow;