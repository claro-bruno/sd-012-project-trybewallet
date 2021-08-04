/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../actions';
import CurrenciesForm from './CurrenciesForm';

class WalletForm extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { currency } = this.props;
    currency();
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" id="valor" onChange={ this.onChange } />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" id="descricao" onChange={ this.onChange } />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" onChange={ this.onChange }>
            <CurrenciesForm />
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select id="pagamento" onChange={ this.onChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.onChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispacth) => ({
  currency: () => dispacth(fetchApi()),
});

WalletForm.propTypes = {
  currency: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WalletForm);
