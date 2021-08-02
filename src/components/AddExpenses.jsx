import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategorySelect from './CategorySelect';
import PaymentSelect from './PaymentSelect';
import { fetchCurrencies, actionAddExpense } from '../actions';

const initialState = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class AddExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(evt) {
    const { getCurrencies } = this.props;
    getCurrencies();
    evt.preventDefault();
    const { currencies, expenses, total, addExpense } = this.props;
    const { value, currency } = this.state;
    const { ask: multiplier } = currencies[currency];
    const totalValue = value * multiplier;
    addExpense(
      { id: expenses.length, ...this.state, exchangeRates: currencies },
      total + totalValue,
    );
    this.setState(initialState);
  }

  render() {
    const { loading, currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const currencyLength = 3;
    const filteredCurrencies = [...Object.keys(currencies)]
      .filter((curr) => curr.length === currencyLength);
    if (loading) { return <p> CARREGANDO... </p>; }
    return (
      <form className="expenses-form" onSubmit={ this.handleSubmit }>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {filteredCurrencies.map((curr) => (
              <option key={ curr } value={ curr }>{curr}</option>
            ))}
          </select>
        </label>
        <PaymentSelect onChange={ this.handleChange } value={ method } />
        <CategorySelect onChange={ this.handleChange } value={ tag } />
        <label htmlFor="description">
          Descrição
          <textarea
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

AddExpenses.propTypes = {
  loading: PropTypes.bool,
  currencies: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object).isRequired,
    PropTypes.object]).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  addExpense: PropTypes.func.isRequired,
  total: PropTypes.number,
};

AddExpenses.defaultProps = {
  loading: true,
  total: 0,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (payload, total) => dispatch(actionAddExpense(payload, total)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
  loading: state.wallet.isFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenses);
