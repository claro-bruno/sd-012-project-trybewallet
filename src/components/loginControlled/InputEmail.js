import React from 'react';
import PropTypes from 'prop-types';
import Input from '../standart/Input';

class InputEmail extends React.Component {
  render() {
    const {
      props: {
        value,
        handleChange,
      },
    } = this;

    const emailValidation = value.includes('@' && '.com');
    const ERROR_EMAIL = 'Email inválido';

    return (
      <Input
        name="email"
        labelText="Email:"
        type="email"
        dataTestId="email-input"
        value={ value }
        handleChange={ handleChange }
        placeholder="Digite o Email"
        validation={ !emailValidation && <span>{ ERROR_EMAIL }</span> }
      />
    );
  }
}

const { string, func, number, oneOfType } = PropTypes;
InputEmail.propTypes = {
  value: oneOfType([
    number,
    string,
  ]).isRequired,
  handleChange: func.isRequired,
};

export default InputEmail;
