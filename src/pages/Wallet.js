import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from '../components/Select';
import InputDescrition from '../components/InputDescription';
import InputExpense from '../components/InputExpense';
import SelectPayment from '../components/SelectPayment';
import InputTag from '../components/InputTag';
// import { storeExpense } from '../actions/actions';
import { totalExpenses } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleExpenses = this.handleExpenses.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  handleExpenses() {
    const { dispatchExpenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const newConst = { value, description, currency, method, tag };
    dispatchExpenses(newConst);
  }

  render() {
    const { userEmail, expenseTotal } = this.props; // vem do Provider ou connect
    const {
      value,
      currency,
      description,
    } = this.state;
    return (
      <section>
        <header>
          <span>
            <p data-testid="email-field">{ `Email: ${userEmail}` }</p>
            <p data-testid="total-field">
              {`Valor: ${parseFloat(expenseTotal).toFixed(2)}` }
            </p>
            <p data-testid="header-currency-field">
              Moeda: BRL
            </p>
          </span>
        </header>
        <section>
          <form>
            <InputExpense value={ value } onChange={ this.handleChange } />
            <InputDescrition
              value={ description }
              onChange={ this.handleChange }
            />
            <Select
              value={ currency }
              onChange={ this.handleChange }
            />
            <InputTag
              onChange={ this.handleChange }
            />
            <SelectPayment
              onChange={ this.handleChange }
            />
            <button
              type="button"
              onClick={ this.handleExpenses }
            >
              Adicionar despesa
            </button>
          </form>
        </section>
      </section>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string,
  dispatchExpenses: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchExpenses: (value) => dispatch(totalExpenses(value)),
});

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenseTotal: state.wallet.expenses
    .reduce((acc, { exchangeRates, value, currency }) => (
      acc + Number(value) * Number(exchangeRates[currency].ask)), 0),
}); // currency é a sigla moeda [cur.currency] está assim que
// value = 100 * currency = CAD, USD

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

// para estudar depois ===========================
// const mapStateToProps = (state) => ({
//   userEmail: state.user.email,
//   expenseTotal: state.wallet.expenses
//   .reduce((acc, cur) => (acc + Number(cur.value) * Number(cur.exchangeRates[cur.currency])),0)
// });// currency é a sigla moeda [cur.currency] está assim que
