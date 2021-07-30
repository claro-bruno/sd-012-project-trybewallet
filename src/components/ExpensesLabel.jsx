import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesLabel extends Component {
  render() {
    const { html, text, type } = this.props;
    return (
      <label htmlFor={ html }>
        { text }
        <input
          type={ type }
        />
      </label>
    );
  }
}

ExpensesLabel.propTypes = {
  html: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ExpensesLabel;
