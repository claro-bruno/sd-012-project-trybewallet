/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi, addExpense } from '../actions';
import CurrenciesForm from './CurrenciesForm';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.onChange = this.onChange.bind(this);
    this.handerClick = this.handerClick.bind(this);
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

  handerClick() {
    const { id } = this.state;
    const { newExpense } = this.props;
    this.setState({ id: id + 1 });
    newExpense(this.state);
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" onChange={ this.onChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.onChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" onChange={ this.onChange }>
            <CurrenciesForm />
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" name="method" onChange={ this.onChange }>
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Dinehiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ this.onChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handerClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispacth) => ({
  currency: () => dispacth(fetchApi()),
  newExpense: (expense) => dispacth(addExpense(expense)),
});

WalletForm.propTypes = {
  currency: PropTypes.func.isRequired,
  newExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WalletForm);
