import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoin } from '../actions/index';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.renderPayment = this.renderPayment.bind(this);
    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    this.loadCoin();
  }

  async loadCoin() {
    const { dispatchCoin } = this.props;
    const coinData = await dispatchCoin();
    const coins = Object.keys(coinData.data);
    const filteredCoins = coins
      .filter((item) => item !== 'USDT' && item !== 'DOGE');
    this.setState({ coins: filteredCoins });
  }

  /* renderHeader() {
    return (
      <header>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  } */

  renderPayment() {
    return (
      <label htmlFor="payment">
        Método de pagamento;
        <select id="payment" name="payment">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderCategory() {
    return (
      <label htmlFor="tag">
        Tag;
        <select id="tag" name="tag">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { email } = this.props;
    const { coins } = this.state;
    return (
      <div>
        <Header
          email={ email }
          // expenses={ expenses }
        />
        <form>
          <label htmlFor="input-value">
            Valor
            <input
              type="number"
              id="input-value"
            />
          </label>
          <label htmlFor="input-description">
            Descrição
            <input
              type="text"
              id="input-description"
            />
          </label>
          <label htmlFor="select-coin">
            Moeda
            <select id="select-coin">
              { coins
                .map((item) => <option key={ item }>{item}</option>) }
            </select>
          </label>
          { this.renderPayment() }
          { this.renderCategory() }
        </form>

      </div>
    );
  }
}

Wallet.propTypes = {
  dispatchCoin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchCoin: () => dispatch(fetchCoin()),
});

// const mapStateToProps = (state) => ({
//  email: state.user.email,
// });

export default connect(null, mapDispatchToProps)(Wallet);
