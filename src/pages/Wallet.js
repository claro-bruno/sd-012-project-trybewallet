import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { number } from 'yargs';
import FormExpenses from '../Components/FormExpenses';
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

  render() {
    const { email, despesas } = this.props;
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
            { despesas.reduce((acc, curr) => acc + curr, 0) }
            <div data-testid="header-currency-field">BRL</div>
          </div>
        </header>
        <FormExpenses />
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
