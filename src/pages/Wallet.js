import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencyThunk } from '../actions';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currencies: [],
  //     loading: false,
  //   };
  // }

  componentDidMount() {
    const { importedCurrencies } = this.props;
    importedCurrencies();
  }

  render() {
    const { user, currencies } = this.props;

    return (
      <div>
        <header>
          <p data-testid="email-field">{ user.email }</p>
          <p>Valor total</p>
          <p data-testid="total-field">0</p>
          <p>Câmbio Utilizado</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select type="text" name="currency" id="currency">
              {
                currencies.map((cur) => (<option key={ cur }>{ cur }</option>))
              }
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select type="text" name="payment" id="payment">
              <option value="cash">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit-card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Tag
            <select type="text" name="category" id="category">
              <option value="food">Alimentação</option>
              <option value="fun">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  importedCurrencies: (currency) => dispatch(currencyThunk(currency)),
});

Wallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string }).isRequired,
  currencies: PropTypes.shape.isRequired,
  importedCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
