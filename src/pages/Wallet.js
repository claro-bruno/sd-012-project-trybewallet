/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoins } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: '',
    };

    this.getCurrency = this.getCurrency.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  async getCurrency() {
    const { coinsApi } = this.props;
    await coinsApi();
    // eslint-disable-next-line react/prop-types
    const { wallet } = this.props;
    const currency = Object.keys(wallet);
    const formattedCurrency = currency.filter((item) => item !== 'USDT');
    this.setState({
      currency: formattedCurrency,
    });
  }

  render() {
    const { email } = this.props;
    const { currency } = this.state;
    return (
      <div>
        <header>
          <p>
            E-mail:
            <span data-testid="email-field">
              { email }
            </span>
          </p>
          <p>
            Despesa Total: R$
            <span data-testid="total-field"> 0 </span>
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
        <form>
          <label htmlFor="preco">
            Valor
            <input id="preco" type="number" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              { currency.length ? currency
                .map((item) => <option key={ item }>{ item }</option>) : '' }
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <label htmlFor="descricao">
            Descrição
            <input id="descricao" type="text" />
          </label>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  coinsApi: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  coinsApi: (state) => dispatch(getCoins(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
