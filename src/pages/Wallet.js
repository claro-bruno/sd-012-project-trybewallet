import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.showCurrencies = this.showCurrencies.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    const { dispatchCurrencies } = this.props;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((allCurrencies) => dispatchCurrencies(allCurrencies));
  }

  showCurrencies() {
    const { currencies } = this.props;
    const currencieNames = Object.keys(currencies);
    const filteredCurrencies = currencieNames
      .filter((currencie) => currencie !== 'USDT');

    return (
      <label htmlFor="input-currency">
        Moeda
        <select name="Moeda" id="input-currency" aria-label="Moeda">
          {filteredCurrencies.map((currencieName) => (
            <option
              key={ currencieName }
              value={ currencieName }
            >
              { currencieName }
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderPage() {
    const { currencies } = this.props;
    const { email } = this.props;
    return (
      <div>
        <header>
          <p>
            Email:
            <span data-testid="email-field">{` ${email} `}</span>
            Despesa Total: R$
            <span data-testid="total-field">{0}</span>
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
        <form>
          <label htmlFor="input-value">
            Valor
            <input id="input-value" type="number" />
          </label>
          <label htmlFor="input-description">
            Descrição
            <input id="input-description" type="text" />
          </label>
          {(currencies.length === 0) ? null : this.showCurrencies()}
          <label htmlFor="input-payment">
            Método de pagamento
            <select id="input-payment" aria-label="Método de pagamento">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartao-de-credito">Cartão de crédito</option>
              <option value="cartao-de-debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-category">
            Tag
            <select id="input-category" aria-label="Tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => (
  { email: state.user.email,
    currencies: state.wallet.currencies,
  });

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: (currencies) => dispatch(getCurrencies(currencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
