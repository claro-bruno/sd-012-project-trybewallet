import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.addExpanse = this.addExpanse.bind(this);

    this.state = {
      coinsList: [],
      id: 0,
      value: 0,
      description: [],
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    };
  }

  componentDidMount() {
    window.addEventListener('load', this.fetchCoinAPI());
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchCoinAPI() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const coins = await fetch(url)
      .then((response) => response.json())
      .then((data) => Object.keys(data))
      .then((coinsList) => this.setState({
        coinsList,
      }));
    return coins;
  }

  addExpanse() {
    const { getState } = this.props;
    const { currency, description, id, method, tag, value } = this.state;

    const objState = {
      currency,
      description,
      id,
      method,
      tag,
      value,
    };

    getState(objState);

    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  renderExpenseInput() {
    const { value } = this.state;
    return (
      <label htmlFor="Valor">
        Valor
        <input
          value={ value }
          name="value"
          onChange={ this.handleChange }
          type="number"
          id="Valor"
          placeholder="Coloque aqui a sua despesa."
        />
      </label>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="Descrição">
        Descrição
        <input
          id="Descrição"
          placeholder="Coloque aqui a descrição da sua despesa."
          onChange={ this.handleChange }
          value={ description }
          name="description"
        />
      </label>
    );
  }

  renderCoinSelect() {
    const { currency, coinsList } = this.state;

    const filteredCointList = coinsList.filter((item) => item !== 'USDT');

    return (
      <label htmlFor="Moeda">
        Moeda
        <select
          id="Moeda"
          alt="Moeda"
          onChange={ this.handleChange }
          name="currency"
          value={ currency }
        >
          {filteredCointList.map((coin) => (
            <option key={ coin }>
              { coin }
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderPayMethodSelect() {
    const { method } = this.state;
    return (
      <label htmlFor="Método de pagamento">
        Método de pagamento
        <select
          id="Método de pagamento"
          alt="Método de pagamento"
          onChange={ this.handleChange }
          value={ method }
          name="method"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>

    );
  }

  renderTagSelect() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          alt="tag"
          onChange={ this.handleChange }
          name="tag"
          value={ tag }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        {this.renderExpenseInput()}
        {this.renderDescriptionInput()}
        {this.renderCoinSelect()}
        {this.renderPayMethodSelect()}
        {this.renderTagSelect()}
        <button
          type="button"
          onClick={ this.addExpanse }
        >
          adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getState: (currencies) => dispatch(fetchCurrencies(currencies)),
});

export default connect(null, mapDispatchToProps)(WalletForm);

WalletForm.propTypes = {
  getState: PropTypes.func,
}.isRequired;
