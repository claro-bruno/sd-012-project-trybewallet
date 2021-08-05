import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExpenses } from '../actions/index';
import CurrencySelect from './CurrencySelect';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      tag: 'Lazer',
      method: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.requestExchangeRate = this.requestExchangeRate.bind(this);
  }

  componentDidMount() {
    this.requestExchangeRate();
  }

  onSubmitForm() {
    const { dispatchSetExpense } = this.props;
    dispatchSetExpense(this.state);
    this.setState((estadoAnterior) => ({
      id: estadoAnterior.id + 1,
    }));
  }

  async requestExchangeRate() {
    const apiList = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await apiList.json();
    this.setState({
      exchangeRates: currencies,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className="bg-light pl-2">
        <label className="ml-1" htmlFor="value">
          Valor:
          <input name="value" type="number" id="value" onChange={ this.handleChange } />
        </label>
        <label className="ml-1" htmlFor="description">
          Descrição:
          <input name="description" id="description" onChange={ this.handleChange } />
        </label>
        <CurrencySelect handleChange={ this.handleChange } />
        <label className="ml-1" htmlFor="payment">
          Método de pagamento:
          <select onChange={ this.handleChange } name="method" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label className="ml-1" htmlFor="payment">
          Tag:
          <select onChange={ this.handleChange } name="tag" id="payment">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          onClick={
            () => this.onSubmitForm()
          }
          type="button"
          className="btn btn-primary"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetExpense: (expenses) => dispatch(getExpenses(expenses)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

WalletForm.propTypes = {
  dispatchSetExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
