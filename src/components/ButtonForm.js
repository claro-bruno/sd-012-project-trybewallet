import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './buttonForm.css';

class ButtonForm extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button
        className="buttonForm"
        type="button"
        onClick={ onClick }
      >
        Adicionar despesa

      </button>
    );
  }
}

ButtonForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonForm;
