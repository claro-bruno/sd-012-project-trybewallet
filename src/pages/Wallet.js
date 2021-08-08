import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { number } from 'yargs';
import FormDespesas from '../Components/formDespesas';
import { newCurrencies } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();
    this.handleAPI = this.handleAPI.bind(this);
  }

  componentDidMount() {
    this.handleAPI();
  }

  handleAPI() {
    const { currenciesDispatch } = this.props;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resposta) => resposta.json())
      .then((moedas) => currenciesDispatch(moedas));
  }

  handleUpdate() {
    const { despesas } = this.props;
    if (despesas.length > 0) {
      const total = despesas.reduce((acc, curr) => {
        const costs = parseFloat(curr.value);
        const { currency, exchangeRates } = curr;
        const convert = exchangeRates[currency].ask * costs;
        return acc + convert;
      }, 0);
      return total;
    }
    return 0;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div>TrybeWallet</div>
          <div data-testid="email-field">
            E-mail:
            { email }
          </div>
          <div data-testid="total-field">
            Despesas totais:
            { this.handleUpdate() }
            <div data-testid="header-currency-field">BRL</div>
          </div>
        </header>
        <FormDespesas />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  despesas: PropTypes.arrayOf(number).isRequired,
  currenciesDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesDispatch: (currencies) => dispatch(newCurrencies(currencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
