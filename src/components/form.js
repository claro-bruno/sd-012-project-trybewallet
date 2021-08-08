import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TagSelector from './tagSelector';
import { actionCurrenciThunk, actionAddExpenses } from '../actions';
import fetchAPI from '../services/api';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  componentDidMount() {
    const { saveCurrencie } = this.props;
    saveCurrencie();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async saveForm() {
    const { saveExpenses, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const id = expenses.length === 0 ? 0 : expenses[expenses.length - 1].id + 1;
    const exchangeRates = await fetchAPI();
    const formInformations = {
      value, description, currency, method, tag, id, exchangeRates };
    saveExpenses(formInformations);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea name="description" id="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            onChange={ this.handleChange }
          >
            { currencies.map((opt) => (
              <option key={ opt } value={ opt }>{opt}</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select
            name="method"
            id="payment-method"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <TagSelector onChange={ this.handleChange } />
        <button type="button" onClick={ this.saveForm }>Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveCurrencie: PropTypes.func.isRequired,
  saveExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveCurrencie: () => dispatch(actionCurrenciThunk()),
  saveExpenses: (payload) => dispatch(actionAddExpenses(payload)),
});

const mapSateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapSateToProps, mapDispatchToProps)(Form);
