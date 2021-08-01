import React from 'react';
import PropTypes from 'prop-types';
import LabelValor from './LabelValor';
import LabelTag from './LabelTag';
import LabelMethod from './LabelMethod';
import LabelMoeda from './LabelMoeda';
import LabelDescricao from './LabelDescricao';

function FormWallet(props) {
  const { currency,
    moedas, value, description, tag, method, handleChange, submit } = props;
  return (
    <form className="form-inline">
      <LabelValor value={ value } handleChange={ handleChange } />
      <LabelDescricao handleChange={ handleChange } description={ description } />
      <LabelMoeda handleChange={ handleChange } moedas={ moedas } moeda={ currency } />
      <LabelMethod handleChange={ handleChange } method={ method } />
      <LabelTag handleChange={ handleChange } tag={ tag } />
      <button type="button" onClick={ submit }>Adicionar despesa</button>
    </form>
  );
}

export default FormWallet;

FormWallet.propTypes = {
  currency: PropTypes.string,
  description: PropTypes.string,
}.isRequired;
