import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCoins, fetchCoins } from '../actions';

class FormDespesas extends Component {
  constructor() {
    super();
    this.state = {
      tags: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
      paymentType: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
    };
    this.getCoinInfo = this.getCoinInfo.bind(this);
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

  populateCoins() {

  }

  render() {
    const { tags, paymentType } = this.state;
    const { coins, isFetching } = this.props;
    if (isFetching) {
      return <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="carregando" />;
    }
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input type="text" id="descrição" />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select id="Moeda">
            {coins && coins.filter((coin) => coin !== 'USDT')
              .map((option, i) => <option key={ i }>{option}</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            {paymentType.map((option, index) => <option key={ index }>{option}</option>)}
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select id="Tag">
            {tags.map((option, index) => <option key={ index }>{option}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

FormDespesas.propTypes = {
  getTheCoins: PropTypes.func.isRequired,
  fetchTheCoins: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  coins: PropTypes.arrayOf(String).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getTheCoins: (currencies) => dispatch(getCoins(currencies)),
  fetchTheCoins: () => dispatch(fetchCoins()),
});

const mapStateTopProps = (state) => ({
  coins: state.wallet.coins,
  isFetching: state.wallet.isFetching,
});

export default connect(mapStateTopProps, mapDispatchToProps)(FormDespesas);
