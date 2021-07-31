import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, actionSaveExpense } from '../actions';
import StaticSelects from './StaticsSelects';
import StaticInputs from './StaticInputs';
import data from '../data/data';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.changeInfo = this.changeInfo.bind(this);
    this.clickButton = this.clickButton.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  changeInfo({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  clickButton() {
    this.setState((state) => ({
      id: state.id + 1,
    }));
  }

  render() {
    const { currencies, saveExpenses, getCurrencies } = this.props;
    const { id, value, description, currency,
      method, tag } = this.state;
    const expense = { id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: data,
    };
    return (
      <form>
        <StaticInputs
          onChange={ this.changeInfo }
          values={ [value, description] }
        />
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            onChange={ this.changeInfo }
            value={ currency }
          >
            {currencies.map((currenc, index) => (
              <option key={ index }>{currenc}</option>
            ))}
          </select>
        </label>
        <StaticSelects
          onChange={ this.changeInfo }
          values={ [method, tag] }
        />
        <button
          type="button"
          onClick={ () => {
            this.setState((state) => ({
              id: state.id + 1,
            }));
            saveExpenses(expense);
            getCurrencies();
          } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrencies: () => dispatch(fetchAPI()),
    saveExpenses: (expense) => dispatch(actionSaveExpense(expense)),
  };
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  saveExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
