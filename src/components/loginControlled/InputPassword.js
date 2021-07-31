import React from 'react';
import PropTypes from 'prop-types';
import Input from '../standart/Input';

class InputPassword extends React.Component {
  render() {
    const {
      props: {
        value,
        handleChange,
      },
    } = this;

    const VALID_CARACTERES = 6;
    const passwordValidation = value.length >= VALID_CARACTERES;
    const ERROR_PASSWORD = 'Password inválido';

    return (
      <Input
        name="password"
        labelText="Password:"
        type="password"
        dataTestId="password-input"
        value={ value }
        handleChange={ handleChange }
        placeholder="Digite a Senha"
        validation={ !passwordValidation && <span>{ ERROR_PASSWORD }</span> }
      />
    );
  }
}

const { string, func, number, oneOfType } = PropTypes;
InputPassword.propTypes = {
  value: oneOfType([
    number,
    string,
  ]).isRequired,
  handleChange: func.isRequired,
};

export default InputPassword;
