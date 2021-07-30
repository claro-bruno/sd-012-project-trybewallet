import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputValue from './InputValue';
import InputDescription from './InputDescription';
import InputCurrency from './InputCurrency';
import InputPayment from './InputPayment';
import InputTag from './InputTag';
import { addExpenses } from '../actions';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      currencies: '',
      valor: 0,
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.getCurrencies = this.getCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const results = await response.json();
      const filter = Object.keys(results).filter((currencies) => currencies !== 'USDT');
      this.setState({
        currencies: filter,
      });
      return results;
    } catch (error) {
      this.setState({
        currencies: error,
      });
    }
  }

  handleChange({ target }) {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [id]: value });
  }

  async handleClick() {
    const { valor, description, currency, paymentMethod, tag, id } = this.state;
    const { addExpenseAction } = this.props;
    const expenses = {
      id,
      value: valor,
      description,
      currency,
      method: paymentMethod,
      tag,
      exchangeRates: await this.getCurrencies(),
    };
    addExpenseAction(expenses);
    this.setState((previus) => ({
      id: previus.id + 1,
    }));
  }

  render() {
    const { currencies, valor, description, currency, paymentMethod, tag } = this.state;
    return (
      <section>
        <form>
          <InputValue value={ valor } handleChange={ this.handleChange } />
          <InputDescription value={ description } handleChange={ this.handleChange } />
          <InputCurrency
            value={ currency }
            currencies={ currencies }
            handleChange={ this.handleChange }
          />
          <InputPayment value={ paymentMethod } handleChange={ this.handleChange } />
          <InputTag value={ tag } handleChange={ this.handleChange } />
          <button type="button" onClick={ this.handleClick }>
            Adicionar despesa
          </button>
        </form>
        <Link to="/">
          <button type="button">Voltar</button>
        </Link>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseAction: (payload) => dispatch(addExpenses(payload)),
});

ExpenseForm.propTypes = {
  currency: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
