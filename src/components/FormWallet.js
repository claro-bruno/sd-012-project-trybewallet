import React from 'react';
import PropTypes from 'prop-types';
import InputCurrency from './FormComponents/Currency';
import InputDescription from './FormComponents/Description';
import InputMethod from './FormComponents/Method';
import InputValue from './FormComponents/Value';
import InputTag from './FormComponents/Tag';

function FormWallet(props) {
  const { coin, value, description, currency, handleChange, method, tag } = props;
  return (
    <form>
      <InputValue value={ value } handleChange={ handleChange } />
      <InputDescription description={ description } handleChange={ handleChange } />
      <InputMethod method={ method } handleChange={ handleChange } />
      <InputTag tag={ tag } handleChange={ handleChange } />
      <InputCurrency currency={ currency } handleChange={ handleChange } coin={ coin } />
    </form>
  );
}

export default FormWallet;

FormWallet.propTypes = {
  coin: PropTypes.func,
  value: PropTypes.string,
  description: PropTypes.string,
  currency: PropTypes.string,
  handleChange: PropTypes.func,
  method: PropTypes.string,
  tag: PropTypes.string,
}.isRequired;
