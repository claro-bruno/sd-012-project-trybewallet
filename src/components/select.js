import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ coin, paymentType, tagArray, currency, payment, tag }) => (
  <>
    <label htmlFor="select-coin">
      Moedas:
      <select id="select-coin" onChange={ ({ target }) => currency(target.value) }>
        {coin.map((e) => <option value={ e } key={ e }>{e}</option>)}
      </select>
    </label>
    <label htmlFor="select-payment">
      Método de pagamento:
      <select id="select-payment" onChange={ ({ target }) => payment(target.value) }>
        {paymentType.map((e) => <option value={ e } key={ e }>{e}</option>)}
      </select>
    </label>
    <label htmlFor="select-tag">
      Tag:
      <select id="select-tag" onChange={ ({ target }) => tag(target.value) }>
        {tagArray.map((e) => <option value={ e } key={ e }>{e}</option>)}
      </select>
    </label>
  </>
);

Select.propTypes = {
  coin: PropTypes.arrayOf(PropTypes.string),
  paymentType: PropTypes.arrayOf(PropTypes.string),
  tagArray: PropTypes.arrayOf(PropTypes.string),
  currency: PropTypes.func.isRequired,
  payment: PropTypes.func.isRequired,
  tag: PropTypes.func.isRequired,
};

Select.defaultProps = {
  coin: [],
  paymentType: [],
  tagArray: [],
};

export default Select;
