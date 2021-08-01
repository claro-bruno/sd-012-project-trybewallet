import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchApi from '../actions/fetchApi';
import addExpenses from '../actions/addExpenses';

class ExpenseIpunt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
      id: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputValue = this.inputValue.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
    this.selectCurrency = this.selectCurrency.bind(this);
    this.selectMethod = this.selectMethod.bind(this);
    this.selectTag = this.selectTag.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { setFetchApi, currencies, setExpenses } = this.props;

    await setFetchApi();

    await this.setState({
      exchangeRates: currencies,
    });

    await setExpenses(this.state);

    this.updateState();
  }

  updateState() {
    this.setState((prevState) => ({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Outro',
      exchangeRates: {},
      id: prevState.id + 1,
    }));
  }

  inputValue() {
    return (
      <label htmlFor="value">
        Valor
        <input
          type="text"
          id="value"
          name="value"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          name="description"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  selectCurrency() {
    const { currencies } = this.props;

    const currenciesFiltered = Object.keys(currencies)
      .filter((currency) => currency !== 'USDT');

    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          onChange={ this.handleChange }
        >
          { currenciesFiltered.map((currency) => (
            <option key={ currency } value={ currency }>{ currency }</option>
          ))}
        </select>
      </label>
    );
  }

  selectMethod() {
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          onChange={ this.handleChange }
        >
          { methods.map((method) => (
            <option key={ method } value={ method }>{ method }</option>
          ))}
        </select>
      </label>
    );
  }

  selectTag() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde', 'Outro'];

    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          onChange={ this.handleChange }
        >
          { tags.map((tag) => (
            <option key={ tag } value={ tag }>{ tag }</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.inputValue() }
        { this.inputDescription() }
        { this.selectCurrency() }
        { this.selectMethod() }
        { this.selectTag() }
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setFetchApi: () => dispatch(fetchApi()),
  setExpenses: (expense) => dispatch(addExpenses(expense)),
});

ExpenseIpunt.propTypes = ({
  currencies: PropTypes.arrayOf(Object).isRequired,
  setFetchApi: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseIpunt);
