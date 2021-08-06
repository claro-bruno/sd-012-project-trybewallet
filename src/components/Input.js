import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  inputLabel(name) {
    switch (name) {
    case 'value':
      return 'Valor:';
    case 'description':
      return 'Descrição:';
    case 'email':
      return 'Email:';
    case 'password':
      return 'Senha:';
    default:
      return 'Label';
    }
  }

  render() {
    const {
      handleChange,
      type,
      name,
      value,
    } = this.props;
    const label = this.inputLabel(name);

    return (
      <div>
        <label htmlFor={ name }>{ label }</label>
        <input
          id={ name }
          data-testid={ `${name}-input` }
          type={ type }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </div>
    );
  }
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
