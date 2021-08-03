import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExpenses } from '../actions/index';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      expenses: [],
    };
    this.fetchApi = this.fetchApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  onSubmitForm(array) {
    const expense = {
      id: array[5].length,
      value: array[0],
      description: array[1],
      currency: array[2] || 'USD',
      method: array[3] || 'Dinheiro',
      tag: array[4] || 'Alimentação',
    };
    array[5].push(expense);
    console.log(array[5]);
    const { dispatchSetExpense } = this.props;
    const { expenses } = this.state;
    dispatchSetExpense(expenses);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async fetchApi() {
    const apiList = await fetch('https://economia.awesomeapi.com.br/json/all');
    const a = await apiList.json();
    const currencies = Object.keys(a);
    const currenciesFiltered = currencies.filter((currency) => currency !== 'USDT');
    this.setState({
      currencies: currenciesFiltered,
    });
  }

  render() {
    const { currencies } = this.state;
    const { value, description, currency, method, tag, expenses } = this.state;
    return (
      <form className="bg-light pl-2">
        <label className="ml-1" htmlFor="value">
          Valor:
          <input name="value" id="value" onChange={ this.handleChange } />
        </label>
        <label className="ml-1" htmlFor="description">
          Descrição:
          <input name="description" id="description" onChange={ this.handleChange } />
        </label>
        <label className="ml-1" htmlFor="currency">
          Moeda:
          <select onChange={ this.handleChange } name="currency" id="currency">
            { currencies
              .map((c) => <option key={ c }>{ c }</option>) }
          </select>
        </label>
        <label className="ml-1" htmlFor="payment">
          Método de pagamento:
          <select onChange={ this.handleChange } name="payment" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label className="ml-1" htmlFor="payment">
          Tag:
          <select onChange={ this.handleChange } name="payment" id="payment">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          onClick={
            () => this.onSubmitForm([value, description, currency, method, tag, expenses])
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
