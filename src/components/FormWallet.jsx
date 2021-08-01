import React from 'react';
import PropTypes from 'prop-types';
import LabelValor from './LabelValor';

function FormWallet(props) {
  const { currency,
    moedas, value, description, tag, method, handleChange, submit } = props;
  return (
    <form>
      <LabelValor value={ value } handleChange={ handleChange } />
      <label htmlFor="desc">
        Descrição:
        <input
          id="desc"
          type="text"
          name="description"
          value={ description }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="Moeda">
        Moeda:
        <select
          role="combobox"
          id="Moeda"
          name="currency"
          value={ currency }
          onChange={ handleChange }
        >
          {moedas.map((m, i) => <option key={ i } value={ m }>{ m }</option>)}
        </select>
      </label>
      <label htmlFor="metodo">
        Método de pagamento:
        <select id="metodo" name="method" value={ method } onChange={ handleChange }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="despesa">
        Tag:
        <select id="despesa" name="tag" value={ tag } onChange={ handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
      </label>
      <button type="button" onClick={ submit }>Adicionar despesa</button>
    </form>
  );
}

export default FormWallet;

FormWallet.propTypes = {
  currency: PropTypes.string,
  description: PropTypes.string,
}.isRequired;
