import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.showCurrencies = this.showCurrencies.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;

    return this.setState({
      [name]: value,
    }, () => console.log(this.state));
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
        <select
          name="currency"
          id="input-currency"
          aria-label="Moeda"
          onChange={ this.handleChange }
        >
          {filteredCurrencies.map((currencieName) => (
            <option
              key={ currencieName }
            >
              { currencieName }
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderHeader() {
    const { email } = this.props;
    return (
      <header>
        <p>
          Email:
          <span data-testid="email-field">{` ${email} `}</span>
          Despesa Total: R$
          <span data-testid="total-field">{0}</span>
          <span data-testid="header-currency-field"> BRL</span>
        </p>
      </header>
    );
  }

  renderPage() {
    return (
      <div>
        {this.renderHeader()}
        <form>
          <label htmlFor="value">
            Valor
            <input id="value" name="value" type="number" onChange={ this.handleChange } />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              name="description"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          {this.showCurrencies()}
          <label htmlFor="method">
            Método de pagamento
            <select
              id="method"
              aria-label="Método de pagamento"
              onChange={ this.handleChange }
              name="method"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag" onChange={ this.handleChange } name="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <button type="button">Adicionar despesa</button>
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
