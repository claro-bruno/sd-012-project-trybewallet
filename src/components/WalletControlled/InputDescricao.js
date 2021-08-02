import React from 'react';
import PropTypes from 'prop-types';
import Input from '../standart/Input';

class InputDescricao extends React.Component {
  render() {
    const {
      props: {
        value,
        handleChange,
      },
    } = this;

    return (
      <Input
        name="description"
        labelText="Descrição:"
        type="text"
        value={ value }
        handleChange={ handleChange }
        placeholder="Digite a Descrição"
      />
    );
  }
}

const { string, func, number, oneOfType } = PropTypes;
InputDescricao.propTypes = {
  value: oneOfType([
    number,
    string,
  ]).isRequired,
  handleChange: func.isRequired,
};

export default InputDescricao;
