import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCoins, fetchCoins, addExpenses } from '../actions';
import NumberInput from './NumberInput';
import DescriptionInput from './DescriptionInput';

class FormDespesas extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      description: '',
      moeda: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
      response: {},
    };
    this.getCoinInfo = this.getCoinInfo.bind(this);
    this.change = this.change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getCoinInfo();
  }

  getCoinInfo() {
    const { fetchTheCoins, getTheCoins } = this.props;
    fetchTheCoins();
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((res) => res.json())
      .then((response) => getTheCoins(Object.keys(response)));
  }

  change({ target }) {
    this.setState({ [target.name]: target.value });
  }

  async fetchExchangeRate() {
    const res = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await res.json();
    await this.setState({ response });
  }

  async handleSubmit() {
    await this.fetchExchangeRate();
    const { addExpense } = this.props;
    const expense = { ...this.state };
    addExpense(expense);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      valor: 0,
      description: '',
      moeda: '',
      payment: '',
      tag: '',
      response: {},
    }));
  }

  render() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const paymentType = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { valor, description, moeda, payment, tag } = this.state;
    const { coins, isFetching } = this.props;
    if (isFetching) {
      return <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="carregando" />;
    }
    return (
      <form>
        <NumberInput valor={ valor } onChange={ this.change } />
        <DescriptionInput description={ description } onChange={ this.change } />
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda" value={ moeda } onChange={ this.change }>
            {coins && coins.filter((coin) => coin !== 'USDT')
              .map((option, i) => <option key={ i }>{option}</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" name="payment" value={ payment } onChange={ this.change }>
            {paymentType.map((option, index) => <option key={ index }>{option}</option>)}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" value={ tag } onChange={ this.change }>
            {tags.map((option, index) => <option key={ index }>{option}</option>)}
          </select>
        </label>
        <button type="button" onClick={ this.handleSubmit }>Adicionar Despesa</button>
      </form>
    );
  }
}

FormDespesas.propTypes = {
  getTheCoins: PropTypes.func.isRequired,
  fetchTheCoins: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  coins: PropTypes.arrayOf(String).isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getTheCoins: (currencies) => dispatch(getCoins(currencies)),
  fetchTheCoins: () => dispatch(fetchCoins()),
  addExpense: (expense) => dispatch(addExpenses(expense)),
});

const mapStateTopProps = (state) => ({
  coins: state.wallet.coins,
  isFetching: state.wallet.isFetching,
  total: state.wallet.total,
});

export default connect(mapStateTopProps, mapDispatchToProps)(FormDespesas);
