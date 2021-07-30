import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ coin }) => {
  const arrayToOptions = {
    paymentType: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
    tag: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
  };
  return (
    <form>
      <label htmlFor="input-value">
        Valor:
        <input id="input-value" type="text" name="name" />
      </label>
      <label htmlFor="describe-input">
        Descrição:
        <input id="describe-input" type="text" name="name" />
      </label>
      <label htmlFor="select-coin">
        Moedas:
        <select id="select-coin">
          {coin.map((e) => <option value={ e } key={ e }>{e}</option>)}
        </select>
      </label>
      <label htmlFor="select-payment">
        Método de pagamento:
        <select id="select-payment">
          {arrayToOptions
            .paymentType.map((e) => <option value={ e } key={ e }>{e}</option>)}
        </select>
      </label>
      <label htmlFor="select-tag">
        Tag:
        <select id="select-tag">
          {arrayToOptions
            .tag.map((e) => <option value={ e } key={ e }>{e}</option>)}
        </select>
      </label>
    </form>
  );
};

Form.propTypes = {
  coin: PropTypes.arrayOf(PropTypes.string),
};

Form.defaultProps = {
  coin: ['BRL'],
};

export default Form;
