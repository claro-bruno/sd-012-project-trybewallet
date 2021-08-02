import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesLabel extends Component {
  render() {
    const { html, text, type, onChange, value, name } = this.props;
    return (
      <label htmlFor={ html }>
        { text }
        <input
          type={ type }
          id={ html }
          onChange={ onChange }
          value={ value }
          name={ name }
        />
      </label>
    );
  }
}

ExpensesLabel.propTypes = {
  html: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string.isRequired,
};

ExpensesLabel.defaultProps = {
  value: 'Not found',
};

export default ExpensesLabel;
