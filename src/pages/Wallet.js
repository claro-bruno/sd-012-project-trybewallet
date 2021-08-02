import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, fetchRates } from '../redux/actions';
import WalletHeader from '../components/WalletHeader';
// import './Login.css'

const initialState = {
  selectedCurrency: 'BRL',
  value: 0,
  description: '',
  currency: 'USD',
  method: '',
  tag: '',
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
    this.addExpenseBtnClick = this.addExpenseBtnClick.bind(this);
    this.expenseForm = this.expenseForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  addExpenseBtnClick() {
    const { expenses, addExpense } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expense = { id: expenses.length, value, description, currency, method, tag };
    addExpense(expense);
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  createSelectInput(properties) {
    const [id, text, value, options, callback] = properties;
    return (
      <label htmlFor={ id }>
        { text }
        <select id={ id } onChange={ callback } value={ value }>
          {options.map((opt, i) => <option key={ i } value={ opt }>{ opt }</option>)}
        </select>
      </label>
    );
  }

  msgDiv(msg) {
    return (
      <div>
        { msg }
      </div>
    );
  }

  expenseForm() {
    const { createSelectInput, handleChange } = this;
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const methodArray = ['', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagArray = ['', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
        {createSelectInput(['currency', 'Moeda: ', currency, currencies, handleChange])}
        {createSelectInput(['method', 'Método de pagamento: ',
          method, methodArray, handleChange])}
        {createSelectInput(['tag', 'Tag: ', tag, tagArray, handleChange])}
        <button type="button" onClick={ this.addExpenseBtnClick }>
          Adicionar despesa
        </button>
      </div>
    );
  }

  render() {
    const { expenseForm, msgDiv } = this;
    const { onLoadingC, onLoadingR, error } = this.props;
    return (
      <>
        <WalletHeader />
        { (!onLoadingC && !error) && expenseForm() }
        { (onLoadingC || onLoadingR) && msgDiv('LOADING...') }
        { (error) && msgDiv(error) }
      </>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onLoadingC: PropTypes.bool,
  onLoadingR: PropTypes.bool,
  error: PropTypes.string,
  getCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  error: null,
  onLoadingC: false,
  onLoadingR: false,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  onLoadingC: state.wallet.onLoadingCurrencies,
  onLoadingR: state.wallet.onLoadingRates,
  error: state.wallet.error,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (expense) => dispatch(fetchRates(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
