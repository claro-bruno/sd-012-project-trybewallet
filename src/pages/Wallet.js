import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserEmail } from '../redux/actions';
// import './Login.css'

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalValue: 0,
      selectedCurrency: 'BRL',
      currencies: [],
      onLoading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.expenseForm = this.expenseForm.bind(this);
    this.walletHeader = this.walletHeader.bind(this);
  }

  componentDidMount() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const forbidenCurrencies = ['USDT'];
    fetch(url)
      .then((response) => response.json())
      .then((elmt) => this.setState({
        onLoading: false,
        currencies: [
          ...Object.keys(elmt).filter((e) => !forbidenCurrencies.includes(e))],
      }));
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.btnStats);
  }

  createSelectInput(id, text, options) {
    return (
      <label htmlFor={ id }>
        { text }
        <select id={ id }>
          {options.map((opt, i) => <option key={ i } value={ opt }>{ opt }</option>)}
        </select>
      </label>
    );
  }

  walletHeader() {
    const { totalValue, selectedCurrency } = this.state;
    const { userEmail } = this.props;
    return (
      <header>
        <p>BEM-VINDO</p>
        <p>
          {'Usuário: '}
          <span data-testid="email-field">{userEmail}</span>
        </p>
        <p>
          {'Sua despesa total é: '}
          <span data-testid="total-field">{totalValue}</span>
          {' '}
          <span data-testid="header-currency-field">{selectedCurrency}</span>
        </p>
      </header>
    );
  }

  loadingDiv() {
    return (
      <div>
        LOADING...
      </div>
    );
  }

  expenseForm() {
    const { currencies } = this.state;
    return (
      <form>
        <label htmlFor="expenseValue">
          Valor:
          <input type="number" id="expenseValue" />
        </label>
        <label htmlFor="expenseDescription">
          Descrição:
          <input type="text" id="expenseDescription" />
        </label>
        {this.createSelectInput('expenseCurrency', 'Moeda: ', currencies)}
        <label htmlFor="paymentMethods">
          Método de pagamento:
          <select id="paymentMethods">
            <option value=" ">Dinheiro</option>
            <option value=" ">Cartão de crédito</option>
            <option value=" ">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag">
            <option value=" ">Alimentação</option>
            <option value=" ">Lazer</option>
            <option value=" ">Trabalho</option>
            <option value=" ">Transporte</option>
            <option value=" ">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { walletHeader, expenseForm, loadingDiv } = this;
    const { onLoading } = this.state;
    return (
      <>
        { walletHeader() }
        { onLoading && loadingDiv() }
        { !onLoading && expenseForm() }
      </>
    );
  }
}

Wallet.propTypes = {
  getUser: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    userEmail: state.user.email,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUser: (email) => dispatch(getUserEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
