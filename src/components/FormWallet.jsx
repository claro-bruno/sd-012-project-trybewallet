import React from 'react';
import PropTypes from 'prop-types';
import LabelValor from './LabelValor';

function FormWallet(props) {
  const { moeda, moedas, valor, descricao, tag, metodo, handleChange } = props;
  return (
    <form>
      <LabelValor valor={ valor } handleChange={ handleChange } />
      <label htmlFor="desc">
        Descrição:
        <input
          id="desc"
          type="text"
          name="descricao"
          value={ descricao }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="moeda">
        Moeda:
        <select id="moeda" name="moeda" value={ moeda } onChange={ handleChange }>
          {moedas.map((m, i) => <option key={ i } value={ m }>{ m }</option>)}
        </select>
      </label>
      <label htmlFor="metodo">
        Método de pagamento:
        <select id="metodo" name="metodo" value={ metodo } onChange={ handleChange }>
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
    </form>
  );
}

export default FormWallet;

FormWallet.propTypes = {
  moeda: PropTypes.string,
  descricao: PropTypes.string,
}.isRequired;
