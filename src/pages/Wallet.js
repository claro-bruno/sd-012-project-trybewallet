import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.expenseAmount = this.expenseAmount.bind(this);
    this.expenseDescription = this.expenseDescription.bind(this);
    this.selectCurrency = this.selectCurrency.bind(this);
    this.paymentMethod = this.paymentMethod.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  expenseAmount() {
    return (
      <label htmlFor="input-value">
        Valor
        <input
          id="input-value"
          placeholder="adicionar valor da despesa"
        />
      </label>
    );
  }

  expenseDescription() {
    return (
      <label htmlFor="input-description">
        Descrição
        <input
          id="input-description"
          placeholder="adicionar a descrição da despesa"
        />
      </label>
    );
  }

  selectCurrency() {
    const { wallet: { currencies } } = this.props;
    return (
      <label htmlFor="input-currency">
        Moeda
        <select
          id="input-currency"
          placeholder="adicionar moeda"
        >
          { Object.values(currencies).map((currencie, index) => (
            <option value={ currencie } key={ index }>
              {currencie}
            </option>
          )) }
        </select>
      </label>
    );
  }

  paymentMethod() {
    return (
      <label htmlFor="input-payment">
        Método de pagamento
        <select
          id="input-payment"
          placeholder="método de pagamento"
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  selectCategory() {
    return (
      <label htmlFor="input-select-category">
        Tag
        <select
          id="input-select-category"
          placeholder="método de pagamento"
        >
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
    const { user: { email } } = this.props;
    const teste = 0;
    return (
      <div>
        <header>
          TrybeWallet
          <p data-testid="email-field">{`email: ${email}`}</p>
          <p data-testid="total-field">{teste}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          { this.expenseAmount() }
          { this.expenseDescription() }
          { this.selectCurrency() }
          { this.paymentMethod() }
          { this.selectCategory() }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ])),
  }).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
