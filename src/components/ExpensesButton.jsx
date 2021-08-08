import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesButton extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button onClick={ handleClick } type="button">Adicionar despesa</button>
    );
  }
}

ExpensesButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ExpensesButton;
